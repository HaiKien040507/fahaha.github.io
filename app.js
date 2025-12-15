
let STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  vouchers: [
    {code:'FREESHIP99', type:'shipping', min:99000, value:0},
    {code:'SALE10', type:'percent', min:0, value:10},
    {code:'SALE30', type:'percent', min:300000, value:30}
  ]
};

// ====== Utils ======
function fmt(n){ return n.toLocaleString('vi-VN') + ' ₫'; }
function save(){ localStorage.setItem('user', JSON.stringify(STATE.user)); localStorage.setItem('cart', JSON.stringify(STATE.cart)); }
function qs(s,root=document){ return root.querySelector(s); }
function qsa(s,root=document){ return Array.from(root.querySelectorAll(s)); }
function getParam(name){ return new URLSearchParams(location.search).get(name); }

// ====== Auth ======
function register({name,email,password}){
  if(!name || !email || !password) throw new Error('Vui lòng nhập đầy đủ');
  const users = JSON.parse(localStorage.getItem('users')||'[]');
  if(users.find(u=>u.email===email)) throw new Error('Email đã tồn tại');
  users.push({name,email,password,createdAt:Date.now()});
  localStorage.setItem('users', JSON.stringify(users));
  STATE.user = {name,email};
  save();
  return true;
}
function login({email,password}){
  const users = JSON.parse(localStorage.getItem('users')||'[]');
  const u = users.find(u=>u.email===email && u.password===password);
  if(!u) throw new Error('Sai email hoặc mật khẩu');
  STATE.user = {name:u.name,email:u.email};
  save();
  return true;
}
function logout(){ STATE.user = null; save(); location.href='index.html'; }

// ====== Cart ======
function addToCart(item){ // item: {id, title, price, img}
  const found = STATE.cart.find(i=>i.id===item.id);
  if(found) found.qty += 1; else STATE.cart.push({...item, qty:1});
  save(); updateCartBadge();
}
function updateQty(id,qty){
  const it = STATE.cart.find(i=>i.id===id);
  if(!it) return;
  it.qty = Math.max(1, qty);
  save();
}
function removeItem(id){
  STATE.cart = STATE.cart.filter(i=>i.id!==id);
  save();
}
function cartSubtotal(){ return STATE.cart.reduce((s,i)=> s + i.price*i.qty, 0); }
function applyVoucher(code){
  const v = STATE.vouchers.find(x=>x.code.toUpperCase()===code.toUpperCase());
  if(!v) throw new Error('Mã không hợp lệ');
  const subtotal = cartSubtotal();
  if(subtotal < v.min) throw new Error(`Đơn tối thiểu ${fmt(v.min)} để dùng mã`);
  return v;
}
function calcTotal(voucher){
  const subtotal = cartSubtotal();
  let discount = 0, shipping = subtotal>=99000?0:20000;
  if(voucher){
    if(voucher.type==='percent') discount = Math.floor(subtotal * voucher.value / 100);
    if(voucher.type==='shipping') shipping = 0;
  }
  return {subtotal, discount, shipping, total: subtotal - discount + shipping};
}
function updateCartBadge(){
  const el = qs('[data-cart-count]');
  if(el) el.textContent = STATE.cart.reduce((s,i)=>s+i.qty,0);
}

// ====== Products ======
function loadProducts(){
  if(!window.PRODUCTS) return [];
  return window.PRODUCTS;
}
function getProduct(id){
  const p = loadProducts().find(x=>String(x.id)===String(id));
  return p || null;
}
function renderProductCard(p){
  const el = document.createElement('div');
  el.className='card';
  el.innerHTML = `
    <a href="product.html?id=${p.id}">
      <div class="thumb"><img src="${p.img}" alt="${p.title}"></div>
    </a>
    <div class="info">
      <div class="title">${p.title}</div>
      <div class="price">
        <span class="now">${fmt(p.price)}</span>
        ${p.oldPrice ? `<span class="old">${fmt(p.oldPrice)}</span>`:''}
      </div>
      <div class="actions-row">
        <a class="btn" href="product.html?id=${p.id}">Xem chi tiết</a>
        <button class="btn primary" data-add="${p.id}">Thêm giỏ</button>
      </div>
    </div>`;
  el.addEventListener('click',(e)=>{
    const id = e.target.dataset.add;
    if(id){ addToCart(p); e.preventDefault(); }
  });
  return el;
}

// ====== Header binding ======
function bindHeader(){
  updateCartBadge();
  const authBox = qs('[data-auth-box]');
  if(!authBox) return;
  authBox.innerHTML = STATE.user ? `
    <span>Xin chào, ${STATE.user.name}</span>
    <a class="action" href="account.html">Tài khoản</a>
    <button class="action" id="logoutBtn">Đăng xuất</button>
  ` : `
    <a class="action" href="login.html">Đăng nhập</a>
    <a class="action" href="register.html">Đăng ký</a>
  `;
  const lg = qs('#logoutBtn');
  if(lg) lg.addEventListener('click', logout);
}

// ====== Page initializers ======
function pageHome(){
  const grid = qs('#homeGrid');
  if(!grid) return;
  const products = loadProducts().slice(0,10);
  products.forEach(p=> grid.appendChild(renderProductCard(p)));
}
function pageCategory(){
  const cat = getParam('cat') || 'all';
  const grid = qs('#catGrid'); const title = qs('#catTitle');
  if(!grid) return;
  title.textContent = cat==='all'?'Tất cả sản phẩm':`Danh mục: ${cat}`;
  let list = loadProducts();
  if(cat!=='all') list = list.filter(p=>p.category===cat);
  list.forEach(p=> grid.appendChild(renderProductCard(p)));
}
function pageProduct(){
  const id = getParam('id'); const p = getProduct(id);
  const box = qs('#productBox');
  if(!box || !p) return;
  box.innerHTML = `
    <div class="section-header"><div class="section-title">${p.title}</div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div><img src="${p.img}" alt="${p.title}"></div>
      <div>
        <div class="price"><span class="now">${fmt(p.price)}</span>${p.oldPrice?`<span class="old">${fmt(p.oldPrice)}</span>`:''}</div>
        <p>${p.desc}</p>
        <div class="row">
          <button class="btn primary" id="buyBtn">Thêm vào giỏ</button>
          <a class="btn" href="cart.html">Xem giỏ</a>
        </div>
      </div>
    </div>`;
  qs('#buyBtn').addEventListener('click', ()=>{ addToCart(p); alert('Đã thêm vào giỏ'); });
}
function pageCart(){
  const tbody = qs('#cartBody'); const totals = qs('#cartTotals');
  if(!tbody) return;
  tbody.innerHTML = '';
  STATE.cart.forEach(i=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${i.img}" alt="${i.title}" style="width:48px;height:48px;border-radius:8px"> ${i.title}</td>
      <td>${fmt(i.price)}</td>
      <td><input type="number" min="1" value="${i.qty}" data-qty="${i.id}" style="width:70px"></td>
      <td>${fmt(i.price*i.qty)}</td>
      <td><button class="btn" data-rm="${i.id}">Xóa</button></td>`;
    tbody.appendChild(tr);
  });
  qsa('input[data-qty]').forEach(inp=>{
    inp.addEventListener('change', ()=>{ updateQty(Number(inp.dataset.qty), Number(inp.value)); pageCart(); });
  });
  qsa('button[data-rm]').forEach(btn=>{
    btn.addEventListener('click', ()=>{ removeItem(Number(btn.dataset.rm)); pageCart(); updateCartBadge(); });
  });
  const voucherInput = qs('#voucherInput'); const applyBtn = qs('#applyVoucher'); let applied;
  if(applyBtn){
    applyBtn.onclick = ()=>{
      try{ 
        applied = applyVoucher(voucherInput.value.trim()); 
        qs('#voucherMsg').textContent = 'Áp dụng mã: '+applied.code;
        // Lưu mã voucher vào localStorage để dùng ở trang checkout
        localStorage.setItem('appliedVoucher', JSON.stringify(applied));
      }
      catch(e){ 
        qs('#voucherMsg').textContent = e.message; 
        applied=null;
        localStorage.removeItem('appliedVoucher');
      }
      renderTotals(applied);
    };
  }
  function renderTotals(v){ const t = calcTotal(v);
    totals.innerHTML = `
      <tr><td>Tạm tính</td><td style="text-align:right">${fmt(t.subtotal)}</td></tr>
      <tr><td>Giảm giá</td><td style="text-align:right">-${fmt(t.discount)}</td></tr>
      <tr><td>Phí vận chuyển</td><td style="text-align:right">${fmt(t.shipping)}</td></tr>
      <tr><td><strong>Tổng cộng</strong></td><td style="text-align:right"><strong>${fmt(t.total)}</strong></td></tr>`;
  }
  renderTotals();
}
function pageCheckout(){
  const form = qs('#checkoutForm'); 
  const qrBox = qs('#qrBox');
  const qrImage = qs('#qrImage');
  const qrAmount = qs('#qrAmount');
  
  if(!form) return;
  
  // ====== CẤU HÌNH NGÂN HÀNG - THAY ĐỔI Ở ĐÂY ======
  const BANK_CONFIG = {
    bankCode: 'VCB',              // Mã ngân hàng: VCB, TCB, MB, ACB, VPBank, Techcombank, etc.
    accountNo: '7396775374',      // Số tài khoản của bạn
    accountName: 'BOOKSHOP DEMO'  // Tên chủ tài khoản (viết HOA, không dấu)
  };
  // ===============================================
  
  // Lấy voucher đã áp dụng từ trang cart (nếu có)
  let appliedVoucher = null;
  try {
    const saved = localStorage.getItem('appliedVoucher');
    if(saved) appliedVoucher = JSON.parse(saved);
  } catch(e) {}
  
  const sum = calcTotal(appliedVoucher);
  qs('#orderSummary').textContent = `Tổng thanh toán: ${fmt(sum.total)} (Tạm tính ${fmt(sum.subtotal)}${appliedVoucher ? ', Giảm giá ' + fmt(sum.discount) : ''})`;
  
  // Lắng nghe thay đổi phương thức thanh toán
  const paymentRadios = form.querySelectorAll('input[name="payment"]');
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === 'bank') {
        // Hiện QR
        qrBox.style.display = 'block';
        qrAmount.textContent = sum.total.toLocaleString('vi-VN');
        
        // Tạo link QR theo chuẩn VietQR
        const qrUrl = `https://img.vietqr.io/image/${BANK_CONFIG.bankCode}-${BANK_CONFIG.accountNo}-compact.png?amount=${sum.total}&addInfo=Thanh+toan+don+hang&accountName=${encodeURIComponent(BANK_CONFIG.accountName)}`;
        
        qrImage.src = qrUrl;
        
        // Cập nhật thông tin hiển thị
        qs('#bankName').textContent = BANK_CONFIG.bankCode;
        qs('#bankAccount').textContent = BANK_CONFIG.accountNo;
        qs('#bankAccountName').textContent = BANK_CONFIG.accountName;
      } else {
        qrBox.style.display = 'none';
      }
    });
  });
  
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!STATE.user){ alert('Vui lòng đăng nhập trước khi thanh toán'); location.href='login.html'; return; }
    const data = Object.fromEntries(new FormData(form).entries());
    const order = {id: Date.now(), user: STATE.user, items: STATE.cart, total: sum.total, shipping:data};
    localStorage.setItem('lastOrder', JSON.stringify(order));
    STATE.cart = []; 
    localStorage.removeItem('appliedVoucher'); // Xóa voucher sau khi đặt hàng
    save();
    alert('Đặt hàng thành công!'); location.href='account.html';
  });
}
function pagePromotions(){
  const list = qs('#promoList');
  if(!list) return;
  STATE.vouchers.forEach(v=>{
    const li = document.createElement('li');
    li.innerHTML = `<strong>${v.code}</strong> – ${v.type==='percent'?`Giảm ${v.value}%`:'Miễn phí vận chuyển'} • Đơn tối thiểu ${fmt(v.min)}`;
    list.appendChild(li);
  });
}

// ====== Bootstrap ======
document.addEventListener('DOMContentLoaded', ()=>{
  bindHeader();
  // Router by presence
  pageHome(); pageCategory(); pageProduct(); pageCart(); pageCheckout(); pagePromotions();
});
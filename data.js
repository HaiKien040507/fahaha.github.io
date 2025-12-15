window.PRODUCTS = [
  // Văn học
  {id:1, title:'Mưa Đỏ', price:184500, oldPrice:205000, category:'van-hoc', img:'assets/book1.jpg', desc:'Tiểu thuyết Việt Nam nổi bật.', pages:320, publisher:'NXB Văn Học', format:'Bìa mềm'},
  {id:2, title:'Truyện ngắn chọn lọc', price:99000, category:'van-hoc', img:'assets/book6.jpg', desc:'Tuyển tập tác giả trẻ.', pages:250, publisher:'NXB Trẻ', format:'Bìa mềm'},
  {id:3, title:'Người lái đò sông Đà', price:78000, oldPrice:95000, category:'van-hoc', img:'assets/book8.jpg', desc:'Tác phẩm kinh điển của Nguyễn Tuân.', pages:200, publisher:'NXB Giáo Dục', format:'Bìa mềm'},
  {id:4, title:'Dế Mèn phiêu lưu ký', price:65000, category:'van-hoc', img:'assets/book9.jpg', desc:'Truyện thiếu nhi nổi tiếng của Tô Hoài.', pages:180, publisher:'NXB Kim Đồng', format:'Bìa mềm'},
  {id:5, title:'Nhật ký trong tù', price:99000, category:'van-hoc', img:'assets/book10.jpg', desc:'Tập thơ của Hồ Chí Minh.', pages:150, publisher:'NXB Chính Trị Quốc Gia', format:'Bìa mềm'},

  // Kinh tế
  {id:6, title:'Marketing Căn Bản', price:99000, oldPrice:120000, category:'kinh-te', img:'assets/book2.jpg', desc:'Kiến thức nền tảng marketing.', pages:300, publisher:'NXB Kinh Tế', format:'Bìa mềm'},
  {id:7, title:'Kinh tế học đại cương', price:150000, category:'kinh-te', img:'assets/book4.jpg', desc:'Giáo trình kinh tế cơ bản.', pages:400, publisher:'NXB Lao Động', format:'Bìa cứng'},
  {id:8, title:'Quản trị kinh doanh', price:175000, oldPrice:190000, category:'kinh-te', img:'assets/book11.jpg', desc:'Kiến thức quản trị dành cho sinh viên.', pages:350, publisher:'NXB Thống Kê', format:'Bìa mềm'},
  {id:9, title:'Đầu tư chứng khoán', price:210000, category:'kinh-te', img:'assets/book12.jpg', desc:'Cẩm nang đầu tư chứng khoán.', pages:280, publisher:'NXB Tài Chính', format:'Bìa mềm'},
  {id:10, title:'Kinh tế vi mô', price:165000, category:'kinh-te', img:'assets/book13.jpg', desc:'Giáo trình kinh tế vi mô.', pages:320, publisher:'NXB Giáo Dục', format:'Bìa mềm'},

  // Thiếu nhi
  {id:11, title:'Ehon Bé Khám Phá', price:65000, category:'thieu-nhi', img:'assets/book3.jpg', desc:'Ehon dễ thương, giấy dày an toàn.', pages:40, publisher:'NXB Kim Đồng', format:'Bìa mềm'},
  {id:12, title:'Truyện cổ Grimm', price:89000, category:'thieu-nhi', img:'assets/book14.jpg', desc:'Tuyển tập truyện cổ tích Grimm.', pages:200, publisher:'NXB Văn Học', format:'Bìa cứng'},
  {id:13, title:'Ehon Bé Tập Đếm', price:55000, category:'thieu-nhi', img:'assets/book15.jpg', desc:'Sách Ehon giúp bé học số.', pages:30, publisher:'NXB Kim Đồng', format:'Bìa mềm'},
  {id:14, title:'Truyện tranh thiếu nhi', price:75000, category:'thieu-nhi', img:'assets/book16.jpg', desc:'Truyện tranh vui nhộn.', pages:120, publisher:'NXB Trẻ', format:'Bìa mềm'},
  {id:15, title:'Truyện cổ Andersen', price:95000, category:'thieu-nhi', img:'assets/book26.jpg', desc:'Tuyển tập truyện cổ Andersen.', pages:220, publisher:'NXB Văn Học', format:'Bìa cứng'},

  // Văn phòng phẩm
  {id:16, title:'Sổ tay Vintage', price:45000, oldPrice:60000, category:'van-phong-pham', img:'assets/stationery1.jpg', desc:'Sổ tay bìa cứng, giấy không lem.', pages:100, publisher:'Nhã Nam Stationery', format:'Bìa cứng'},
  {id:17, title:'Bút bi gel', price:12000, oldPrice:15000, category:'van-phong-pham', img:'assets/stationery2.jpg', desc:'Bút gel 0.5mm viết êm.', pages:null, publisher:'Thiên Long', format:'Dụng cụ'},
  {id:18, title:'Bút chì gỗ HB', price:5000, category:'van-phong-pham', img:'assets/stationery3.jpg', desc:'Bút chì gỗ HB chất lượng cao.', pages:null, publisher:'Thiên Long', format:'Dụng cụ'},
  {id:19, title:'Thước kẻ 30cm', price:8000, category:'van-phong-pham', img:'assets/stationery4.jpg', desc:'Thước nhựa trong suốt.', pages:null, publisher:'Thiên Long', format:'Dụng cụ'},
  {id:20, title:'Tập vở học sinh', price:15000, category:'van-phong-pham', img:'assets/stationery5.jpg', desc:'Vở kẻ ngang 200 trang.', pages:200, publisher:'Hồng Hà', format:'Bìa mềm'},

  // Ngoại ngữ
  {id:21, title:'Tiếng Anh giao tiếp', price:135000, category:'ngoai-ngu', img:'assets/book5.jpg', desc:'Tài liệu luyện nói kèm audio.', pages:250, publisher:'NXB Giáo Dục', format:'Bìa mềm'},
  {id:22, title:'Tiếng Nhật sơ cấp', price:125000, category:'ngoai-ngu', img:'assets/book17.jpg', desc:'Giáo trình tiếng Nhật N5.', pages:300, publisher:'NXB Ngoại Ngữ', format:'Bìa mềm'},
  {id:23, title:'Tiếng Trung giao tiếp', price:145000, category:'ngoai-ngu', img:'assets/book18.jpg', desc:'Sách luyện nói tiếng Trung.', pages:280, publisher:'NXB Ngoại Ngữ', format:'Bìa mềm'},
  {id:24, title:'Tiếng Pháp cơ bản', price:155000, category:'ngoai-ngu', img:'assets/book19.jpg', desc:'Giáo trình tiếng Pháp.', pages:260, publisher:'NXB Ngoại Ngữ', format:'Bìa mềm'},
  {id:25, title:'Tiếng Hàn sơ cấp', price:140000, category:'ngoai-ngu', img:'assets/book28.jpg', desc:'Giáo trình tiếng Hàn sơ cấp.', pages:280, publisher:'NXB Ngoại Ngữ', format:'Bìa mềm'},

  // Manga
  {id:26, title:'Manga Hot Vol.1', price:89000, category:'manga', img:'assets/manga1.jpg', desc:'Tập đầu series đình đám.', pages:180, publisher:'NXB Kim Đồng', format:'Bìa mềm'},
  {id:27, title:'Manga Hot Vol.2', price:92000, category:'manga', img:'assets/manga2.jpg', desc:'Tập tiếp theo của series.', pages:190, publisher:'NXB Kim Đồng', format:'Bìa mềm'},
  {id:28, title:'Manga Hot Vol.3', price:95000, category:'manga', img:'assets/manga3.jpg', desc:'Tập 3 với nhiều tình tiết hấp dẫn.', pages:200, publisher:'NXB Kim Đồng', format:'Bìa mềm'},
 // Manga tiếp tục
{ id:29, title:'Manga Hot Vol.4', price:97000, category:'manga', img:'assets/manga4.jpg', desc:'Tập 4 tiếp nối câu chuyện.', pages:210, publisher:'NXB Kim Đồng', format:'Bìa mềm' },

// Ngoại văn
{ id:30, title:'English Novel – Classic', price:225000, category:'ngoai-van', img:'assets/book20.jpg', desc:'Tiểu thuyết tiếng Anh kinh điển.', pages:400, publisher:'Penguin Classics', format:'Bìa cứng' },
{ id:31, title:'Modern English Novel', price:245000, oldPrice:270000, category:'ngoai-van', img:'assets/book31.jpg', desc:'Tiểu thuyết tiếng Anh hiện đại, nội dung sâu sắc.', pages:420, publisher:'Penguin Random House', format:'Bìa cứng' },
{ id:32, title:'Classic French Novel', price:235000, category:'ngoai-van', img:'assets/book32.jpg', desc:'Tiểu thuyết Pháp kinh điển, bản dịch chuẩn.', pages:380, publisher:'Gallimard', format:'Bìa mềm' },
{ id:33, title:'Japanese Novel – Bestseller', price:265000, category:'ngoai-van', img:'assets/book33.jpg', desc:'Tiểu thuyết Nhật Bản bán chạy nhất.', pages:350, publisher:'Kodansha', format:'Bìa mềm' },
{ id:34, title:'American Novel – Contemporary', price:255000, category:'ngoai-van', img:'assets/book34.jpg', desc:'Tiểu thuyết Mỹ đương đại.', pages:400, publisher:'HarperCollins', format:'Bìa cứng' },
{ id:35, title:'Romantic Novel – UK', price:215000, oldPrice:240000, category:'ngoai-van', img:'assets/book35.jpg', desc:'Tiểu thuyết lãng mạn Anh quốc.', pages:300, publisher:'Bloomsbury', format:'Bìa mềm' },

// Manga
{ id:36, title:'Manga Hot Vol.5', price:99000, category:'manga', img:'assets/manga5.jpg', desc:'Tập 5 tiếp nối câu chuyện hấp dẫn.', pages:220, publisher:'NXB Kim Đồng', format:'Bìa mềm' },
{ id:37, title:'Manga Hot Vol.6', price:102000, category:'manga', img:'assets/manga6.jpg', desc:'Tập 6 với nhiều tình tiết bất ngờ.', pages:210, publisher:'NXB Kim Đồng', format:'Bìa mềm' },
{ id:38, title:'Manga Hot Vol.7', price:105000, category:'manga', img:'assets/manga7.jpg', desc:'Tập 7 đầy kịch tính.', pages:230, publisher:'NXB Kim Đồng', format:'Bìa mềm' },
{ id:39, title:'Manga Hot Vol.8', price:108000, category:'manga', img:'assets/manga8.jpg', desc:'Tập 8 tiếp tục series đình đám.', pages:240, publisher:'NXB Kim Đồng', format:'Bìa mềm' },
{ id:40, title:'Manga Hot Vol.9', price:112000, category:'manga', img:'assets/manga9.jpg', desc:'Tập 9 với cao trào bất ngờ.', pages:250, publisher:'NXB Kim Đồng', format:'Bìa mềm' },
];
document.getElementById('book-category').innerText = product.category;
document.getElementById('book-format').innerText = product.format || 'Đang cập nhật';
document.getElementById('book-pages').innerText = product.pages ? product.pages + ' trang' : 'Đang cập nhật';
document.getElementById('book-publisher').innerText = product.publisher || 'Đang cập nhật';    

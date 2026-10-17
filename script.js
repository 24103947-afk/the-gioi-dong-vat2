// Lưu trạng thái ban đầu để có thể hoàn tác.
const originalText = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
const originalBackground = 'url("images/nature.svg")';

// Được gọi khi người dùng rê chuột hoặc chuyển tiêu điểm vào một hình.
function update(previewPic) {
  console.log("Sự kiện update() đã được kích hoạt.");
  console.log("Văn bản alt:", previewPic.alt);
  console.log("Nguồn ảnh:", previewPic.src);

  const preview = document.querySelector("#image");
  preview.textContent = previewPic.alt;
  preview.style.backgroundImage = `url("${previewPic.src}")`;
}

// Đưa khung xem trước về nội dung và hình nền ban đầu.
function undo() {
  const preview = document.getElementById("image");
  preview.textContent = originalText;
  preview.style.backgroundImage = originalBackground;
}

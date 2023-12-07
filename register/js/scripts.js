document.addEventListener("DOMContentLoaded", function () {
    var groupContainer2 = document.getElementById("groupContainer2");

    if (groupContainer2) {
        groupContainer2.addEventListener("click", function (e) {
            // Xử lý sự kiện khi người dùng nhấp vào nút Đăng ký
            // Đảm bảo rằng bạn thêm mã xử lý cần thiết ở đây
        });
    }

    var ngNhpText = document.getElementById("ngNhpText");

    if (ngNhpText) {
        ngNhpText.addEventListener("click", function (e) {
            // Chuyển hướng đến trang Đăng nhập khi người dùng nhấp vào liên kết
            window.location.href = "./loginpage.html";
        });
    }
});

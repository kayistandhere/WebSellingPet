document.getElementById("filter_btn").addEventListener("click", function () {
    var startDate = document.getElementById("start_date").value;
    var endDate = document.getElementById("end_date").value;

    // Hàm chuyển đổi định dạng ngày thành MM/dd/yyyy
    function formatDate(dateString) {
        var dateObject = new Date(dateString);
        var month = String(dateObject.getMonth() + 1).padStart(2, "0");
        var day = String(dateObject.getDate()).padStart(2, "0");
        var year = dateObject.getFullYear();
        return month + "/" + day + "/" + year;
    }

    // Chuyển đổi định dạng ngày trong bảng thành MM/dd/yyyy trước khi so sánh
    var rows = document.querySelectorAll("#tab_1-1 tbody tr");
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var dateCell = row.cells[3]; // Thời gian giao hàng nằm trong cột thứ 4
        var originalDate = dateCell.innerText;
        var formattedDate = formatDate(originalDate);
        dateCell.innerText = formattedDate;
    }

    // Chuyển đổi định dạng ngày bắt đầu và kết thúc thành MM/dd/yyyy
    var formattedStartDate = formatDate(startDate);
    var formattedEndDate = formatDate(endDate);

    // Tạo một mảng để lưu các chỉ số hàng cần ẩn dựa trên ngày bắt đầu và kết thúc
    var rowsToHide = [];

    // Lấy tất cả các hàng trong bảng đã xác nhận
    rows = document.querySelectorAll("#tab_1-1 tbody tr");

    // Duyệt qua từng hàng để kiểm tra ngày và quyết định ẩn hay hiển thị
    for (var j = 0; j < rows.length; j++) {
        var date = rows[j].cells[3].innerText; // Thời gian giao hàng nằm trong cột thứ 4

        // Kiểm tra nếu ngày nằm trong khoảng ngày bắt đầu và kết thúc
        if (date >= formattedStartDate && date <= formattedEndDate) {
            rowsToHide.push(j); // Ẩn hàng này
        }
    }

    // Ẩn hoặc hiển thị các hàng dựa trên chỉ số đã tìm được
    for (var k = 0; k < rows.length; k++) {
        rows[k].style.display = rowsToHide.includes(k) ? "table-row" : "none";
    }
});

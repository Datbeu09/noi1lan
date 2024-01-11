
    // Tạo số ngẫu nhiên từ 1 đến 10 
    var randomNumber = Math.floor(Math.random() * 10) ;

    // Hàm kiểm tra giá trị nhập vào và thông báo kết quả
    function guessNumber() {
        // Nhập giá trị từ người dùng
        var userGuess = prompt("Hãy đoán xem số từ 1 đến 10:");

        // Chuyển đổi giá trị nhập từ chuỗi sang số nguyên
        userGuess = parseInt(userGuess);

        // Kiểm tra xem giá trị nhập vào có đúng không
        if (userGuess >=1 || userGuess <=10) {
            // Kiểm tra xem giá trị nhập vào có trùng với số ngẫu nhiên không
            if (userGuess === randomNumber) {
                alert(" Nổ Hũ");
            } else {
                alert("Top 8 ");
                // Gọi lại hàm để yêu cầu nhập lại
                guessNumber();
            }
        } else {
            alert("Vui lòng nhập lại ");
            // Gọi lại hàm để yêu cầu nhập lại
            guessNumber();
        }
    }

    // Gọi hàm để bắt đầu chương trình
    guessNumber();



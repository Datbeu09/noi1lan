function check(number) {
    if (number % 2 == 0){
        return "Số" + number + " là số chẵn ";
    }else {
        return "Số" + number + "là số lẻ ";
    }
}

var number =  prompt("Nhập số cần kiểm tra ")
document.write(check(number))

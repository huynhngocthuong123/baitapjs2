/**
 * khối 1: input
 * + numberNhap (có 2 chữ số)
 * 
 * khối 2
 * + soHangChuc = math.floor(numberNhap / 10)
 * + soHangDonVi = numberNhap % 10
 * 
 * + tong = soHangChuc + soHangDonVi
 * khối 3:
 * + tong
 * 
 */


function tinhSoNhap(){
    var numberNhap = document.getElementById("num").value;
    var soHangChuc = 0
    var soHangDonVi = 0;
    var tong = 0;

    soHangChuc = Math.floor( numberNhap / 10);
    soHangDonVi = numberNhap % 10;
    tong = Number(soHangChuc) + Number(soHangDonVi)
    
    document.getElementById("result5").innerHTML = tong;
}
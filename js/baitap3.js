/**
 * khối 1: input
 * + usdNhap
 * + vndNhap (tỷ lệ hiện hành vnd/1usd)
 * 
 * khối 2: 
 * quyDoi = usdNhap * vndNhap
 * 
 * khối 3:
 * + quyDoi
 */


function tienQuyDoi(){
    var usdNhap = document.getElementById("money").value;
    var vndNhap = document.getElementById("tyGia").value;
    var quyDoi = 0;
    quyDoi = usdNhap * vndNhap;
    document.getElementById("result").innerHTML = quyDoi.toLocaleString() + " VND";
}
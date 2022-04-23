/**
 * khối 1: input
 * + daiNhap
 * + rongNhap
 * 
 * khối 2:
 * + dienTich = daiNhap * rongNhap
 * + chuVi = ( daiNhap + rongNhap) * 2
 * 
 * khối 3:
 * + dienTich
 * + chuVi
 * 
 */

function tinhToan(){
    var daiNhap = document.getElementById("chieudai").value;
    var rongNhap = document.getElementById("chieurong").value;
    var dienTich = 0;
    var chuVi = 0;
    dienTich = daiNhap * rongNhap;
    chuVi = (Number(daiNhap) + Number(rongNhap)) * 2
    document.getElementById("result1").innerHTML ="Diện tích: " + dienTich + " m2" ;
    document.getElementById("result2").innerHTML ="Chu vi: " + chuVi + " m";
}
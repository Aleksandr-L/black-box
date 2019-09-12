function plus() {
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
        num2 = parseInt(num2);
        num1 = parseInt(num1);
    var result = num1 + num2;
        document.getElementById('out').innerHTML = result;
}
function btnminus(){
    var num1,num2,result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num1 = parseInt(num1);
    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}
function btnmult(){
    var num1,num2,result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num1 = parseInt(num1);
    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}
function btndel() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num1 = parseInt(num1);
    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
}
function f() {
    var nd = document.getElementsByTagName("div").value

}
function l (3,3) {
    let a = 3,
        b = 3;
    c = a + b
}alert(l)


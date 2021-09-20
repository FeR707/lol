

function calcular(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operacion = document.getElementById("operacion").value;

    if(operacion==1){
        document.getElementById("resultado").value = num1 + num2;
    }
    else{
        document.getElementById("resultado").value = num1 - num2;
    }
}
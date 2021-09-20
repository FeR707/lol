var num1 = 10;
var num2 = 10;
var total = 0;
var operacion = prompt("Ingresa la operacion");

switch(operacion){
    
    case "suma":
        suma(num1 +num2);break;
    case "resta":
        resta(num1-num2); break;
    case "resta":
        multiplicacion(num1*num2); break;
    case "divicion":
        divicion(num1/num2); break;
    default:
        console.log("Error"); break;
}

alert("La operacion es: "+operacion+": "+total);

function operacionFuncion(tipo){
    
    switch(tipo){
        case 1:
            return num1 + num2; break;
        case 2:
            return num1 - num2; break;
        case 3:
            return num1 * num2; break;
        case 4:
            return num1 / num2; break;
    }
}

function suma(){
    total = operacionFuncion(1)
}

function resta(){
    total = operacionFuncion(2)
}

function multiplicacion(){
    total = operacionFuncion(3)
}

function divicion(){
    total = operacionFuncion(4)
}
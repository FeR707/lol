var total = [];

function agregar1(){
    var objeto1 = document.getElementById("obj1").value;
    var precio1 = document.getElementById("num1").value;
    var los1 = parseInt(document.getElementById('num1').value);

    let listas = document.getElementById('listas');
    let li = document.createElement('li');
    li.textContent=objeto1;
    listas.appendChild(li);

    let precios =document.getElementById('precios')
    let lii = document.createElement('li');
    lii.textContent=precio1;
    precios.appendChild(lii);


    total.push(los1);
}

function agregar2(){
    var objeto2 = document.getElementById("obj2").value;
    var precio2 = document.getElementById("num2").value;
    var los2 = parseInt(document.getElementById('num2').value);

    let listas = document.getElementById('listas');
    let li = document.createElement('li');
    li.textContent=objeto2;
    listas.appendChild(li);

    let precios =document.getElementById('precios')
    let lii = document.createElement('li');
    lii.textContent=precio2;
    precios.appendChild(lii);

    total.push(los2);
}

function agregar3(){
    var objeto3 = document.getElementById("obj3").value;
    var precio3 = document.getElementById("num3").value;
    var los3 = parseInt(document.getElementById('num3').value);

    let listas = document.getElementById('listas');
    let li = document.createElement('li');
    li.textContent=objeto3;
    listas.appendChild(li);

    let precios =document.getElementById('precios')
    let lii = document.createElement('li');
    lii.textContent=precio3;
    precios.appendChild(lii);

    total.push(los3);
}

function agregar4(){
    var objeto4 = document.getElementById("obj4").value;
    var precio4 = document.getElementById("num4").value;
    var los4 = parseInt(document.getElementById('num4').value);


    let listas = document.getElementById('listas');
    let li = document.createElement('li');
    li.textContent=objeto4;
    listas.appendChild(li);

    let precios =document.getElementById('precios')
    let lii = document.createElement('li');
    lii.textContent=precio4;
    precios.appendChild(lii);
    
    total.push(los4);
}

console.log(total);

function calcular(){
let sum =0;

    for (let index = 0; index < total.length; index++) {
        sum += total[index];
    }


    document.getElementById('resultado').value = sum;
}
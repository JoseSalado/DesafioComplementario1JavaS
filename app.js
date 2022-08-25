//Forma 1 

let numero1 = Number(prompt("Ingrese un numero"));
let numero2 =Number(prompt("Ingrese otro numero"));

for(let i = 2; i<=10; i++){
    let resultado = (numero1 + numero2) * i;
    alert(`(${numero1} + ${numero2}) x ${i} = ${resultado}`);

}
// otra forma de realizar el ejercicio.
/*
let numero1 = Number(prompt("Ingrese un numero"));
let numero2 =Number(prompt("Ingrese otro numero"));

for(let i = 2; i<=10; i++){
    let suma = numero1 + numero2;
    let resultado = suma * i;
    alert(`(${numero1} + ${numero2}) = ${suma} x ${i} = ${resultado}`);

}*/
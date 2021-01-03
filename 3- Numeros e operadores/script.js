let soma = 10 + 10;
let sub = 100 - 50;
let multi = 10 * 2;
let divisao = 100 / 2;
let expo = 2 ** 4;


console.log(soma, sub, multi, divisao, expo);

if(isNaN(soma)){
    console.log("É NaN");
}else{
    console.log("Não é NaN");
}


// Pré e pós Incremento 
var i = 1;

/* Ao fazer o incremento usando "i++", ocorre da saída ser mostrada
primeiro do que o incremento, então mesmo que o primeiro console.log 
há um incremento, a saída será 1, e somente depois no segundo console.log
que a saída será 2.*/

console.log(i++);
console.log(i);

/*Ao fazer o incremento usando "++i", ocorre do incremento ser feito antes
da variável i ser mostrada, por conta disso, na primeira chamada a var i
já é mostrada como 2 (ao contrário da primeira forma de incremento)*/

i = 1;
console.log(++i);
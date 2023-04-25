"use strict";
exports.__esModule = true;
var frase = true;
var preco = 500;
var condicao = preco > 200;
console.log(typeof frase);
console.log(typeof preco);
console.log(typeof condicao);
if (typeof frase === 'string') {
    console.log("é uma string");
}
else {
    console.log("frase nao é uma string");
}
console.log('==========');
var frase1 = new String('front-end');
var frase2 = String('front-end');
var frase3 = 'front-end';
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);

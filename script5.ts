export{}

const frase= true
const preco = 500
const condicao:boolean = preco > 200

console.log(typeof frase)
console.log(typeof preco)
console.log(typeof condicao)


if(typeof frase ==='string') {
console.log("é uma string")
} else {
    console.log("frase nao é uma string")
}

console.log('==========')

const frase1 = new String('front-end')
const frase2 = String('front-end')
const frase3 = 'front-end'

console.log(typeof frase1)
console.log(typeof frase2)
console.log(typeof frase3)
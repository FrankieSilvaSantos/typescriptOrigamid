const produto:string = 'Livro'

let preco:number = 200

const carro: {

    marca: string;
    portas: number
} = {

    marca: 'audi',
    portas: 5
}

carro.marca = 'Lambo'


let preco2:number = 200

const barato: boolean | string = preco2 < 200 ? true : "Produto barato"

console.log(barato)
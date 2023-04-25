export {}

interface InterfaceProduto {
    nome: string;
    preco: number;
    teclado:boolean;
}

// type TypeProduto = {
//     nome: string;
//     preco:number;
//     teclado: boolean;
// }

const produto: InterfaceProduto = {
    nome: 'Computador',
    preco: 4000,
    teclado: true
}

console.log(produto)
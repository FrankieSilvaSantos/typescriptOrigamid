const nintendo : {
nome: string,
preco: string;
} = {
nome: 'Nintendo',
preco: '2000'
}

function transformarPreco(produto: {nome:string; preco:string}) {

    produto.preco = "R$" + produto.preco
    return produto
}

const produtoNovo = console.log(transformarPreco(nintendo))

// console.log(produtoNovo)
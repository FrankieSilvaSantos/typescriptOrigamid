

type Produto = {
    nome:string,
    preco:number,
    teclado: boolean
}


function preencherDados(dados: Produto) {
    document.body.innerHTML += `
    <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'SIM' : 'NAO'} </p>
    </div>
    `
}

preencherDados({
    nome: 'computador',
    preco: 2000,
    teclado: true
})

preencherDados({
    nome:'Notebook',
    preco: 4000,
    teclado: false
})

type NumberOrString = string | number // diz o tipo para ser colocado como template em uma variavel

let numero:NumberOrString = 200
numero = '200'

type Categorias = "design" | "codigo" | "descod"

function pintarCategorias(categoria: Categorias) {
    console.log(categoria)
}

pintarCategorias("design")
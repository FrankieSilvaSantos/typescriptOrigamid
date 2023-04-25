const produtos = [


    {
        nome: "O Senhor dos Aneis",
        tipo: "Livro"
    },

       {
        nome: "A Guerra dos Tronos",
        tipo: "Livro"
    },

       {
        nome: "Dark Souls",
        tipo: "Jogo"
    }
]

function filtrarDados(dados) {
    return dados.filter(item => item.tipo ==='Livro')
}

console.log(filtrarDados(produtos))
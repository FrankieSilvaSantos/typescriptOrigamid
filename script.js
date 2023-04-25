var produtos = [
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
];
function filtrarDados(dados) {
    return dados.filter(function (item) { return item.tipo === 'Livro'; });
}
console.log(filtrarDados(produtos));

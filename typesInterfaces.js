function preencherDados(dados) {
    document.body.innerHTML += "\n    <div>\n    <h2>".concat(dados.nome, "</h2>\n    <p>R$ ").concat(dados.preco, "</p>\n    <p>Inclui teclado: ").concat(dados.teclado ? 'SIM' : 'NAO', " </p>\n    </div>\n    ");
}
preencherDados({
    nome: 'computador',
    preco: 2000,
    teclado: true
});
preencherDados({
    nome: 'Notebook',
    preco: 4000,
    teclado: false
});
var numero = 200;
numero = '200';
function pintarCategorias(categoria) {
    console.log(categoria);
}
pintarCategorias("design");

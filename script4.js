var nintendo = {
    nome: 'Nintendo',
    preco: '2000'
};
function transformarPreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
var produtoNovo = console.log(transformarPreco(nintendo));
// console.log(produtoNovo)

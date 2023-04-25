export{}

async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json')
    const data = await response.json()
    console.log(data)
    return showProduto(data)
}


interface Produto {
    descricao: string;
    empresaFabricante: {
        fundacao:number;
        nome: string;
        pais: string;
    }
    empresaMontadora:{
        fundacao:number;
        nome:string;
        pais:string;

    }
    garantia: string;
    nome: string;
    preco: number;
    seguroAcidentes: boolean;
}

fetchProduto()

function showProduto(data: Produto) {
    document.body.innerHTML = `
    <div>
    <h2>${data.nome} </h2>
    <p>${data.descricao}</p>
    <h3>${data.empresaFabricante.nome}</h3>
    <h3>${data.empresaMontadora.nome}</h3>
    <p>${data.garantia}</p>
    <p>${data.preco}</p>
    <p>${data.seguroAcidentes}</p>
    </div>
    `
}

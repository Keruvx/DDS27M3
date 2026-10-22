
const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let produtos = [
    { nome: "X-Burguer", preco: 15.00, categoria: "Lanche" },
    { nome: "Batata Frita", preco: 10.00, categoria: "Acompanhamento" },
    { nome: "Refrigerante", preco: 8.00, categoria: "Bebida" },
    { nome: "Milk-shake", preco: 12.00, categoria: "Bebida" },
    { nome: "Sorvete", preco: 7.00, categoria: "Sobremesa" }
];

let pedidos = [];

function listarMenu() {
    console.log("\n========== CARDÁPIO ==========");

    for (let i = 0; i < produtos.length; i++) {
        console.log(
            `${i + 1} - ${produtos[i].nome}` +
            ` | Categoria: ${produtos[i].categoria}` +
            ` | R$ ${produtos[i].preco.toFixed(2)}`
        );
    }

    console.log("==============================\n");
}

function cadastrarPedido(produto, quantidade) {

    let produtoEncontrado = produtos.find(function (item) {
        return item.nome.toLowerCase() ===
               produto.trim().toLowerCase();
    });

    if (!produtoEncontrado) {
        console.log("\nProduto não encontrado no cardápio!");
        return;
    }

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        console.log("\nInforme uma quantidade inteira maior que zero!");
        return;
    }

    let valorTotal = produtoEncontrado.preco * quantidade;

    let novoPedido = {
        produto: produtoEncontrado.nome,
        quantidade: quantidade,
        precoUnitario: produtoEncontrado.preco,
        valorTotal: valorTotal
    };

    pedidos.push(novoPedido);

    console.log("\nPedido cadastrado com sucesso!");

    listarPedidos();
}

function listarPedidos() {
    console.log("\n======= PEDIDOS CADASTRADOS =======");

    if (pedidos.length === 0) {
        console.log("Nenhum pedido cadastrado.");
        return;
    }

    for (let i = 0; i < pedidos.length; i++) {
        console.log(`\nPedido ${i + 1}`);
        console.log(`Produto: ${pedidos[i].produto}`);
        console.log(`Quantidade: ${pedidos[i].quantidade}`);
        console.log(
            `Preço unitário: R$ ${pedidos[i].precoUnitario.toFixed(2)}`
        );
        console.log(
            `Valor total: R$ ${pedidos[i].valorTotal.toFixed(2)}`
        );
    }

    console.log("\n==================================");
}

function solicitarPedido() {
    entrada.question(
        "Digite o nome do produto (ou 'sair' para encerrar): ",
        function (nomeProduto) {

            if (nomeProduto.trim().toLowerCase() === "sair") {
                console.log("\nEncerrando o sistema...");
                listarPedidos();
                entrada.close();
                return;
            }

            entrada.question(
                "Digite a quantidade desejada: ",
                function (respostaQuantidade) {

                    let quantidade = Number(respostaQuantidade);

                    cadastrarPedido(nomeProduto, quantidade);

                    solicitarPedido();
                }
            );
        }
    );
}

listarMenu();
solicitarPedido();

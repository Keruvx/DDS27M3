// console.log('SHAZAM')

// var musicas = ["Caminhos","Folhas","Aventura","Marinheiro"]
// var cantores = ["BK","BK","BigBlack","LuizBarata"]

// for (var i = 0; i < musicas.length; i++) {
//     console.log(musicas[i] + " - " + cantores[i])
// }

// //OBJETO

// var filme1 = {
//     titulo: "Matrix",
//     genero: "Ficção Científica",
//     diretor: "Wachowski",
//     ano: 1999
// }

// console.log(filme1)

// //ACESSANDO UMA CHAVE ESPECIFICA
// console.log(filme1.titulo);

// console.log(`O Filme: ${filme1.titulo} foi lançdo em ${filme1.ano}`);

// console.log(`Gênero: ${filme1["genero"]} `);

// var intervalo = {
//     sair: "Sair de casa",
//     horaIn: "OitoHoras",
//     horaFim: "OitoEVinte",
//     voltar: "Voltar para casa"
// }

// console.log(`O intervalo é de ${intervalo.horaIn} até ${intervalo.horaFim} e o que eu faço é ${intervalo.sair} e ${intervalo.voltar}`)


// //criar as propriedades
// var garrafa = {}
//     garrafa.cor = "Azul",
//     garrafa.preco = 10.00,
//     garrafa.tamanho = "500ml",
//     garrafa["tampada"] = false
//     console.log(garrafa)


// //altera uma propriedade existente
// garrafa.cor = "Vermelha"
// console.log(garrafa)

//peça ao usuário para digitar uma propriedade e um valor, e adicione ao objeto garrafa

// var novaPropriedade = prompt("Nova pRropriedade")
// garrafa[novaPropriedade] = prompt("Valor")


// console.log(garrafa[novaPropriedade])

//Ainda sobre objetos
var leao = {
    nome: "Skar",
    temPelo: true,
    especie: "Felino",
    peso: 60,
    andar: function() {
        console.log("O leão está andando")
    },
    falar: () => {
        console.log("Miu")
    }   
}

console.log(leao);
//mostrar o testo do metodo
console.log(leao.andar);
//executar o metodo do leao
leao.falar()
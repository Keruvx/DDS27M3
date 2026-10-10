

// console.log("Salve")

// //Laços de repetição

// // FOR = PARA / Durante
// // i = variável de controle
// // i < 10 = condição do laço

// for (let i = 0; i < 3; i++) {
//     console.log("C==3")
// }
// console.log("Pingu")
// console.log("")
// // WHILE = ENQUANTO
// var contagem = 1
// while(contagem < 51) {
//     console.log("C==3");
//     contagem = contagem + 5
// }

// console.log("Pingu")
// console.log("")


// //ARRAY 
// var lista = ['Arroz', 7, true, "Cavalo", 1.4,"Tatu",["Sim", ["Não"]]]

// //Mostra o Array
// console.log(lista)

// //Mostra um elemento específico
// console.log(lista[3])

// //length = tamanho do array
// console.log(lista.length)

// //Lista de Times

// var times = ["Flamengo", "Palmeiras", "Santos", "São Paulo", "Corinthians"]


// //INTERAGE COM VALOR FIXO
// for (let i = 0; i < times.length; i++) {
//     console.log("O time:", times[i]);
// }
// //INTERAGE COM VALOR RETORNADO
// for (let i = 0; i < times.length; i++) {
//     console.log("O time:", times[i], "está na posição", i);
// // }


// // Funções para interagir com um array
// var frutas = ["Melancia","Melão","Morango"]

// // Array original
// console.log(frutas);

// // Para adição de elementos
// // push - adiciona no fim do array
// frutas.push("Uva")
// console.log(frutas);

// // unshift - Adiciona no início do array
// frutas.unshift("Maracujá")
// console.log(frutas);

// // Para remoção de elementos
// // Pop - remove o último elemento
// var frutaRetirada = frutas.pop()
// console.log("A última fruta era =", frutaRetirada);

// frutas.unshift("Banana")

// // shift - remover do início do array
// var exPrimeiraFruta = frutas.shift()
// console.log("A ex primeira fruta era:", exPrimeiraFruta);

// // Descobrir se há um valor específico nesse array
// console.log("Garçom, tem pitu?:",frutas.includes("Pitu"));
// console.log("Garçom, tem pitu?:",frutas.includes("Maracujá"));

// //sort - Ordenar o array
// frutas.sort()
// console.log(frutas);

// // reverse - inverter o array
// frutas.reverse()
// console.log(frutas);

// // convertendo o array
// console.log(frutas.toString())

// // junta o array e troca o separador deles
// console.log(frutas.join(" - "))

// //SLICE - COPIA
// // (EM QUAL INDICE COMEÇA, QUANTOS ELEMENTOS SERAM COPIADOS)
// console.log(frutas.length)
// var parteCopiada = frutas.slice(2,7)
// console.log("Copia:", parteCopiada);

// //SPLICE - REMOVE E ADICIONA ELEMENTOS
// //Pra remover
// var removido = frutas.splice(2,1)
// console.log("Removido:", removido);
// console.log(frutas);

// //Pra adicionar
// frutas.splice(2,0,"Abacaxi")
// console.log(frutas);

// //Pra Adicionar com substituição
// frutas.splice(2,1,"Abacaxi")
// console.log(frutas);

//var roupa = []
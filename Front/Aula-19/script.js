console.log("manda um Oi para eu ver ai...")

// FUNÇÕES

function teste(){
    console.log("estou funcionando");
    
}

// Executando a função
teste()

// CRIANDO UMA FUNÇÃO COM RETORNO

function soma(){
    return 3+4
}

// EXECUTA A FUNÇÃO
console.log(soma())

// MOSTRA APENAS O TEXTO DA FUNÇÃO, NÃO EXECUTA.
console.log(soma);


// FUNÇÕES COM PARÂMETROS
function teste2(parametro){
    console.log("o paramêmetro enviado foi: ", parametro);
    
}

// EXECUTANDO
teste2("Arroz")

var nome = "Jéssica"

teste2(nome)


// FUNÇÃO MÉDIA (EXEMPLOS)

// FAZ AS SOMAS E RETORNA RESULTADO
function media(n1,n2){
let resultado = (n1 + n2) / 2
return resultado

}

// GUARDA O RESULTADO EM VARIÁVEL, PARA DEPOIS UTILIZAR
var final = media(9,7)
console.log("Resultado da media:", final);


// FUNÇÕES ANÔNIMA
// FUNÇÃO QUE NÃO TEM NOME E O SEU RETORNO É GUARDADO POR UMA VARIÁVEL
var mensagem = function (){
    console.log("oi meu chapa");

}

// CHAMA A FUNÇÃO ANÔNIMA
console.log(mensagem());


// FUNÇÃO ARROW FUNCTION - FUNÇÃO DE SETA
// COMUM DE ESCREVER NO JAVASCRIPT
const multiplicar = (x,y) => {
    let result, primeiro = x, segundo = y
    
    result  = primeiro * segundo

    return result
}

console.log("o resultado da multiplication é: ", multiplicar(7,4));

// FUNÇÃO MAIS MENOR AINDA
// QUANDO SÓ TEM UMA LINHA DE RETORNO O RETURN PODE SER OMITIDO
const dobro = numero => numero*2

console.log("O dobro é: ", dobro(42));
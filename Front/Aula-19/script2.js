// FAÇA UM PEDIDO DE UM NÚMERO AO USUÁRIO E UTILIZE O VALOR INFORMADO EM UMA FUNÇÃO PARA PASSAR A UMA FUNÇÃO
// DE SETA, E RETORNAR AO USUÁRIO A DIVISÃO POR DOIS DAQUELE VALOR
console.log("======= Bem vindo a calculadora de divisão por 2 ======");
console.log("informe o número abaixo:");


var x = +prompt("informe o número: ");


const dividir = (numero) => {
    return numero / 2;
};

console.log("O resultado da divisão por 2 é: ", dividir(x));
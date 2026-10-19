/*
click — quando clica em um elemento.
dblclick — quando dá duplo clique.
input — quando o valor de um campo muda durante a digitação.
change — quando o valor de um campo é alterado e confirmado.
submit — quando envia um formulário.
mouseover — quando o mouse entra sobre um elemento.
mouseout — quando o mouse sai de um elemento.
mousemove — quando o mouse se movimenta sobre um elemento.
mousedown — quando pressiona um botão do mouse.
mouseup — quando solta um botão do mouse.
keydown — quando pressiona uma tecla.
keyup — quando solta uma tecla.
focus — quando um elemento recebe foco.
*/

// =====================================================

// EVENTO CHANGE

// Dispara quando usuário sai da caixinha 
document.getElementById("campoChange").addEventListener("change",()=>{

    // Pega o valor digitado pelo usuário
    const textoDigitado = document.getElementById("campoChange").value

    // Pega o texto de baixo e troca o valor,pelo que a pesoa digitou ,e guarda na variável
    document.getElementById("resultadoChange").innerText = "você digitou: " + textoDigitado
} )

// Evento input

// Dispara quando usuáro muda a caixinha
document.getElementById("campoInput").addEventListener("input",function(){

     // Pega o valor digitado pelo usuário
    const textoDigitado = this.value

    // Pega o texto de baixo e troca o valor,pelo que a pesoa digitou ,e guardei na variável
    document.getElementById("resultadoInput").innerText = "você digitou: " + textoDigitado
})


// =====================================================================================================//
// =====================================================================================================//
// =====================================================================================================//
// =====================================================================================================//

// Guarda todo o html do formulário
const formulario = document.getElementById("formJogador")

// Guarda o html da lista de jogadores (que se inicia vazia)
const lista = document.getElementById("listaJogadores")

// Função para ativar quando o usuário tentar enviar os dados
formulario.addEventListener("submit",function (evento){

    // Parar de recarregar a página quano tenta enviar, alem de outras coisas
    evento.preventDefault()

    // Verifica o conteúdo digitado nas caixinhas, e guuarda em variáveis
    const inputNome = document.getElementById("nome").value
    const inputCamisa = document.getElementById("camisa").value
    const inputPosicao = document.getElementById("posicao").value

    // Criar um objeto com as informações
    const jogador = {
        nome: inputNome,
        camisa: inputCamisa,
        posicao: inputPosicao
    }

    adicionarJogador(jogador)

    // Resetar o formulário depois que envia
    formulario.reset()
})

// Função para criar um card
function adicionarJogador(jogadorAtual){

    // Cria o elemento card
    const card = document.createElement("div")

    // Cria elementos do card
    const titulo = document.createElement("h4")
    const textoPosicao = document.createElement("p")
    const textoCamisa = document.createElement("p")

    // Preencher os elementos, com os valores do objeto
    titulo.textContent = jogadorAtual.nome
    textoPosicao.textContent = "Posição: "+ jogadorAtual.posicao
    textoCamisa.textContent = "Camisa: "+ jogadorAtual.camisa

    // Construa o card
    card.appendChild(titulo)
    card.appendChild(textoPosicao)
    card.appendChild(textoCamisa)

    // Adiciona o card,como filho da lista de jogadores
    lista.appendChild(card)
}
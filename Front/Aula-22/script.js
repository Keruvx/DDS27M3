// Console - Terminal do navegador
// console.log(console);

// Window - Janela do navegador
// window.alert()
// window.prompt()
// console.log(window);

// Document - DOM
console.log(document);
console.log(document.head)
console.log(document.body)

// Seção 1

// Seleciona elementos pela tag
var titulos = document.getElementsByTagName("h1")
console.log(titulos);

// Seleciona elementos pela class
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos);

// Seleciona elemento por ID
var especifico = document.getElementById("p3")
console.log(especifico);

// Alteração de estilo

// Pego pelo ID
especifico.style.backgroundColor = "green"
especifico.style.color = "yellow"

// Pela Class
paragrafos[0].style.backgroundColor = "pink"

// Pela tag
titulos[2].style.backgroundColor = "orange"

// Seção 2
// Função ativada, mas criada pelo javascript
function cliquei(){
    console.log("Boa espertão"); 
}

// Função ativada, mas criada pelo javascript, via eventListener
let quantclique = 0
document.getElementById("btnCliqueDuplo").addEventListener("click", () => {
    quantclique++
    console.log(quantclique)
})

// Botão clicável, que altera vários
document.getElementById("shazam").addEventListener("click", ()=>{
    for(var i=0;i < titulos.length;i++){
        titulos[i].style.backgroundColor = "red"
        titulos[i].style.color = "yellow"
        titulos[i].style.fontSize = "100px"
    }
})

// Uso do this
// Função ativada, e o parametro veio com o this
function quemFoi(elementoQueChamou){
    console.log(elementoQueChamou);
}

// Seção 3
// ALTERA O TEXTO
document.getElementById("criaTexto").addEventListener("click", ()=>{
    // INNERTEXT - TEXTCONTENT - ALTERA O TEXTO DO ELEMENTO
    document.getElementById("textoCriado").innerText = "Toma a mudança na sua vida bb"
})
// ALTERA O HTML
document.getElementById("criaHtml").addEventListener("click", ()=>{
    // INNERHTML - ALTERA O ELEMENTO
    document.getElementById("vazia").innerHTML += "<h2> ahahahahahaha </h2>"
})
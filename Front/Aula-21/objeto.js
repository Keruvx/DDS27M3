function opcoes (){
    
    console.log("As opções são:", this.tamanho.toString())
}


var produto1 = {
    nome: "Cola-Cola",
    catergoria: "Bebida",
    quantidade: 30,
    tamanho: ["200ml", "Lata", "600ml", "3l","Ks"],
    descricao: function() {
        console.log(`A ${this.nome} é da categoria ${this.catergoria}`);
    },
    verTamanhos : opcoes


}
produto1.descricao()
produto1.verTamanhos()

var produto2 = {
    nome: "Empada",
    catergoria: "Salgado",
    quantidade: 30,
    tamanho: ["P", "M", "G"],
    descricao: function() {
        console.log(`A ${this.nome} é da categoria ${this.catergoria}`);
    }
    
    
}
produto1.descricao();

//Metendo o Loko

var aluno = {
    nome: "Jhonys",
    anoEscolar: 2019,
    turma: "B",
    notas: [10, 9, 8],
    media: function() {
        let n1 = this.notas[0]
        let n2 = this.notas[1]
        let n3 = this.notas[2]
        
        return ((n1+n2+n3) / 3)
    }  
}
console.log(aluno.notas);

console.log(aluno.media())
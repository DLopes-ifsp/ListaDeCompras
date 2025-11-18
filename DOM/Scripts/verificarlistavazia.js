const mensagemVazia = document.querySelector(".mensagem-vazia");

function verificarlistavazia(listadecompras){ //seleciona todos os elementos da lista
    const itensdalista = listadecompras.querySelectorAll("li")
    if(itensdalista.length === 0 ) {
        mensagemVazia.style.display = "block"
    }else{
        mensagemVazia.style.display = "none"
    }
}

export default verificarlistavazia;
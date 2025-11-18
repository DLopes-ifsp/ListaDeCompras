import gerardia from "./gerardia.js";
import verificarlistavazia from "./verificarlistavazia.js";
const listadecompras = document.getElementById("lista-de-compras")
export const inputItem = document.getElementById("input-item");


let contador = 0;

export function criaritem() {
    if (inputItem.value === "") { //verifica se  o campo  esta vazio
        alert("Por Favor insira um Item!"); //alerta mostrado
        return; // encerra o codigo
    } if ((inputItem.value === "amor reciproco")) {
        alert("Esta em falta mesmo :(")
        return
    }
    const itemlista = document.createElement("li"); // cria uma list item para representar cada item
    const containeritemlista = document.createElement("div"); //cria uma div para container do item
    containeritemlista.classList.add("item-lista-container"); //vincula ao css para poder estilizar a lista
    const nomeitem = document.createElement("p"); //cria o p para nomear o item
    const checkbox = document.createElement("input");//cria o checkbox pra cada item da lista
    checkbox.type = "checkbox"; //define o input como checkbox
    checkbox.id = "checkbox-" + contador++;//determina o id do checkbox
    containeritemlista.appendChild(checkbox)//inclui o checkbox no container
    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            nomeitem.style.textDecoration = "line-through"; //risca o texto
        } else {
            nomeitem.style.textDecoration = "none"; //remove o risco do texto
        }
    });

    const botao = document.createElement("button");
    botao.classList.add = "excluir"
    const iconeExcluir = document.createElement("i");
    iconeExcluir.className = "bi bi-trash";
    botao.appendChild(iconeExcluir);
    botao.style.cursor = "pointer"; 
    containeritemlista.appendChild(botao);
    botao.appendChild(iconeExcluir);

    botao.addEventListener("click", function (){
        const confirmacao = confirm("Deseja realment deletar esse item?");
        if(confirmacao){
            itemlista.remove();
            alert("item deletado");
            verificarlistavazia(listadecompras);
        }
    });

    nomeitem.innerText = inputItem.value; //usuario nomeia o item 
    containeritemlista.appendChild(nomeitem); //adiciona o <p> dentro da <div>
    itemlista.appendChild(containeritemlista); // adiciona a <div> dentro da <li>
    
    const datacompleta = gerardia();
    const itemdata = document.createElement("p");
    itemdata.innerText = datacompleta;
    itemdata.classList.add("texto-data");

    itemlista.appendChild(itemdata);
    
    
    return itemlista;
}


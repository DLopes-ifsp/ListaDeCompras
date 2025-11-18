import { criaritem } from "./Scripts/criaritem.js"

import verificarlistavazia from "./Scripts/verificarlistavazia.js";

const inputItem = document.getElementById("input-item");
const listadecompras = document.getElementById("lista-de-compras");
const addbutton = document.getElementById("add-item");
addbutton.style.cursor = "pointer"

addbutton.addEventListener("click", (evento) => { //fofoqueiro que vê quando vc clica o botão
    evento.preventDefault(); //não deixa a pagina atualizar
    const itemlista = criaritem(); //função de criar o item
    listadecompras.appendChild(itemlista); //função que adiciona o item criado na lista
    verificarlistavazia(listadecompras); //função para verificar se a lista esta vazia
    inputItem.value = "";
}); //limpa o campo input apos clique


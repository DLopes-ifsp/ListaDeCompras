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

    const nomeitem = document.createElement("p");
    nomeitem.innerText = inputItem.value; // Define o texto do item
    nomeitem.classList.add("nome-item"); // Adiciona uma classe para estilização, se necessário
    containeritemlista.appendChild(nomeitem); // Adiciona o texto ao contêiner como o primeiro elemento

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-" + contador++;
    containeritemlista.appendChild(checkbox); // Adiciona o checkbox ao contêiner

    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            nomeitem.style.textDecoration = "line-through"; // Risca o texto
            listadecompras.appendChild(itemlista); // Move o item para o final da lista
        } else {
            nomeitem.style.textDecoration = "none"; // Remove o risco do texto
        }
    });

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add = "editar";
    const iconeEditar = document.createElement("i");
    iconeEditar.className = "bi bi-pencil";
    botaoEditar.appendChild(iconeEditar);
    botaoEditar.style.cursor = "pointer";
    containeritemlista.appendChild(botaoEditar);
    botaoEditar.appendChild(iconeEditar);

    botaoEditar.addEventListener("click", function () {
        // Oculta o botão de edição
        botaoEditar.style.display = "none";

        // Cria um campo de entrada para edição
        const inputEdicao = document.createElement("input");
        inputEdicao.type = "text";
        inputEdicao.value = nomeitem.innerText; // Preenche com o texto atual
        inputEdicao.classList.add("input-edicao"); // Adicione uma classe para estilização, se necessário

        // Substitui o texto pelo campo de entrada
        containeritemlista.replaceChild(inputEdicao, nomeitem);

        // Foca no campo de entrada
        inputEdicao.focus();

        // Salva a edição ao perder o foco ou pressionar Enter
        inputEdicao.addEventListener("blur", () => salvarEdicao(inputEdicao));
        inputEdicao.addEventListener("keydown", (evento) => {
            if (evento.key === "Enter") {
                salvarEdicao(inputEdicao);
            }
        });

        function salvarEdicao(input) {
            const novoTexto = input.value.trim();
            if (novoTexto !== "") {
                nomeitem.innerText = novoTexto; // Atualiza o texto
            }
            // Substitui o campo de entrada pelo texto atualizado
            containeritemlista.replaceChild(nomeitem, input);

            // Mostra o botão de edição novamente
            botaoEditar.style.display = "inline-block";
        }
    });

    const botao = document.createElement("button");
    botao.classList.add("botao-excluir");
    botao.textContent = "X";
    botao.style.cursor = "pointer";
    containeritemlista.appendChild(botao); // Adiciona o botão ao contêiner

    botao.addEventListener("click", function () {
        itemlista.remove(); // Remove o item diretamente
        verificarlistavazia(listadecompras); // Verifica se a lista está vazia
    });

    itemlista.appendChild(containeritemlista); // adiciona a <div> dentro da <li>
    
    const datacompleta = gerardia();
    const itemdata = document.createElement("p");
    itemdata.innerText = datacompleta;
    itemdata.classList.add("texto-data");

    itemlista.appendChild(itemdata);
    
    
    return itemlista;
}


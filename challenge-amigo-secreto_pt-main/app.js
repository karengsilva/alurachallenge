//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Criaremos um array para armazenar os amigos
let amigos = [];

// Função para adicionar o amigo à lista
function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigoNome = amigoInput.value.trim(); // Pega o nome do amigo e remove espaços extras

    if (amigoNome) {
        amigos.push(amigoNome); // Adiciona o nome ao array de amigos
        amigoInput.value = ''; // Limpa o campo de entrada

        atualizarListaAmigos(); // Atualiza a lista de amigos na tela
    } else {
        alert('Por favor, insira um nome.');
    }
}

// Função para exibir a lista de amigos
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo; // Adiciona o nome do amigo ao item da lista
        listaAmigos.appendChild(li); // Adiciona o item à lista na tela
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    // Sorteia um amigo aleatoriamente
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado do sorteio
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong>`;
}

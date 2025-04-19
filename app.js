// Função principal que realiza o sorteio
function sortear () {
    // Captura e converte os valores dos inputs de texto para número inteiro
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    // Inicializa um array vazio para armazenar os números sorteados
    let sorteados = [];
    let numero;

    // Laço que executa até sortear a quantidade desejada de números
    for (let i = 0; i < quantidade; i++){
        // Gera um número aleatório dentro do intervalo informado
        numero = numeroAleatorio(de, ate);

        // Verifica se o número já foi sorteado; se sim, gera outro até ser único
        while(sorteados.includes(numero)){
            numero = numeroAleatorio(de, ate);
        }

        // Adiciona o número sorteado (único) ao array
        sorteados.push(numero);
    }
    
    // Exibe os números sorteados no elemento de resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;

    // Atualiza o status visual do botão de reiniciar
    statusBotao();
}

// Função auxiliar que gera um número aleatório entre min e max (inclusive)
function numeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Captura o botão de reiniciar do HTML
let botao = document.getElementById("btn-reiniciar");

// Função para alternar as classes de habilitado e desabilitado do botão
function statusBotao() {
    if(botao.classList.contains("container__botao-desabilitado")){
        // Se estiver desabilitado, habilita o botão
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        // Se já estiver habilitado, desabilita o botão
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

// Função que reinicia os campos de entrada e o resultado para o estado inicial
function reiniciar() {
    quantidade.value = " "; // Limpa o campo quantidade
    de.value = " ";         // Limpa o campo de
    ate.value = " ";         // Limpa o campo até
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`; // Mensagem padrão
    statusBotao(); // Atualiza o botão
}

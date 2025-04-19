// Função principal que realiza o sorteio
function sortear () {
    // Captura e converte os valores dos inputs de texto para número inteiro
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    // Inicializa um array vazio para armazenar os números sorteados
    let sorteados = [];
    let numero;

            // Verifica se o valor inicial (de) é maior ou igual ao valor final (ate)
        if (de >= ate) {
            // Se for, exibe um alerta informando que o campo "Do número" deve ser menor que o "Até o número"
            alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
            // Interrompe a execução da função para o usuário corrigir o erro
            return;
        }

        // Verifica se a quantidade solicitada é maior do que o intervalo disponível (de até ate)
        if (quantidade > (ate - de + 1)) {
            // Se a quantidade for maior que o intervalo possível, exibe um alerta informando o erro
            alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
            // Interrompe a execução da função para o usuário corrigir o erro
            return;
}

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

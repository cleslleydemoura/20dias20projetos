let quantia = document.querySelector(".quantia");
let botaoConvert = document.querySelector("button");
let resultado = document.querySelector(".result");

async function obterCotacaoDolar() {
    try {
        // Criando a conexão com a API.
        let response = await fetch('https://economia.awesomeapi.com.br/all/USD-BRL');
        let data = await response.json();

        // Retorna o valor mais alto do dólar no dia.
        return data.USD.high;
    } catch (error) {
        console.error("Erro ao buscar a cotação:", error);
        return null;
    }
}

async function converterMoeda() {
    let valorDolar = await obterCotacaoDolar();

    if (valorDolar) {
        let valorBRL = parseFloat(quantia.value);
        let valorConversao = valorBRL * valorDolar;
        resultado.textContent = valorConversao.toFixed(2);
    } else {
        resultado.textContent = "Erro ao tentar obter a cotação do dia.";
    }
}

botaoConvert.addEventListener("click", e => {
    converterMoeda();
});

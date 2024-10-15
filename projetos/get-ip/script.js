// Toda vez que a tentativa de localizar o usuário for bem sucedida,
// então essa função é processada.
function success(pos) { // pos ---> abreviação de position.
    // Definindo as váriáveis para serem usadas na impressão dos dados dentro do HTML.
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    console.log(pos.coords.latitude);

    // Inserindo os dados dentro do parágrafo.
    let location = document.getElementById("localizacao").innerHTML =
    `Latitude: ${pos.coords.latitude},
    Longitude: ${pos.coords.longitude}`;
}
// Toda vez que a tentativa de localizar o usuário NÃO for bem sucedida,
// então essa função é processada.
function error(error) {
    let location = document.getElementById("localizacao").innerHTML = "Não foi possível encontrar sua localização. Permita que o site utilize sua localização."
}

// API de geolocalização do navegador.
navigator.geolocation.getCurrentPosition(success, error);
// Essa função recebe outra função como parâmetro.


function maisInfo() {
    // API que armazenas as informações como IP, país, cidade, empresa provedora de internet...
const ip = document.getElementById('ip');
const country = document.getElementById('pais');
const city = document.getElementById('cidade');
const empresa = document.getElementById('provedora');

// Conexão com a API
fetch('http://ip-api.com/json/?fields=61439')
  .then(res => res.json())
  // O método res.json() é usado para ler os elementos e os converter de JSON para objetos que podem ser manipulados.
  .then(res => {console.log(res);
    // Esse '.then' é chamado após a conversão anterior. A função dentro dele recebe o objeto JSON já convertido.

    ip.textContent = res.query;
    country.textContent = res.country;
    city.textContent = res.city;
    empresa.textContent = res.org;

    // Inserindo no HTML as informações vindas da API
    document.getElementById("ip").innerHTML = "IP: " + res.query;
    document.getElementById("pais").innerHTML = "País: " + res.country;
    document.getElementById("cidade").innerHTML = "Cidade: " + res.city;
    document.getElementById("provedora").innerHTML = "Provedora: " + res.org;
  });
}
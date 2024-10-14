// Toda vez que a tentativa de localizar o usuário for bem sucedida,
// então essa função é processada.
function success(pos) { // pos ---> abreviação de position.
    // Definindo as váriáveis para serem usadas na impressão dos dados dentro do HTML.
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    console.log(pos.coords.latitude);

    // Inserindo os dados dentro do parágrafo.
    let location = document.getElementById("localizacao").innerHTML = `Latitude: ${pos.coords.latitude},
    <br>Longitude: ${pos.coords.longitude}`;
}

function error(error) {
    let location = document.getElementById("localizacao").innerHTML = "Não foi possível encontrar sua localização. Permita que o site utilize sua localização."
}

// API de geolocalização do navegador.
navigator.geolocation.getCurrentPosition(success, error);
// essa função recebe outra função como parâmetro.
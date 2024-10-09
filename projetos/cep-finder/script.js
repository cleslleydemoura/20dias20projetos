alert("Use um CEP válido para que o site funcione corretamente.");

function buscarCEP() {
    let campoTexto = document.getElementById("cep").value; // pega o valor inserido pelo usuário dentro do input.

    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/'+ campoTexto +'/json/'); // adicionando o cep inserido pelo usuário no url da api que será acessada e retornará os dados na tela.
    ajax.send();
    // quando carregar as informações desse site...
    ajax.onload = function () {
    //document.getElementById("texto").innerHTML = this.responseText; // inserindo no html a resposta do site.
    
    // imprimindo na tela apenas objetos específicos.
    let obj = JSON.parse(this.responseText); // transformando o JSON text em objeto.
    // valores desejados a serem impressos.
    let cep = obj.cep;
    let logradouro = obj.logradouro;
    let complemento = obj.complemento;
    let cidade = obj.localidade;
    let uf = obj.uf;
    let estado = obj.estado;
    let regiao = obj.regiao;
    
    // inserindo no HTML as informações vindas da API
    document.getElementById("texto").innerHTML = 
    "<div class='result'> Cep: " +cep+
    "<br> Logradouro: "+logradouro+
    "<br> Complemento: "+complemento+
    "<br> Cidade: "+cidade+ " - " +uf+
    "<br> Estado: "+estado+
    "<br> Região: "+regiao+ "</div>";
    }
}
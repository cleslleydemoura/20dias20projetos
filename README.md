<h1>20 Dias, 20 projetos</h1>
<hr><hr>
<p> Esse projeto está sendo feito com o intuito de ampliar meus conhecimentos em JavaScript. São 20 mini projetos feitos com HTML, CSS e JavaScript. Cada um com uma funcionalidade diferente.
Todos os projetos aqui também estão sendo publicados no meu <a href="https://www.linkedin.com/in/cleslley/">Linkedin</a> diariamente. Aceito sugestões de projetos!</p>

<p align="center">
  <a href="#">
    <img src="https://skillicons.dev/icons?i=git,javascript,html,css"/>
  </a>
</p>
<hr>
<h1>DIA 1 - Gerador de QR Code</h1>
<p> Como projeto introdutório, foi feito um gerador de QR Code. A partir de uma API o programa cria as imagens que criam acesso para o link desejado.</p>
<p>Link da API</p>

```
https://goqr.me/api/doc/
```

<a href="https://qrcode-gen-cleslley.vercel.app/">Visualização no Vercel</a>

![qrcode](https://github.com/user-attachments/assets/6df0741c-86b6-49d7-bc87-f14afec608ea)

<p>Code preview</p>

```javascript
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}
```

<hr>
<h1>DIA 2 - Gerador de Senhas</h1>
<p> O segundo mini projeto é um gerador de senhas. O site é simples e intuitivo, e o código além de fácil, fortalece alguns dos conceitos básicos do JavaScript.</p>
<a href="https://password-generator-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![passwordgen](https://github.com/user-attachments/assets/f5b518a5-007d-432d-8f41-0e1ebbf3d093)

<p>Code preview</p>

```javascript
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number    = "0123456789";
const symbol    = "!@#$%~^&*()-_|[]{}<>,./=+?"
const allCharacter  = upperCase + lowerCase + number + symbol; /* Fazendo a junção dos caracteres. */
```

<hr>
<h1>DIA 3 - Ocultador de Senha</h1>
<p> O terceiro mini projeto consiste em um ocultador de senhas. Este password toogle, tem como função esconder ou mostrar ao usuário a senha que foi digitada dentro do input. </p>
<a href="https://password-toogle-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![passwordtoogle](https://github.com/user-attachments/assets/346b2ee3-fa32-4e71-b365-a673f0df674e)

<p>Code preview</p>

```javascript
let password = document.getElementById("password");
let eyeicon = document.getElementById("eyeicon");

eyeicon.onclick = function() {
    if(password.type == "password") {
        password.type = "text";
        eyeicon.src = "images/eye-open.png";
    } else {
        password.type = "password";
        eyeicon.src = "images/eye-close.png";
    }
}
```

<hr>
<h1>DIA 4 - Drag & Drop</h1>
<p> O quarto mini projeto é um Drag & Drop, que consiste em arrastar um item de um container a outro, ou mudá-lo de posição dentro do mesmo container.  </p>
<a href="https://password-toogle-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![draganddrop](https://github.com/user-attachments/assets/ae4f86cd-9120-4314-9398-a58ee66f5ba9)

<p>Code preview</p>

```javascript
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists) {
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}
```

<hr>
<h1>DIA 5 - Busca de perfis do GitHub</h1>
<p> Pesquisador de Perfis do GitHub (Github Profile Research)
O quinto mini projeto é um pesquisador de perfis do GitHub, onde o usuário insere o nome de usuário e aparecem informações relevantes sobre o perfil, como: número de repositórios, número de seguidores e projetos fixados no perfil.
</p>
<a href="https://github-profile-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![githubprofile](https://github.com/user-attachments/assets/0762027d-2420-4a15-be1a-24e6a0381c74)

<p>Code preview</p>

```javascript
function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
}
```

<hr>
<h1>DIA 6 - Calculadora</h1>
<p> O sexto mini projeto é uma calculadora estilizada e intuitiva.</p>
<a href="https://calculator-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![calculator](https://github.com/user-attachments/assets/9810f969-b57c-444e-9efc-a9b015795e0a)

<p>Code preview</p>

```javascript
calculate() {
        let result;

        const _previousOperand = parseFloat(this.previousOperand);
        const _currentOperand = parseFloat(this.currentOperand);
        if (isNaN(_previousOperand) || isNaN(_currentOperand)) return;
        switch (this.operation) {
            case "+":
            result = _previousOperand + _currentOperand;
            break;
            case "-":
            result = _previousOperand - _currentOperand;
            break;
            case "÷":
            result = _previousOperand / _currentOperand;
            break;
            case "x":
            result = _previousOperand * _currentOperand;
            break;
            default:
                return;
        }

        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = "";
    }
```

<hr>
<h1>DIA 7 - Validador de Formulário</h1>
<p> O sétimo mini projeto trata de um formulário que valida o que está sendo preenchido de acordo com as regras e limitações definidas no código.
O usuário deve inserir suas informações, como:

- ```Nome``` (nome e somente um sobrenome);
- ```Telefone``` com um máximo de 10 caracteres;
- ```E-mail``` válido;
- ```Mensagem``` (Pequeno texto sobre si com no mínimo 30 caracteres).

De acordo com essas regras, o formulário verifica se as informações são válidas para o cadastro do usuário ou se são inválidas.</p>
<a href="https://form-validation-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![formvalidation](https://github.com/user-attachments/assets/091043c9-b5e3-4434-96ab-3e9c5fc52b18)


<p>Code preview</p>

```javascript
var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {

```

<hr>
<h1>DIA 8 - Event KeyCodes</h1>
<p> O oitavo mini projeto se trata de um programa que quando uma tecla é pressionada, são impressas três informações:

- ```Tecla```: O valor da tecla pressionada (se for espaço, imprime "Space").
- ```KeyCode```: O código numérico associado à tecla pressionada.
- ```Code```: O código da tecla, que é mais específico para o layout do teclado.
</p>

<a href="https://event-keycodes-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![eventkeycodes](https://github.com/user-attachments/assets/99c80ee8-efeb-4781-a4db-7cf06fdebcc4)

<p>Code preview</p>

```javascript
const insert = document.getElementById('insert')
window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>
```

<hr>
<h1>DIA 9 - Calculadora de IMC</h1>
<p> O nono mini projeto é uma calculadora de IMC (Índice de Massa Corporal). Este programa realiza um cálculo com base na altura e peso informados, permitindo determinar se o peso está adequado para a estatura definida pelo usuário.
  Ao final, o programa exibe o valor do IMC e classifica a condição em uma das seguintes categorias: 
  
```abaixo do peso```, ```peso ideal``` ou ```acima do peso```.
</p>

<a href="https://bmi-calculator-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![bmicalculator](https://github.com/user-attachments/assets/7a60670c-118b-4929-b699-7dae5d092dce)


<p>Code preview</p>

```javascript
if (valorIMC < 18.5) {
            classificacao = 'underweight.';
        } else if (valorIMC >= 18.5 && valorIMC <= 25) {
            classificacao = 'with the ideal weight.';
        } else if (valorIMC > 25) {
            classificacao = 'overweight.';
        }
        resultado.textContent = `Your BMI is ${valorIMC} and you are ${classificacao}`;
```

<hr>
<h1>DIA 10 - Hoverboard</h1>
<p> O décimo mini projeto é um Hoverboard, que apresenta um programa no qual os elementos mudam de cor ao passar o mouse sobre eles.</p>

<a href="https://hoverboard-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![hoverboard](https://github.com/user-attachments/assets/38250b50-4a45-4f0c-9d25-e2fa6fc57608)

<p>Code preview</p>

```javascript
for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
}
```

<hr>
<h1>DIA 11 - Botão de mudança de cor (onclick) </h1>
<p> O décimo primeiro mini projeto é um Switch Color, que consiste em um botão que modifica o fundo da página.
Este é o prjeto mais simples até então, e decidi colocálo aqui exatamente por isso, para deixar um exemplo mais simples e claro de como se usa a função onclick.</p>

<a href="https://hoverboard-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![switchcolor](https://github.com/user-attachments/assets/a992f7b2-070d-48b0-8531-e9b100ae98f9)

<p>Code preview</p>

```javascript
function changeColors() {
    var colors = ["#FF6767", "#FF9767", "#FFF667", "#A3FF67", "#67FFEF", "#6793FF", "#9C67FF", "#FA67FF"];
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if (index > colors.length - 1) {
        index = 0;
    }
}
```

<hr>
<h1>DIA 12 - To-do List</h1>
<p> O décimo segundo mini projeto é uma lista de afazeres. Com uma interface simples, você pode adicionar, editar e marcar tarefas como concluídas em um clique.</p>
<a href="https://todolist-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![todolist](https://github.com/user-attachments/assets/1fb90ae8-18fe-491d-83fa-072939426500)

<p>Code preview</p>

```javascript
editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;
    if (editInputValue) {
        updateTodo(editInputValue);
    }
    toggleForms();
});
```

<hr>
<h1>DIA 13 - Relógio de Ponteiro</h1>
<p> O décimo terceiro mini projeto é um relógio de ponteiro. Feito com JavaScript, o programa exibe na tela um relógio de ponteiro sincronizado com o horário oficial de Brasília.</p>
<a href="https://pointer-clock-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![pointerclock](https://github.com/user-attachments/assets/f4fdcbed-4978-49d5-8828-0986b4d9e552)

<p>Code preview</p>

```javascript
const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360);
}
```

<hr>
<h1>DIA 14 - Pesquisa de Endeereço via CEP</h1>
<p> O décimo quarto mini projeto consiste em um buscador de CEP que utiliza O webservice da ViaCEP que por sua vez utiliza os dados de uma API. Os dados são extraídos dentro do código JavaScript e são mostrados ao usuário na tela, de forma estilizada e organizada.</p>
<br>
<p>This mini project consists of a Brazilian address research engine (that uses CEP for the search), that uses ViaCEP's webservice that also uses data from an API. The data is used within the JavaScript code and is shown to the user on the screen, in a stylized and organized way.</p>
<p>Link da Webservice API:</p>

```https://viacep.com.br/```
<br>
<a href="https://cep-finder-cleslley.vercel.app/">Visualização no Vercel</a>
<br>

![cepfinder](https://github.com/user-attachments/assets/c883b8f3-6d05-4f15-b0fb-c359792912d6)


<p>Code preview</p>

```javascript
let campoTexto = document.getElementById("cep").value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/'+ campoTexto +'/json/');
    ajax.send();
```

<hr>
<h1>DIA 15 - App de Desenhos</h1>
<p> O usuário tem a opção de escolher as cores e calibre da ferramenta para desenhar, criando várias possibilidades e explorando sua própria criatividade.</p>
<a href="https://dwawing-app-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![drawingapp](https://github.com/user-attachments/assets/6e432307-317c-4608-a1e2-2e62a8396b9c)

<p>Code preview</p>

```javascript
toolbar.addEventListener('change', e => {
    if (e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }
    if (e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
});
```

<hr>
<h1>DIA 16 - Roleta Giratória</h1>
<p> O programa consiste em uma roleta, na qual, quanto mais o usuário clicar no botão "girar", mais rápido a roleta gira, selecionando aleatoriamente o campo que será "sorteado".</p>
<a href="https://spinning-wheel-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![spinningwheel](https://github.com/user-attachments/assets/5349aaca-6d03-4301-9796-50cff013ffbb)

<p>Code preview</p>

```javascript
let container = document.querySelector(".container");
let btn = document.getElementById("girar");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function() {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
}
```

<hr>
<h1>DIA 17 - Carrossel de imagens</h1>
<p> O código de hoje é um Carrossel de imagens. Um projeto dinâmico e simples que traz alguns conceitos básicos do JavaScript.</p>
<a href="https://image-carousel-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![imagecarousel](https://github.com/user-attachments/assets/55b2407e-cde0-4c64-93be-402cb218c860)

<p>Code preview</p>

```javascript
rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
```

<hr>
<h1>DIA 18 - Conversor de Moeda</h1>
<p> O código de hoje é um conversor de moedas que converte Real (BRL) para Dólar (USD).</p>
<p> O programa utiliza uma API que fornece o valor mais alto do dólar no dia e armazena esse valor no script do site. Assim, ele realiza a conversão da quantia selecionada pelo usuário, exibindo o resultado em dólares.</p>
<p>Link da API: </p>

```https://docs.awesomeapi.com.br/api-de-moedas```

<a href="https://currency-converter-cleslley.vercel.app/">Visualização no Vercel</a>
<br><br>

![currencyconverter](https://github.com/user-attachments/assets/b80fe742-6524-4e99-b5f0-257a3c7a1b1d)

<p>Code preview</p>

```javascript
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
```

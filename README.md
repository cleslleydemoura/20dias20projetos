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
let imgBox = document.getElementById("imgBox"); // Div do QR.
let qrImage = document.getElementById("qrImage"); // O QR que será gerado.
let qrText = document.getElementById("qrText"); // Nos dá o valor escrito no input.

function generateQR() { // Ao final do link após o '=', será adicionado o link/texto digitado pelo usuário.
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
/* Nesta parte do código é apresentado os tipos de caracteres que serão usados na hora de gerar a senha. */
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
    /* Se o input estiver como 'type=password' então ao clicar no icon ele se tornará
       um input type text para que a senha esteja visível. Ao clicar novamente, e o input estiver
       'type=text' ao ser clicado ele voltará a ser do type password. */
    if(password.type == "password") {
        password.type = "text"; // Senha visível.
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
        let selected = e.target; // No item da lista, adicionei o drag start event (arrastar o elemento), então quando o usuário segurar o elemento para arrastá-lo, o item ficará salvo nesta variável 'let selected'.

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
    // Essa variável 'name' vai guardar o conteúdo escrito no input.

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        // Se o input não for preenchido por pelo menos um caractere (letra), será apresentado na tela a mensagem acima.
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) { // Essa expressão regular vai garantir que haja pelo menos uma letra seguida de um espaço e, em seguida, pelo menos mais uma letra até o final da string, para garantir que haja pelo menos duas palavras separadas por um espaço

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

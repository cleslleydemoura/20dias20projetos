<h1>DIA 1 - Gerador de QR Code</h1>
<hr><hr>
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


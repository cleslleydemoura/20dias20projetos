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
<p> O segundo mini projeto em JavaScript é um gerador de senhas, O código além d e muito simples e funcional, entrega ao usuário uma página de fácil acesso e entendimento. As senhas geradas possuem </p>
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

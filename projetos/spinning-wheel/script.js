let container = document.querySelector(".container");
let btn = document.getElementById("girar");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function() {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
}
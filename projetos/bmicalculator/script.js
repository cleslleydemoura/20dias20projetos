const calcular = document.getElementById('calcular');

function bmi() {
    const altura = +document.getElementById('height').value;
    const peso = +document.getElementById('weight').value;
    const resultado = document.getElementById('resultado');

    if (altura > 0 && peso > 0) {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'underweight.';
        } else if (valorIMC >= 18.5 && valorIMC <= 25) {
            classificacao = 'with the ideal weight.';
        } else if (valorIMC > 25) {
            classificacao = 'overweight.';
        }
        resultado.textContent = `Your BMI is ${valorIMC} and you are ${classificacao}`;
        
    } else {
        resultado.textContent = 'Preencha os campos corretamente.';
    }
}

calcular.addEventListener('click', bmi);

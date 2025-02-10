// const prompt = require('prompt-sync')();

const promptSync = require('prompt-sync');
const prompt = promptSync();

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return "Erro: Divisão por zero";
    }
}

function raizquadrada(a){
    return Math.sqrt(a)
}

function exponenciacao(a, b){
    return Math.pow(a, b)
}

function seno(a){
    return Math.sin(a)
}

function cosseno(a){
    return Math.cos(a)
}
function tangente(a){
    return Math.tan(a)
}


while (true) {
    let escolha = prompt("Escolha a operação: 1. Soma, 2. Subtração, 3. Multiplicação, 4. divisão, 5. Raiz quadrada, 6. Exponenciação, 7. Seno, 8. Cosseno, 9. Tangente, 10. Sair");
    console.log("Em caso de Raiz quadrade, Seno, Cosseno ou Tangente, selecione apenas um número. ");
    if (escolha === "10") {
        break;
    }

    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    if (escolha === "1") {
        console.log("Resultado: ", soma(num1, num2));
    } else if (escolha === "2") {
        console.log("Resultado: ", subtracao(num1, num2));
    } else if (escolha === "3") {
        console.log("Resultado: ", multiplicacao(num1, num2));
    } else if (escolha === "4") {
        console.log("Resultado: ", divisao(num1, num2));
    } else if (escolha === "5") {
        console.log("Resultado: ", raizquadrada(num1))
    } else if (escolha === "6") {
        console.log("Resultado: ", exponenciacao(num1, num2))
    } else if (escolha === "7") {
        console.log("Resultado: ", seno(num1))
    } else if (escolha === "8") {
        console.log("Resultado: ", cosseno(num1))
    } else if (escolha === "9") {
        console.log("Resultado: ", tangente(num1))
    }
    else {
        console.log("Escolha inválida");
    } 
}
//const prompt = require('prompt-sync');
const PromptSync = require('prompt-sync');
const prompt = PromptSync();

function subtracao1(a, b) {
    return a - b;
}

function soma2(a, b) {
    return a + b;
}
function mult3(a, b) {
    return a * b;
}
function div4(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return "erro dividido por zero";
    }

}


while (true) {
    let escolha = prompt("escolha a operacâo 1)soma,2)sdivição,3)multiplicação,4)divisão")


    if (escolha === "5") {
        break;
    }




    let nun1 = parseFloat(prompt("digite o primeiro numero"))
    let nun2 = parseFloat(prompt("digite o segundo numero"))

    if (escolha === "1") {
        console.log("resultado", soma2(nun1, nun2));
    }
    else if (escolha === "2") {
        console.log("resultado", subtracao1(nun1, nun2));
    }
    else if (escolha === "3") {
        console.log("resultado", mult3(nun1, nun2));
    }
    else if (escolha === "4") {
        console.log("resultado", div4(nun1, nun2));
    }
}
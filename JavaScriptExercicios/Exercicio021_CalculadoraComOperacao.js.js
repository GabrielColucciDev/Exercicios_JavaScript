const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o primeiro numero: "));
let numero2 = Number(prompt("Digite o segundo numero: "));
let question_usr = prompt("Qual operação você deseja fazer (Soma) (Multiplicação) (Subtração) (Divisao): ");


let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;
let subtracao = numero1 - numero2;
let divisao = numero1 / numero2;
 

if (question_usr == "soma" || "SOMA" || "sOmA" || "Soma" || "S0m4" || "+"){
	console.log(soma)

} else if (question_usr == "multiplicação" ){
	console.log(multiplicacao)

} else if (question_usr == "subtracao") {
	console.log(subtracao)

}else if (question_usr == "divisao"){
	console.log(divisao)
};
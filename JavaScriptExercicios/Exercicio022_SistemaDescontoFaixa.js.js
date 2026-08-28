const prompt = require("prompt-sync")();

console.log("Você pode receber desconto conforme sua idade");

idade = Number(prompt("Qual a sua idade: "));
tipo  = prompt("Você é estudante? (1)sim (2)não: ")

if (idade >= 60 || tipo == 1) {
	console.log("Você TEM direito ao desconto")

} else {
	console.log("Você NÃO tem direito ao desconto")
};

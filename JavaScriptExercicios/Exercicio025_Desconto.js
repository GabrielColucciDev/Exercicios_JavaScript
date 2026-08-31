prompt = require("prompt-sync")();

let idade = Number(prompt("Qual é sua idade?:"))

let pergunta = Number(prompt("Você é estudante?: (1) SIM (2)NAO"));

if(idade >= 60 || pergunta === 1){
	console.log("Você recebeu um DESCONTO")
}else{
 console.log("Voce nao tem direito ao DESCONTO")
};
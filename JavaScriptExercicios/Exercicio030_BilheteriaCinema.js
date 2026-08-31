const prompt = require("prompt-sync")();


let idade = Number (prompt("Digite sua idade: "));

if (idade <= 12 || idade >= 60){
	console.log("meia entrada")

} else {
     console.log("valor cheio")
};
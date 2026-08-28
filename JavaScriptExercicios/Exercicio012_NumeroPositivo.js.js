const prompt = require("prompt-sync")();

let usr_question1 = Number (prompt("Digite sua idade: "));


if (usr_question1 > 0){
	console.log("Positivo")

}else{
     console.log("Negativo")
};
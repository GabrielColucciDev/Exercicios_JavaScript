const prompt = require("prompt-sync")();

let usr_question1 = Number (prompt("Digite o numero: "));


if (usr_question1 %2 <= 0){
	console.log("numero par!")

}else{
	console.log("numero impar!")
};
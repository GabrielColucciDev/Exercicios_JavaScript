const prompt = require("prompt-sync")();

let usr_interface = prompt("Qual é a senha: ");

let correta_senha = ("1234");

while (usr_interface != correta_senha){
	console.log("senha incorreta")
	usr_interface = prompt("Qual é a senha: ")
}

console.log("Acesso permito")
const prompt = require("prompt-sync")();


let usr_interface = prompt("Digite seu usuario");
let usr_interface2 = prompt("Qual é a senha: ");

let correto_user = ("Admin")
let correta_senha = ("1234");

if (usr_interface === correto_user && usr_interface2 === 1234){
	console.log("Acesso correto!")

} else {
     console.log("Acesso negado")
};
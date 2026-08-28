const prompt = require("prompt-sync")();

idade = prompt("Qual a sua idade: "),
convite = Number(prompt("Você possui convite? (1) sim (0)não: "));

if (idade >= 18 && convite == 1 ){
	console.log("Entrada liberada! Divirta-se")

} else {
      console.log("Entrada Negada, Verifique seus documentos ")
};
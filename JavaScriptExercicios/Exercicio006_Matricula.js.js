const prompt = require("prompt-sync")();

let matricula = Number (prompt("Digite o numero da sua matricula:"));
let nome_aluno = prompt("Digite seu nome completo: ");
let turma_aluno = prompt("Digite sua turma: ");


console.log(`
	Aluno: ${nome_aluno}
 	Numero da matricula: (${matricula})
 	Turma: (${turma_aluno})`);
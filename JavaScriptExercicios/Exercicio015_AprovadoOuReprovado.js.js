const prompt = require("prompt-sync")();

let nota = prompt ("Digite sua nota: ");


let c_excelente = (nota == 10);
let c_bom = (nota => 7);
let c_regular = nota => 3;


if (nota == 10) {
	console.log("Sua nota foi EXCELENTE!")

} else if (nota >= 7) {
	console.log("Sua nota foi BOA!: " + c_bom)

} else if (nota >= 3) {
console.log("Sua nota foi REGULAR!:  " + c_regular)

} else if (console.log("Sua nota foi INSUFICIENTE!")){


};

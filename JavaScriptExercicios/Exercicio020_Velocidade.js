const prompt = require("prompt-sync")();

let speed = prompt("Em velocidade esta o veiculo: ");

if (speed <= 10 ){
	console.log("O veiculo esta em baixa velocidade")

} else if (speed >= 50){
	console.log("O veiculo esta em velocidade moderada")

} else if (speed <= 100){
	console.log("O veiculo esta em ALTA velocidade")

} else if (speed > 100){
	console.log("O veiculo esta em MUITO ALTA velocidade")
};
const prompt = require("prompt-sync")();


let valorCompra = Number (prompt("Digite o valor da compra: "));
let clienteVip = prompt("Você é um cliente VIP?: ");

if (valorCompra >= 300 && clienteVip == sim){
	console.log("Frete gratis Liberado! ")

} else {
     console.log("Frete Normal")
};
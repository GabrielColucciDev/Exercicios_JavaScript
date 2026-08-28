const prompt = require("prompt-sync")();

let preco_compra = Number (prompt("Qual o valor da sua compra?: "));
let valor_desconto = preco_compra * 0.90;

if (preco_compra >= 100){

	console.log("Valor final:", valor_desconto, "(10% Desonto)")

}else{
	console.log(preco_compra, "(Desconto não se aplica)")

};
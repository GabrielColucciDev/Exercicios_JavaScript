const prompt = require("prompt-sync")();

let produto = prompt("Digite o nome do produto:");
let quantidade = Number (prompt("Digite a quantidade do produto: "));
let preco = Number(prompt("Digite o preço do produto: "));


let valorTotal = quantidade * preco;

console.log(`${quantidade}x ${produto} - Total: ${valorTotal}`);
const prompt = require("prompt-sync")();

let valor_celsius = prompt("Degite a temperatura em celsius ");
let fahrenheit = Number(valor_celsius *9/5+32);

console.log(valor_celsius + "°C " + fahrenheit + "°F");


let salario = 2500;

let aluguel = 900;
let internet = 100;
let alimentacao = 600;
let transporte = 300;

let totalGastos = aluguel + internet + alimentacao + transporte;
let sobra = salario - totalGastos;

console.log("Total de gastos: R$", totalGastos);
console.log("Sobra no final do mês: R$", sobra);
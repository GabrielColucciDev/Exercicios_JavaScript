let tempoEmpresa = Number(prompt("Tempo de empresa (anos):"));
let desempenho = prompt("Desempenho:");
let salario = Number(prompt("Salário atual:"));

let novoSalario = 0;

if (tempoEmpresa >= 5 && desempenho === "Ótimo") {
    novoSalario = salario * 1.15;
} else if (tempoEmpresa >= 2 && desempenho === "Bom") {
    novoSalario = salario * 1.08;
} else {
    novoSalario = salario * 1.03;
}

console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
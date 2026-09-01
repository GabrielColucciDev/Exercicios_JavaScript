let nome = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));
let frequencia = Number(prompt("Digite a frequência em % (apenas números):"));


let media = (nota1 + nota2 + nota3) / 3;

let situacao = "";


if (frequencia < 75) {
    situacao = "REPROVADO POR FALTA";
} else if (media >= 7) {
    situacao = "APROVADO";
} else if (media >= 5) {
    situacao = "RECUPERAÇÃO";
} else {
    situacao = "REPROVADO POR NOTA";
}


console.log("===== RESULTADO =====");
console.log(`Aluno: ${nome}`);
console.log(`Média: ${media.toFixed(1)}`);
console.log(`Frequência: ${frequencia}%`);
console.log(`Situação: ${situacao}`);
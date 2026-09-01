let valorCompra = Number(prompt("Digite o valor da compra:"));
let pontos = Math.floor(valorCompra / 10);

if (valorCompra >= 500) {
    pontos = pontos + 50;
}

console.log(`Pontos ganhos: ${pontos}`);
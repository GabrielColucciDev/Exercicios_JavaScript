let pergunta_valor = Number(prompt("Quantas horas você ficará no estacionamento?: "));

if (pergunta_valor <= 1) {
    console.log("O valor a pagar: R$5,00");
} else if (pergunta_valor >= 2 && pergunta_valor <= 4) {
    console.log("Valor a pagar: R$", pergunta_valor * 4);

} else if (pergunta_valor > 4) {
    console.log("Valor a pagar: R$", pergunta_valor * 3);
};
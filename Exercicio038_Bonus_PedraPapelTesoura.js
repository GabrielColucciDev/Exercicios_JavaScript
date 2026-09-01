let jogador1 = prompt("Jogador 1 (pedra, papel ou tesoura):");
let jogador2 = prompt("Jogador 2 (pedra, papel ou tesoura):");

if (jogador1 === jogador2) {
    console.log("Empate!");
} else if (jogador1 === "pedra" && jogador2 === "tesoura") {
    console.log("Jogador 1 venceu!");
} else if (jogador1 === "tesoura" && jogador2 === "papel") {
    console.log("Jogador 1 venceu!");
} else if (jogador1 === "papel" && jogador2 === "pedra") {
    console.log("Jogador 1 venceu!");
} else {
    console.log("Jogador 2 venceu!");
}
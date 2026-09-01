let nome_cliente = prompt("Qual o seu nome?: ");
let idade_cliente = Number(prompt("Qual a sua idade?: "));
let ingresso_cliente = Number(prompt("Você possui Ingresso?: (1)Sim (2)Não"));

const idadeMinima = 14;

if (idade < idadeMinima && ingresso_cliente == 1){
        console.log(`${nome_cliente}, entrada negada: Idade Insulficiente`);
} else if (possui_Ingresso !== "1") {
        console.log(`${idade_cliente}, entrada negada: Falta de ingresso.`);
} else {
        console.log(`${nome_cliente}, Aproveite seu filme! `)
}

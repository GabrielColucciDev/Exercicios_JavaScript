let vida = Number(prompt("Digita a quantidade de vidas: "));

if (vida <= 0){
    console.log("Situação: Game Over!");
}else if(vida <= 2){
    console.log("Situação: Cuidado!");
}else{
    console.log("Situação: Tudo certo");
}
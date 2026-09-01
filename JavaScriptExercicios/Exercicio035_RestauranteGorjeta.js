let total_conta = prompt("Qual o total da sua conta?: ");
let academia_SugerirAtendimento = Number(prompt("De 0 a 10 qual como você avalia este restaurante?: "));

if (academia_SugerirAtendimento >= 8 ){
    console.log("Gostaria de adicionar 15% gorjeta?" total_conta * 0.15);
}else if(academia_SugerirAtendimento >= 5){
    console.log("Gostaria de adicionar 10% de gorjeta?" total_conta * 0.10);
}else{
    console.log("Gostaria de adicionar alguma gorjeta?");
}
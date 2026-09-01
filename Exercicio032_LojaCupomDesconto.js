let pergunta_valor ("Qual o valor completo de sua compra?: ");
let possui_cupom("Você possui cupom?: (1)Sim (2)Não")

if(pergunta_valor >= 150 || possui_cupom == 1){
	console.log("Você recebeu 15% de Desconto. Total a Pagar: ", pergunta_valor * 0.15)
}else{
 console.log("Total a pagar: ", pergunta_valor)
};
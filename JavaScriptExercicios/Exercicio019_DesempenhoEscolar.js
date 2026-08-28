const prompt = require("prompt-sync")();

let classific_nota = Number(prompt("Qual a sua nota?: "));

if (classific_nota <= 5) {
    console.log("Insuficiente");
    
} else if (classific_nota <= 7) {
    console.log("Regular");
    
} else if (classific_nota <= 9) { 
    console.log("Bom!");
    
} else if (classific_nota == 10) { 
    console.log("Excelente!");
    
}; 


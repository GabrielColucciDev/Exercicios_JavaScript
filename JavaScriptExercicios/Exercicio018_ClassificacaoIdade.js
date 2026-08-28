const prompt = require("prompt-sync")();

let classific_idade = Number(prompt("Qual a sua idade?: "));

if (classific_idade <= 5) {
    console.log("Você é Bebê");
    
} else if (classific_idade <= 12) {
    console.log("Você é criança");
    
} else if (classific_idade < 18) { 

    console.log("Você é Adolescente");
    
} else if (classific_idade < 60) { 

    console.log("Você é Adulto");
    
} else { 

    console.log("Você é idoso");
}
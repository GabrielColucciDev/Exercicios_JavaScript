let a = 5;
let b = 10;
let aux = a; 

a = b;   // 'a' recebe o valor de 'b' (fica 10)
b = aux; // 'b' recebe o valor antigo de 'a' (fica 5)

console.log("a:", a);
console.log("b:", b); 
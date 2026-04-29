let somaNotas = 0;

for (let i = 1; i <= 5; i++) { 
    
    let num = parseFloat(prompt(`Digite a ${i}ª nota:`));
    
    somaNotas += num; 
}

let media = somaNotas / 5;
alert("A média é: " + media);
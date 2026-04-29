let num1 = Number(prompt("Digite um numero: "));
let num2 = Number(prompt("Digite outro numero: "));
let resultado = "";

if (num1 > num2){
    let temp = num1;
    num1 = [num2];
    num2 = [temp];
}
for (i = num1; i <= num2; i++){
    if (i % 2 === 0) {
        resultado = (`${resultado} ${i}`);
    }
}
alert(resultado)
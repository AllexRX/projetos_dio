let peso = 70;
let altura = 155;
let imc = peso / (altura/100)**2;
imc = parseFloat(imc.toFixed(2));

switch (true) {
   case imc <18.5:
      console.log("Abaixo do peso");
      break;
   case imc >=18.5 && imc <= 24.9:
      console.log("Peso normal");
      break;
   case imc >=25 && imc <= 29.9:
      console.log("Sobrepeso");
      break;
   case imc >=30 && imc <= 34.9:
      console.log("Obesidade grau 1");
      break;
   case imc >=35 && imc <= 39.9:
      console.log("Obesidade grau 2");
      break;
   case imc >=40:
      console.log("Obesidade grau 3");
      break;
   default:
      console.log("Valor inválido");
}

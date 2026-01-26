
let nome, xpAtual; // Variáveis para armazenar o nome e a quantidade de experiência (XP) do herói

// console.log(typeof xpAtual, nome);
nome = "Aragorn";
xpAtual = 200000000; 

if (nome === undefined || xpAtual === undefined) { // Verifica se nome ou xpAtual não estão definidos
   console.log("Nome ou XP não definidos.");
} else {
   switch (true) { // Usando switch com true para avaliar condições
      case xpAtual >= 0 && xpAtual <= 1000:
         console.log(`O Herói de nome ${nome} está no nível de Ferro`); 
         break;
      case xpAtual >= 1001 && xpAtual <= 2000:
         console.log(`O Herói de nome ${nome} está no nível de Bronze`); 
         break;
      case xpAtual >= 2001 && xpAtual <= 5000:
         console.log(`O Herói de nome ${nome} está no nível de Prata`);
         break;
      case xpAtual >= 5001 && xpAtual <= 7000:
         console.log(`O Herói de nome ${nome} está no nível de Ouro`);
         break;
      case xpAtual >= 7001 && xpAtual <= 8000:
         console.log(`O Herói de nome ${nome} está no nível de Platina`);
         break;
      case xpAtual >= 8001 && xpAtual <= 9000:
         console.log(`O Herói de nome ${nome} está no nível de Ascendente`);
         break;
      case xpAtual >= 9001 && xpAtual <= 10000:
         console.log(`O Herói de nome ${nome} está no nível de Imortal`);
         break;
      case xpAtual >= 10001:
         console.log(`O Herói de nome ${nome} está no nível de Radiante com ${xpAtual} de XP`);
         break;
      default:
         console.log("XP inválido.");
         break;
   }
}

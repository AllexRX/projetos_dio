// Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.
let numeros = [];
let a = 10, b = 5, c = 8, d = 20, e = 15;
numeros.push(a, b, c, d, e);
//numeros.sort((x, y ) => y - x); // Ordena em ordem decrescente
// console.log(numeros);

// Outra forma sem usar sort
for (let i = 0; i < numeros.length - 1; i++) { //vai até o penúltimo elemento
  for (let j = 0; j < numeros.length - 1 - i; j++) { //vai até o último elemento não ordenado
    if (numeros[j] > numeros[j + 1]) { //compara o elemento atual com o próximo
      let temp = numeros[j]; //troca os elementos de lugar
      numeros[j] = numeros[j + 1]; //atribui o próximo elemento ao atual
      numeros[j + 1] = temp; //atribui o valor temporário ao próximo elemento
    }
  }
}
console.log(numeros);
// por que funciona?
// O algoritmo acima é uma implementação do Bubble Sort, que ordena os elementos de um array comparando pares adjacentes e trocando-os de lugar se estiverem na ordem errada. Ele repete esse processo até que o array esteja completamente ordenado. A cada iteração externa, o maior elemento "borbulha" para o final do array, reduzindo o número de comparações necessárias nas iterações subsequentes.
// adjacentes = que estão lado a lado
// No final, o array 'numeros' estará ordenado em ordem crescente.
numeros.reverse(); // Inverte a ordem para decrescente
console.log(numeros);
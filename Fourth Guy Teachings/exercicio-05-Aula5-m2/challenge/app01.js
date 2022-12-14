/*
  Aviso: se você executar, acidentalmente, um loop infinito, faça o seguinte:
  
  - Feche o navegador;
  - Desconecte o servidor;
  - Modifique o seu código para que o looping infinito não aconteça;
  - E só então, levante o servidor novamente.
*/

/*
  01

  - Utilizando um while loop, exiba no console todos os números entre 0 e 5,  
    inclusive esses dois.
  - O resultado deve ser:
    0
    1
    2
    3
    4
    5
*/

let i = 0
while (i <= 5) {
  console.log(i);
  i++
}

/*
  02 - Comente a declaração da let e o loop acima e:

  - Utilizando um for loop, faça o mesmo que foi pedido no exercício 01.
*/

for (let o = 0; o <= 5; o++) {
  console.log(o);
}

/*
  03 - Comente o loop acima e:

  - Escreva um loop (for ou while) que exiba a frase abaixo no console;
  - Substitua o "X" pela informação correta;
  - "X" deve começar em 1 na 1ª exibição da frase e em 10 na última;
  - Exiba a frase 10x no console.

  "Esta é a Xª vez que esta frase é exibida no console."
*/

for (let p = 0; p <= 10; p++) {
  console.log(`Esta é a ${p}ª vez que esta frase é exibida no console.`);
}

/*
  04 - Comente o loop acima e:

  - Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à  
    ela um array vazio;
  - Adicione no array que a "upperCaseCities" armazena as cidades do array  
    cities com todas as letras maiúsculas, utilizando o for loop.
  - Para ver se deu certo, exiba o upperCaseCities no console.
*/

const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
const upperCaseCities = []
/* for (let k = 0; k <= cities.length; k++) {
  upperCaseCities.push(cities[k].toUpperCase()) // Needs to have something assigned for the Uppercase thing to work, for some reason. Redo this later, like, dang. It feels pretty dumb to me. No idea why it's giving an error in the console, either.
  console.log(upperCaseCities);
} */

/*
  05 - Comente o console.log acima e:

  - Após a const names, utilize um for loop para gerar um template HTML;
  - Exiba no console o template HTML que você gerou;
  - O template deve ser exibido apenas uma vez no console e o resultado deve ser:
    <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
*/

const names = ['João Grilo', 'Chicó', 'Rosinha']
let HTMLTemplate = ''
for (let l = 0; l < names.length; l++) {
  HTMLTemplate += `<li>${names[l]}</li>`
}

console.log(HTMLTemplate); // Put it outside like this for it to show only once.


/*
  06 - Comente o console.log acima e:

  - Após a const numbers, utilize um for loop para somar todos os números do  
    array;
  - Exiba no console um boolean indicando se o total dessa soma é 337;
  - O console deve exibir true.
*/



const numbers = ['91', '5', '30', '97', '83', '31']
let sum = 0
for (let m = 0; m < numbers.length; m++) {
  sum += Number(numbers[m]) // The "Number" function that I don't even know if he Talked about, and yet was used in the "Challenge". But anyway, I will write it Down.
}

console.log(sum === 337);

/*
  07 - Comente o console.log acima.

  Este exercício é um pouco mais complexo que os anteriores. Não se preocupe  
  muito caso você não acerte ele. Apenas tente resolvê-lo com o conhecimento  
  adquirido até aqui.

  - O JavaScript permite você criar arrays dentro de um outro array. Isso é  
    chamado de aninhamento de arrays, ou nested arrays em inglês. Por isso, o  
    array "arrays" abaixo é uma sintaxe válida. Cada array dentro do array  
    "arrays" é um item;
  - Abaixo do array "arrays", utilizando o for loop, some todos os números  
    destes arrays.
  - Após o for, exiba no console o resultado, que deve ser 218.

  Dica: você pode colocar um loop dentro do outro, ou seja, aninhá-los. =)
*/

const arrays = [
  [4, 32, 8],
  [64, 8, 32],
  [8, 32, 16],
  [2, 8, 4]
]

let arraysSum = 0
for (let z = 0; z < arrays.length; z++) {
  for (let x = 0; x < arrays[z].length; x++) {
    arraysSum += arrays[z][x]
  }
}

console.log(arraysSum); // Holy sh@t, this thing is way too... Anyway, it's very tough, as I can't see what is happening beside some sh@t error message. Maybe we should try to find a way that we can use it more... Visuale, I guess. It would help a LOT.

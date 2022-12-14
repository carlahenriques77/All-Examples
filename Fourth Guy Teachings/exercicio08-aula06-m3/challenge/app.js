/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

function multiply (firstNumber = 0, secondNumber = 0) {
  return firstNumber * secondNumber
}

console.log(multiply(5, 9))

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const divide = function (firstNumber = 0, secondNumber = 0) {
  return firstNumber / secondNumber
}

console.log(divide(10, 5))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

const log = function (value = 'Você deve passar um valor como argumento') {
  console.log(value)
}
 
for (let i = 0; i < 7; i++) {
  console.log(`Esta é a ${i + 1}ª vez que essa string é exibida.`)
}

log('aaaaaaaa') // Oh... I didn't knew that.

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

const transformToUppercase = function (array = []) {
  let newArray = []

  for (let z = 0; z < array.length; z++) {
    newArray.push(array[z].toUpperCase()) // Wut. That's... weird. The Ctrl + Space didn't show it before, but yet, the Command is still Valid...?
  }

  return newArray
}

log(transformToUppercase(millennialWords))

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

let positiveNumbersCounter = 0
let negativeNumbersCounter = 0

const isPositive = function (number = 0) {
  return number >= 1
}

for (let c = 0; c < randomNumbers.length; c++) {
  if (isPositive(randomNumbers[c])) {
    positiveNumbersCounter++
  } else {
    negativeNumbersCounter++
  }
}

log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveNumbersCounter} positivos e ${negativeNumbersCounter} negativos.`)

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const getOddNumbers = function (numbers = []) {
  let newArray = []

  for (let d = 0; d < numbers.length; d++) {
    if (numbers[d] % 2 !== 0) {
      newArray.push(numbers[d])
    }
  }

  return newArray
}

log(getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]))

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

let sentence = ''

for (let v = 0; v < functions.length; v++) {
  sentence += `${functions[v]()} `
}

log(sentence)
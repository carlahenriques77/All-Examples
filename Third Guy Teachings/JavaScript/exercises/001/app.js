
const name = 'someName', 
      city = 'someOtherName', 
      giraffe = 20; // Sick, you can really make more than one Var / Const / Let with only one 'Thing' being said

console.log(name)
console.log(giraffe)

console.log(typeof city) // Seems like you can do it this way? Not sure if the other method was like this, too...

const total2 = (20 + 5) * 2 // *Apparently*, if doing math like this, the rule will be like actual "Expressions"

let increasingNumber = 5
console.log(increasingNumber++) // 5
console.log(increasingNumber) // 6

let increasingNumber2 = 5
console.log(++increasingNumber) // 6
console.log(increasingNumber) // 6

// Retunrs the first False Value **I think**
true && true //	 true
true && false // false
false && true // false

// Returns the first True Value
true || true //	 true
true || false // true
false ||  true // true

function areaCube(side) {
    return side * side
}

// Basically, someNumber X someNumber in this case. 2 x 2 = 4, 4 x 4 = 16, 5 x 5 = 25
areaCube(4) // 16
areaCube(5) // 25
areaCube(2) // 4
areaCube(1) // 2

// Working Function with Event Listener

const eventListenerTest = document.querySelector('h1')

function showOnConsole () {
    console.log('somethingHere')
}

addEventListener('click', showOnConsole) // Click Anywhere
eventListenerTest.addEventListener('click', showOnConsole) // Click on the Text

// An way to use an typeof in a Function, I guess
let ageNumber = 72
function thirdAge(ageNumber) {
    if(typeof ageNumber !== 'number') {
        return 'Please, input an Number'
    } else if(ageNumber >= 60) {
        return true
    } else {
        return false
    }
}

const person = {
    name: 'Lucas',
    age: 28
}

console.log(person) // Object
console.log(person.age) // The Age

let menu = {
    width: 800,
    height: 50,
    backgroundColor: 'purple',
    halfWidth() {
        return this.height / 2
    }
}

let letBackground = menu.backgroundColor
menu.height = 120
menu.color = 'blue' // Adds one to it

const fixedNumberAndPossibleMore = 11.8
fixedNumberAndPossibleMore.toFixed() // 12

// Wow, it didn't go through me that you could use an Word and more Instead of just an Character. Also, it can't be a Const, it seems
for (let loopNumber = 0; loopNumber <= 10; loopNumber++) {
    console.log(loopNumber)
}

const videoGames = ['Switch', 'PS4', 'XBOX', '3DS']

videoGames.forEach(function(anyNameSuchAs19283dkksxsmzjamzaza, indexHere, arraySlotHere) {
    console.log(anyNameSuchAs19283dkksxsmzjamzaza, indexHere, arraySlotHere)
})

let hasFaculty = true

// Seems like they don't always have to have the "{"
if(hasFaculty)
    console.log('Has Faculty')
else
    console.log('Doesnt have Faculty')
 
const potato = false

if(!potato)
    console.log('isItWorking')
else
    console.log('Seems to be. Now that is interesting, somehow...')

window.location.href


// const someThingThere = document.querySelector('section')
// On the Console, you can put: "someThingThere. Ctrl + Space", which will show us what we can do with it in a lot of differnet options

function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida
    this.preco = precoAtribuido
}

const honda = new Carro('Honda')
const fiat = new Carro('Fiat')
fiat.marca = 'Fiat'

function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor)
    }
    this.ativar = function() {
        this.element().classList.add('ativar')
    }
}

const li = new Dom('li')
const ul = new Dom('ul')

const lastLi = new Dom('li:last-child')
lastLi.ativar()

console.log(Dom.prototype) // Different Proto's have different methods. Objects have their own, Arrays have teir on, and NodeList have their own

// More Prototype stuff
const list = document.querySelector('li')

li // HTMLLIELement
li.click // Function
li.innerText // String
li.value // Number
li.hidden // Boolean
li.offSetLeft // Number
li.click() // underfined

// Example in the Console

li.hidden.construction.name // String

const linguagem = 'JavaScript'
linguagem.substring(3,5) // aS
linguagem.substring(0,4) // Java
linguagem.substring(4) // Script
linguagem.substring(-3) // JavaScript

const frase = 'Ta'

frase.repeat(5) // TaTaTaTaTa

Number.isNaN(NaN) // true
Number.isNaN(4 + 5) // false

Number.isInteger(20) // true
Number.isInteger(23.6) // true

const cars = ['Ford', 'Fiat', 'Honda']
cars.forEach(function(item, index, array) {
    console.log(item.toUpperCase())
})

// With Arrow Function
cars.forEach((item, index, array) => {
    console.log(item.toUpperCase)
})

const constSomeOtherLis = document.querySelectorAll('li')

constSomeOtherLis.forEach(i => i.classList.add('active'))

constSomeOtherLis.forEach(function(item) {
    item.classList.add('active')
})

Object.defineProperties(bike, {
    wheels: {
        value: 2,
        configurable: false,
        writable: true,
    }
})

const constDiv = document.querySelector("[data-color]")

constDiv.dataset.height = 1000

delete constDiv.dataset.width
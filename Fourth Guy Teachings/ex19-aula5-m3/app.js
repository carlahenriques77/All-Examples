
const double = function (number) {
    const doubleResult = number * 2
    console.log(doubleResult)
} // A Code that will make some Mathematics for you[useless]. You can change how many times it will be repeated in the "double" below.
double(2) // He said that you can't do anything with this Number in this method. Apparently, it will ONLY appear in the Console.


const double01 = function (number01) {
     return number01 * 2 // How he used the Return thing to make the Result be usable somewhere else.
}

const result = double01(2)

const showResult = function (value) {
    return `O resultado é: ${value}`
}
console.log(showResult(result))
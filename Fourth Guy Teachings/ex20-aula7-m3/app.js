
const double = function (number) {
    return number * 2
}

const double01 = (number = 0) => { // "Arrow Function. I still don't quite get what it is, honestly... Anyway, you can remove the "( )" from the number in this case. But, it can only be removed and still work if there is only one paramete < -- That's what he said."
    return number * 2
}

const double02 = number02 => number02 * 2 // AN shorthand for the Above.

const result = double01(3)
console.log(`O resultado é: ${result}`)

const result02 = double02(3)
console.log(`O resultado é: ${result02}`)
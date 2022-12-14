let score = '100'

console.log(score + 1) // 1001

let score01 = '100'

score01 = Number(score01) // Turns the String into an Number?
console.log(score01 + 1) // 101

let score02 = '100'

score01 = Number(score02)
console.log(typeof score) // Shows what something is, wheter it's an String or an Number and stuff.

const crazyConversion = Number('maçã') // NaN / Not a Number

console.log(crazyConversion)

const convertedNumber = String(97) // String

console.log(convertedNumber, typeof convertedNumber) 

const booleanConversion = Boolean(10) // Apparently, some are false and some true...

console.log(booleanConversion, typeof booleanConversion) // True "boolean"

console.log(Boolean(0)) // false

console.log(Boolean('0')) // true

/*
    Boolean falsy Values:
        - false
        - 0
        - "", '', ``
        - null
        - undefined
        - NaN

        Valores truthy:
            - Any Value that isn't Falsy
*/
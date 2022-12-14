console.log(true, false, 'true', 'false') // Seems to do nothing for now... At most, he showed the differnece between an String and a Thing.

const email = 'burcewayne@rogermelo.com.br'
const includes = email.includes('@') // Includes shows whether it's "true" or "false". In this case, if the String above has the "@", then it's "True". If it doesn't, then it's "false".

console.log(includes)

const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('rob') // False, as it seemingly only takes the Full Written thing on it???

console.log(arrayIncludes)

const age = 31

console.log(age == 31) // True, as age[31] is the same as [31]
console.log(age == 35) // False, as age[31] is not the same as [35]
console.log(age != 35) // False, as this means that "age[31] 'is different' / not equal as [35]."
console.log(age > 30) // True, as age[31] is BIGGER than [30].
console.log(age > 31) // False, as age[31] is NOT bigger than [31].
console.log(age <= 31) // True, as age[31] is not bigger and is the same as [31].

const name = 'roger'

console.log(name == 'roger') // True
console.log(name == 'Roger') // False, as the Uppercase in a String seems to matter here;
console.log(name > 'belinha') // True, odd enough, as "r" is more ahead in the Alphabet than "b".
console.log(name > 'Roger') // True, odd. Apparently, an "LowerCase" is BIGGER than an "UpperCase" here.
console.log(name > 'Belinha') // True.
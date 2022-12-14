const age = 31

console.log(age == 31) // true
console.log(age == '31') // True, somehow. Apparently, the "String turns into a Number",somehow.
console.log(age != 31) // false
console.log(age != '31') // false
console.log(age === 31) // true. The same Number AND the same type.
console.log(age === '31') // false, as it's not the same Type.
console.log(age !== 31) // false
console.log(age !== '31') // true
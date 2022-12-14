
let age = 31
if (true) {
    let age = 41 // Here it shows that an let / const with the same name can be created if inside something(?)
    let name = 'Roger'
    console.log(`dentro do 1 bloc0 de código: ${age} ${name}`) // Result: 41 Roger
    if (true) {
        let age = 51
        console.log(`dentro do 2 bloco de código? ${age}`) // Result: 51
    }
}
console.log(`fora do bloco de código: ${age} ${name}`) // Result: 31

function myFunc () {
    let cat = 'Zeca'
    const age = 3
    var color = 'cinza'
    console.log(age)
}

function myFunc2 () {
    var color = 'cinza'
    const age = 5
    console.log(age)
}

myFunc()
myFunc2()

const dog = 'Pastor-alemão'

function dogWatch () {
    const dog = 'Samoeida'
    console.log(dog)
}

dogWatch()
console.log(dog)

if (true) {
    const dragon = 'Balerion'
    console.log(dragon)
}

// console.log(dragon) // Can't be acessed

if (true) {
    var dragon01 = 'Balerion01'
    console.log(dragon01)
}

console.log(dragon01) // Can be acessed

const external = () => {
    const book = 'Sapiens'

    const internal = () => {
        const book = "Os testatmentos"

        const extraInternal = () => {
            console.log(book.toUpperCase())
        }
    }

    internal()
}
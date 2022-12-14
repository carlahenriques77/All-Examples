
const myFunc = function (name, lastName) { // This is called "Parameter". The function with the "(name)", I mean...
    console.log(`Oi, ${name} ${lastName}!`)
}
myFunc('Roger', 'Melo') // Apparently, this is called "argument", and it can go from there to the "function(name)".

const myFunk = function (name01 = 'Estrôncio', lastName01 = 'Almeida') { // A way to Dodge the Underfined if there isn't anything in the "myFunk".
    console.log(`Oi, ${name01} ${lastName01}!`)
}
myFunk() 

let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata']
} // How to make an "object"
console.log(user.name) // Result: João
console.log(user['email']) // Result: "email written above"
user.age = 32 // < -- How to modify something from an Object
user['name'] = 'José' // Another way to Modify. Not too used, it seems

console.log(user.age)


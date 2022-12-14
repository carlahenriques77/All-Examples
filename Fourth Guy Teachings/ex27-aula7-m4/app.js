let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function () {
        console.log('Usuário logado')
    },
    logout: function () {
        console.log('Usuário deslogado')
    },
    logBlogPosts: function () { // Don't use an Arrow Function when using the this.
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post)
        })
    }
}

user.logBlogPosts()

console.log(this)

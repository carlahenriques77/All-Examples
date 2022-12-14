const posts = [
    { title: 'Empadão de frango', likes: 30 },
    {title: '4 receitas de purê de batata', likes: 50 }
] // How to do an Array inside an Object

console.log(posts)

let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: [
        { title: 'Empadão de frango', likes: 30 },
        {title: '4 receitas de purê de batata', likes: 50 }
    ],
    login: function () {
        console.log('Usuário logado')
    },
    logout: function () {
        console.log('Usuário deslogado')
    },
    logBlogPosts: function () { // Don't use an Arrow Function when using the this.
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post.title, post.likes)
        })
    }
}

user.logBlogPosts()

console.log(this)

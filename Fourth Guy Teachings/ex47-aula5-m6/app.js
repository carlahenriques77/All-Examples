
const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('@username')


form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(event.target.username.value)
})

const username = '@88rogerm77!'
const pattern = /^[a-z]{6,}$/ // How to use Regex. It was False here, as there was more than just Characters
const result = pattern.test(username) // The way to rest the Regex String, I think
const result01 = username.search(pattern)

console.log(result01)

if (result) {
    console.log('o teste da regex passou')
} else {
    console.log('o teste da regex não passou')
}

console.log(result)
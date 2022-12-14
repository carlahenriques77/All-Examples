
const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('@username')


form.addEventListener('submit', event => {
    event.preventDefault() // Prevents the Button from reloading the Page

    console.log(event.target.username.value)
})

const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
    event.preventDefault()

    const username = event.target.username.value
    const usernameRegex = /^[a-zA-Z]{6,12}$/
    const isAValidUsername = usernameRegex.test(username)

    if (isAValidUsername) {
        feedback.textContent = 'username válido'
        return
    }
    feedback.textContent = 'o username deve conter entre 6 a 12 e deve conter apenas letras'
}) // This whole Code seems useful... It wii create an Paragraph below the Form Box, saying what gone Wrong

const constForm = document.querySelector('form')
const constLabel = document.querySelector('label')
const constInput = document.querySelector('input[type="text"]')
const constIMail = document.getElementById('iMail')

const testMail = iMail => /\S+@\S+\.\S+/.test(iMail)

constForm.addEventListener('submit', event => {
    event.preventDefault()

    const isAValidMail = testMail(event.target.iMail.value)

    if (isAValidMail) {
        constLabel.textContent = ''
        return
    }

    constLabel.textContent = 'Oops! Please check your email'
})
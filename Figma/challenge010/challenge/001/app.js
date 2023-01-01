
const form = document.getElementById('iform')
const constFirstName = document.getElementById('iFirstName')
const constLastName = document.getElementById('iLastName')
const constEmail = document.getElementById('iEmail')
const constPassword = document.getElementById('iPassword')

const nameFormat = /^[a-zA-Z]+$/
const passFormat = /^[a-zA-Z1-9]{6,20}$/

function Error(inputs, message) {
    const form = inputs.parentElement
    const label = form.querySelector('label')
    label.innerText = message
    inputs.className = 'error'
    label.className = 'label-validation'
}

function Successful(inputs){
    const form = inputs.parentElement
    const label = form.querySelector('label')
    inputs.className = 'success'
    label.className = 'label-success'
}

function FirstName() {
    let fn = constFirstName.value
    if(!fn) {
        Error(constFirstName, 'First Name cannot be empty')
    } else {
        if(fn.match(nameFormat)){
            Successful(constFirstName)
        } else {
            Error(constFirstName, 'Looks like this is not an First Name');
        }
    }
}

function LastName() {
    const ln = constLastName.value
    if(!ln) {
        Error(constLastName, 'Last Name cannot be empty')
    } else {
        if(ln.match(nameFormat)) {
            Successful(constLastName)
        } else {
            Error(constLastName, 'Looks like this is not an Last Name')
        }
    } 
}

function Email() {
    const mail = constEmail.value
    if (!mail) {
        Error(constEmail, 'Email Address cannot be empty')
    } else {
        if (!validateEmail(mail)) {
            Error(constEmail, 'Looks like this is not an email')
        } else {
            Successful(constEmail)
        }
    }
}

function Password() {
    const pass = constPassword.value
    if (!pass) {
        Error(constPassword, 'Password cannot be empty')
    } else {
        if (pass.match(passFormat)) {
            Successful(constPassword)
        } else {
            Error(constPassword, 'It seems that it is not safe, try again')
        }
    }
}




form.addEventListener('submit', event => {
    event.preventDefault()

    FirstName()
    LastName()
    Email()
    Password()
})

function validateEmail(iEmail) {
    const emailRegex = /\S+@\S+\.\S+/
    return emailRegex.test(iEmail)
}




constFirstName.addEventListener('blur', function () {

    FirstName()
})

constLastName.addEventListener('blur', function(){

    LastName()
})

constEmail.addEventListener('blur', function(){

    Email()
})

constPassword.addEventListener('blur', function(){

    Password()
})



const testFirstName = iFirstName => nameFormat.test(iFirstName)
const testLastName = iLastName => nameFormat.test(iLastName)
const testEmail = iEmail => validateEmail.test(iEmail)
const testPassword = iPassword => passFormat.test(iPassword)

constFirstName.addEventListener('keyup', event => {
    FirstName()

    const validName = testFirstName(event.target.value)
    if (validName) {
        constFirstName.setAttribute('class', 'success')
        return
    }
    constFirstName.setAttribute('class', 'error')
})

constLastName.addEventListener('keyup', event => {
    LastName()

    const validName = testLastName(event.target.value)
    if (validName) {
        constLastName.setAttribute('class', 'success')
        return
    }
    constLastName.setAttribute('class', 'error')
})

constEmail.addEventListener('keyup', event => {

    const validEmail = validateEmail(event.target.value)
    if (validEmail) {
        constEmail.setAttribute('class', 'success')
        return
    }
    constEmail.setAttribute('class', 'error')
})

constPassword.addEventListener('keyup', event => {
    Password()

    const validPass = testPassword(event.target.value)
    if (validPass) {
        constPassword.setAttribute('class', 'success')
        return
    }
    constPassword.setAttribute('class', 'error')
})
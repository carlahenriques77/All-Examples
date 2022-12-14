
const title = document.getElementById('title')
console.log(title)

const errors = document.getElementsByClassName('error')
console.log(errors[1])

errors.forEach(error => {
    console.log(error)
})

const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)
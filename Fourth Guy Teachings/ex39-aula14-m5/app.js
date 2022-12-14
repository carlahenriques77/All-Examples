
const article = document.querySelector('article')

console.log(article.children) // Shows the Tags inside something

console.log(Array.from(article.children))

Array.from(article.children).forEach(element => {
    element.classList.add('article-element') // Adds an Tag for every thing inside the Written thing
})

const title = document.querySelector('h2')

console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)
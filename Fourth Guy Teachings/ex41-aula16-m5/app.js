
const ul = document.querySelector('ul')
ul.remove() // Removes something? I wasn't paying attention... Maybe it removes an Event

const lis = document.querySelectorAll('li')
lis.forEach(li => {
    li.addEventListener('click', (event) => {
        const clickedElement = event.target

        clickedElement.style.textDecoration = 'line-through'

        console.log(clickedElement)
    })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo item'
    ul.append(li) // Adds to the last part
    ul.prepend(li) // Adds to the Fist part
}) // Adds an Item to the UL when the Button is Clicked. As usual, I **won't** write this down in the Notes, as it's worthy hasn't been proven yet
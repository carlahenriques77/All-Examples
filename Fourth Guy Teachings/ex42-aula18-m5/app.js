
const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')
lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target

        console.log('Clicou na LI')

        event.stopPropagation() // **Apparently**, it stops the thing from also activating the "holding" Tag. In this case, it would not allow it to also affect the UL, instead just affecting the LI
        clickedElement.removeEventListener()
    })
})

ul.addEventListener('click', event => {
    const clickedElement = event.target

    if (clickedElement.tagName === 'LI') {
        clickedElement.remove()
    }
})
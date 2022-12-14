
const button = document.querySelector('button')
button.addEventListener('click', () => {
    console.log('Clicou') // FINALLY, the one that **might** be useful, and what JavaScript is used for
})

const lis = document.querySelectorAll('li')
lis.forEach(li => {
    li.addEventListener('click', (event) => {
        const clickedElement = event.target

        clickedElement.style.textDecoration = 'line-through'

        console.log(clickedElement)
    })
}) // Will make an Line Cross the Word when Clicked + Show it on Console... Nothing too useful yet, as these can be done with CSS. I wonder if JavaScript has actually a thing for only himself...?
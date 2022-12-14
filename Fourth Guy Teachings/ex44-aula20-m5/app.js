
const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
// const closeButton = document.querySelector('.popup-close') // He removed it

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

// closeButton.addEventListener('click', () => {
//     popup.style.display = 'none'
// }) // He removed it

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0] // WIll show which Element was Clicked in the Console. Finally, a thing that seems Useful for the Event part
    if (classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === 'popup-link' || classNameOfClickedElement === 'popup-wrapper') {
        popup.style.display = 'none'     
    }
})
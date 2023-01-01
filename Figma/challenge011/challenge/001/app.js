
const ratingForm = document.querySelector('form')
const starterRating = document.querySelector('.rating-start')
const submitButton = document.querySelector('.submit-button')
const thankYou = document.querySelector('.popup')
const userRating = document.querySelector('span')


ratingForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const userAnswer = [
        ratingForm.Rating.value,
    ]

    userRating.textContent = `${userAnswer}`
})

submitButton.addEventListener('click', () => {
    thankYou.style.display = 'grid'
    starterRating.style.display = 'none'
})



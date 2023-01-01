
const form = document.querySelector('.quiz-form')
const correctAnswers = ['B', 'B', 'B', 'B']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })

    scrollTo(0, 0) // Scrolls to written place numbers when the Function activates. In this case, it scrolled it to the top of the Page

    finalResult.classList.remove('d-none')

    let counter1 = 0

    const timer1 = setInterval(() => {
        if (counter === score) {
            clearInterval(timer1)
        }

        finalResult.querySelector('span').textContent = `${score}%`
        counter1++
    }, 10)
})

let counter = 0

const timer = setInterval(() => {
    console.log('1 sec has passed...')
    counter++

    if (counter === 5) {
        clearInterval(timer)
    }
}, 1000)
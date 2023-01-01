
const constQuestions = document.querySelectorAll('.question')

constQuestions.forEach((anyNameHere) => anyNameHere.addEventListener('click', () => {
    if (anyNameHere.classList.contains('active')) {
        anyNameHere.classList.toggle('active')
    } else {
        constQuestions.forEach((anyNameHere) => anyNameHere.classList.remove('active'))
        anyNameHere.classList.add('active')
    }
}))

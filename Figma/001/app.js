
const boxTesting = document.querySelector('.question')
const test = document.querySelector('p')
const testing = document.querySelectorAll('body')



testing.addEventListener('click', () => {
    boxTesting.classList.toggle('active')
})


/*
const questions = document.querySelectorAll('.question')
questions.forEach((question) => question.addEventListener('click', () => {
    if (question.parentNode.classList.contains('active')) {
        question.parentNode.classList.toggle('active');
    } else {
        questions.forEach((question) => question.parentNode.classList.remove('active'));
        question.parentNode.classList.add('active');
    }
}))
*/
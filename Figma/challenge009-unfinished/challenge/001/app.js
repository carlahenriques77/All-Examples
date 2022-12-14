
const questions = document.querySelectorAll('.question')
questions.forEach((question) => question.addEventListener('click', () => {
    if (question.parentNode.classList.contains('active')) {
        question.parentNode.classList.toggle('active');
    } else {
        questions.forEach((question) => question.parentNode.classList.remove('active'));
        question.parentNode.classList.add('active');
    }
})) // How he made it to work. Bruh, is JavaScript really needed? All of the Methods soo far has some really complicated solution... At first, I thought that usind only CSS would be a bad thing, as it might not allow some JavaScript stuff, but... At this point, it's being hard to think so about CSS, as these Solutions might just not be that great, even if the CSS turns into a mess
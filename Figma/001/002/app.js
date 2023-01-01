

const constQuestions = document.querySelectorAll('.question')
const constAnswer = document.querySelectorAll('.answer')

// constQuestions.forEach((anyNameHere) => anyNameHere.addEventListener('click', () => {
//     if (anyNameHere.parentNode.classList.contains('active')) {
//         anyNameHere.parentNode.classList.toggle('active')
//         } else {
//             constQuestions.forEach((anyNameHere) => anyNameHere.parentNode.classList.remove('active'))
//             anyNameHere.parentNode.classList.add('active')
//     }
// }))

constQuestions.forEach((anyNameHere) => anyNameHere.addEventListener('click', () => {
    if (anyNameHere.classList.contains('active')) {
        anyNameHere.classList.toggle('active')
    } else {
        constQuestions.forEach((anyNameHere) => anyNameHere.classList.remove('active'))
        anyNameHere.classList.add('active')
    }
}))

/*
          <div class="question">

            <h2>How many team members can I invite?</h2>

            <p class="answer">
              You can invite up to 2 additional users on the Free plan. There is no limit on
              team members for the Premium plan.
            </p>
            
          </div>
*/


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
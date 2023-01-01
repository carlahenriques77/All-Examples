
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    if (inputValue.length) {
        todosContainer.innerHTML += 
        `
        // add the li here, with all the classes... If you find his HTML, that is
        <span>${inputValue}</span>
        `

        event.target.reset()
    }

})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    if (Array.from(clickedElement.classList).includes('delete')) {
        clickedElement.parentElement.remove()
    }
})
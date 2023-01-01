
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

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

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase
    Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase.includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('d-flex')
        todo.classList.add('hidden')
    })
    Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase.includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
    })
})
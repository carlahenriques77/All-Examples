
const imgs = document.querySelectorAll('img')

let i = 0
imgs.forEach(function(anyNameHere) {
    console.log(anyNameHere)
})

const menu = document.querySelector('.menu')

menu.className // string
menu.classList // list of classes
menu.classList.add('ativo')
menu.classList.add('ativo', 'mobile') // double classes and more
menu.classList.remove('ativo')
menu.classList.toggle('ativo') // add and remove classes? *Maybe you can remove it if you write it twice?
menu.classList.contains('ativo') // true or false
menu.classList.replace('ativo', 'inativo')

const small = window.matchMedia('(max-width: 600px)')

if(small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}

function handleKeyboard(event) {
    if(event.key === 'a')
        document.body.classList.toggle('azul')
    else if(event.key === 'v')
        document.body.classList.toggle('vermelho')
}

window.addEventListener('keydown', callback)

const todosElementos = document.querySelectorAll('body *')

function handleElemento(event) {
    event.currentTarger.remove()
} // Remove clicked elements

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento)
})

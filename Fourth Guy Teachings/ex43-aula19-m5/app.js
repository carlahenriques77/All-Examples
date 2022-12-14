
const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
    console.log('texto copiado')
}) // Wow, can't he really show something useful with these things??? Anyway, this here made an Message appear on Console when you Copied the "copy-me class" text

const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
    div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`
    console.log(event.offsetX, event.offsetY)
})

document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY)
})
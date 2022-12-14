
const paragraph = document.querySelector('p')

console.log(paragraph.classList)

paragraph.classList.add('addSomething')
paragraph.classList.add('removeSomething')

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
    if (paragraph.textContent.includes('error')) {
        paragraph.classList.add('error')
    }

    if (paragraph.textContent.includes('success')) {
        paragraph.classList.add('success')
    }
    console.log(paragraph.textContent) // Text Content will show every written Text, even the ones that are being Hidden
})


const title = document.querySelector('h1')

title.classList.toggle('test') // Toggle can seemingly Remove an Tag if it already haves one, and can Add it if it have's none... What the f***
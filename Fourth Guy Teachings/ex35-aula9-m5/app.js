
const paragraph = document.querySelector('p')

// <p>Something here</p>
console.log(paragraph.innerText) // This Command will show Only the Phrase, with no "p" attached to it

paragraph.innerText = 'Texto inserido' // Will Change the HTML part. It was: "Something here" before. Now it is: "Texto inserido". I'm surprised at how useless this sounds... With the "+=", it will fuse both of them

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph, index) => {
    paragraph.innerText += ` Novo texto ${index + 1}`
    console.log(paragraph.innerText)
})

const div = document.querySelector('.content')

div.innerHTML += '<h2>Novo h2</h2>'

const people = [ 'Jonatan', 'Vinicius', 'Diego' ]

people.forEach(person => {
    div.innerHTML += `<p>${person}</p>`
})
const postTitle = 'È bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

const postMessage = 'O post "' + postTitle + '" do ' + postAuthor + ', tem ' + postComments + ' comentarios'

console.log(postMessage)

console.log('Você manja do filme \'As Branquelas\'?') // A way to put an " ' " inside the closed thing without an Error happening. 

const postMessage001 = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.` // A better way to Write Strings while Linking a lot of things.

console.log(postMessage001)

const html = `
    <h2>${postTitle}</h2>
    <p>Autor: ${postAuthor}</p>
    <span>Este post tem ${postComments} comentários</span>
` // How to write HTML, I guess... Not sure if I put it in the Notes, considering that it didn't even go to the Site HTML.

console.log(html)
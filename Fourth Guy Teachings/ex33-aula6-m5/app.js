/* 
    <div>
        <p>Hello world!</p>
        <p>Oi</p>
        <p class="error">Essa é uma mensagem de erro</p>
    </div>
    <div class="error">Outra mensagem de rro</div>
    */
const paragraph = document.querySelector('p' / '.error' / 'div.error') // This will show something from the HTML into he Console. The first one will show Only the first P. The second will show the one with the class "error". The third will show the Div with the Class Error.

console.log(paragraph)

const paragraphs = document.querySelectorAll('p') // Select ALL of the Written ones in a "node" list.
console.log(paragraphs[0]) // Can show an Specific one in the Node List.

paragraphs.forEach(paragraph01 => {
    console.log(paragraphs)
})

const errors = document.querySelectorAll('.error')

console.log(errors)
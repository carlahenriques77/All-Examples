
const books = [
    { name: 'Código Limpo', price: 30 },
    { name: 'O milagre', price: 5 },
    { name: 'Alice', price: 10 },
    { name: 'Quem Pensa Enriquece', price: 50 },
    { name: 'O livro da ciência', price: 40 }
]
 
const booksOnSale = 
    books
    .filter(book => book.price > 20)
    .map(book => `O preço do livro "${book.name}" caiu para ${book.price} reais`)
debugger //	 Wow, debugger froze it

console.log(booksOnSale)
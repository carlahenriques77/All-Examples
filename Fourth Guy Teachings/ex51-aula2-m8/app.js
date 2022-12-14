
const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => item * 2)

console.log(doubleNumbers, numbers)

const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(item => item / 2)

console.log(salePrices)

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho', price: 50 },
    { name: 'Suporte', price: 23 },
    { name: 'Repetidor de Sinal', price: 44 }
]

const saleProducts = products.map(item => {
    if (item.price >= 30) {
        return { name: products.name, price: item.price / 2 }
    }

    return item
})

console.log(saleProducts)
console.log(products)
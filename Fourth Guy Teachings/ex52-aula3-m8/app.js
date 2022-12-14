
const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter((item) => item > 37)

console.log({ numbersGreaterThan37, randomNumbers })

const users = [
    { name: 'Mouse Sem Fio', premium: true },
    { name: 'Pen Drive', premium: false },
    { name: 'Cartucho', premium: true },
    { name: 'Suporte', premium: false },
    { name: 'Repetidor de Sinal', premium: true }
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers)
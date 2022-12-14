
const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult)

const phaseScores = [
    { name: 'Mouse com Fio', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Cartucho', score: 234 },
    { name: 'Suporte', score: 135 },
    { name: 'Repetidor de Sinal', score: 491 },
    { name: 'Mouse Sem Fio', score: 167 },
    { name: 'Pen Dive', score: 137 },
    { name: 'Cartichu', score: 234 },
    { name: 'Pedro', score: 133}
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
        accumulator += phaseScore.score
    }

    return accumulator
}, 0)

console.log(rogerScore)
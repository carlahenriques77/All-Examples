
const names = ['Chistian', 'Alfredo', 'Edson']

names.sort()

console.log(names)

const scores = [10, 20, 35, 45, 5, 50, 70]

scores.sort() // Sort in an Inscreasing order, I think. I mean... At least, it did in this case. But, it was only with the first number of each one of them

console.log(scores)

const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
]

// theBigFamily.sort((item1, item2) => {
//     if (item1.score > item2.score) {
//         return -1
//     } else if (item2.score > item1.score) {
//         return 1
//     }

//     return 0
// })

theBigFamily.sort((item1, item2) => item2.score - item1.score) // Simplified Version

console.log(theBigFamily)
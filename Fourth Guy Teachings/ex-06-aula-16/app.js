let heroes = ['Batman', 'Catwoman', 'Iron Man'] // An array. Seems like it works as some sort os Storage...? Oh, odd enough for me, it seems like it Strings are also typed as Strngs here, with needing the " ' " and all that... The Numbers seems llike they don't have to.

heroes[2] = 'Spider-Man' // How to change an Item of the Array. In this case, "Iron-Man" turned into "Spider-Man".

console.log(heroes)

console.log(heroes[0]) // How to get an Specific Result in the "List" of an Array. In this case, the first example would be: "Batman". The Second one would be: "Catwoman".

const ages = [31, 25, 39, 40]

console.log(ages[2])

const randomArray = ['Parker', 'Diana', 19, 18]

console.log(randomArray)

const joinHeroes = heroes.join('I') // Will fuse the Array into an String, separting each Word with an " , " if Empty. You can Change the separation Symbol by Writing something.

console.log(joinHeroes)

const moreHeroes = heroes.concat(['Superman', 'Wolverine']) // This "concat" thing will give an Array new Written Items, while also Fusing them with the ones from before, thus making the List Bigger.

console.log(moreHeroes)

const pushToHeroes = heroes.push('Cyclops', 'Hulk') // Will Add more Items to the Array, just like the "concat". The Differnece, is that if used in the Console, it will ONLY show Numbers. Example: ['Batman', 'Catwoman', 'Iron Man', 'Cyclops', 'Hulk'], would just show as: [5] instead of Writing their Names.

console.log(pushToHeroes)

const popHeroes = heroes.pop() // Take's the last Item of an Array and Writes it in the Console. Odd enough, in this case, the Item in questions was: "Hulk". Maybe it was because of the "Push"...? It's noted that, it made "Hulk" dissapear from the Array List when he made it show the "Heroes" on Console.

console.log(popHeroes)
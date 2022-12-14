for (let i = 0; i < 5; i++) {
    console.log(`Dentro do loop: ${i}`); // Will make an "Loop". In this Example, he added the "i" an Value first[0], then came the "i < 5 / 0 < 5". And then the "confusing" i++. It works like that: "If i is Lower than 5, then it will re-do the Action. Each time that it re-do it, the i receives 1+ value. It will repeat until the i[0] turns into an i[5]. We can *probably* reduce the Loop amount if we add more +++ to that i(???)."
}
console.log('Loop concluido'); // As JavaScript works from Up to Down, you can totally write an Message after a Loop if you want to.


const names = ['Linus', 'Ada', 'Bill']

for (let i = 0; i < names.length; i++) {
    console.log(names[i]) // Whole method that made name by name appear in the Console.
}

for (let i = 0; i < names.length; i++) {
    const HTMLTemplate = `<p>${names[i]}</p>`
    console.log(HTMLTemplate)
}
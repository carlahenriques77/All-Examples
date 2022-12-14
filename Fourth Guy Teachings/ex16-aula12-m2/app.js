
const grade = 'B'

if (grade === 'A') {

} else if (grade === 'B') {

} else if (grade === 'C') {
    
} else if (grade === 'D') {
    
} else if (grade === 'E') {
    
} else {

}

const grade = 'B'
switch (grade) {
    case 'A':
        console.log('você tirou um A')
        break
    case 'B':
        console.log('você tirou um B')
        break
    case 'C':
        console.log('você tirou um C')
        break
    case 'D':
        console.log('você tirou um D')
        break
    case 'E':
        console.log('você tirou um E')
        break
    default:
        console.log('nota inválida')
} // How to do a lot of "Else If" in a easier way. The "break" is very Important here, as it will stop it when the Desired Result is found. The Default doesn't need a break. The Default only is Executed if your Written thing isn't on the List.
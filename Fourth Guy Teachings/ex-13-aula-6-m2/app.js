const age = 18
if (age > 18) { // "if" is basically a Code that will be Executed if the Requirements are meet. In this case, it didn't work, as age[18] is NOT bigger than 18.
    console.log('você tem mais de 18 anos');
}

const age01 = 20
if (age01 > 18) { // The Code got Executed in here, as age01[20] IS bigger than 18. 
    console.log('você tem mais de 18 anos');
}

const simpsons = ['Marge', 'Homer', 'lisa', 'Bart']
if (simpsons.length >= 3) { // Executed.
    console.log('o array tem bastante personagens');
}
if (simpsons.length >= 5) { // Not Executed.
    console.log('o array tem bastante personagens');
}

const password = 'oi123'

if (password.length >= 12) { // Not Executed, as it is a False [password = 5 Characters].
    console.log('senha muito forte')
} else if (password.length >= 8) { // Not Executed, as it is a False [password = 5 Characters].
    console.log('essa senha tem 8 ou mais caracteres');
} else { // Will only be Executed if the "if" and "else if" is False.
    console.log('a senha deve conter 8 ou mais caracteres');
}

const password01 = 'oi123'

if (password01.length >= 12 && password01.includes('1')) { // The "&&" means that it's giving it more Requirements to be met. In this case, it would be the "1". If it doesn't have that, then it will result in false. If it has 12 Characters, but don't have the "1", then it will result in false. 
    console.log('senha muito forte')
} else if (password01.length >= 12 || password01.includes('1')) { // The "||" is different from the "&&", as here, **it only needs one of them to be True for the Command to be Executed**. So, for Example: "If the whole Password was only "1", then the Code would be Executed, even though the other Requirement needs it to be 12+ Characters".
    console.log('senha muito forte')
} else if (password01.length >= 12 || password01.includes('1') && password01.includes('1')) { // Used this way, it makes it have ONLY 2 Requirements. Because the "||" is separating it, thus making the ">= 12" be one, while the "||, &&" counts as 2. Apparently, BOTH of them needs to be True for it to be Executed.
    console.log('senha muito forte')
} 
const email = 'laracroft@rogermelo.com.br'

const lastIndexOfA = email.lastIndexOf('a') // Will find the last written letter. In this case, the position of the wanted number[last one] would be: 3. The written string was: 'laracroft@rogermelo.com.br' 

const emailSlice = email.slice(4, 9) // Will cut the thing, depending from the Numbers Position that you choose. In this case, "laracroft@rogermelo.com.br" would just be: "croft".

const emailReplace = email.replace('l', 'y') // Replaces the Written thing with another thing. In this case, "laracroft@rogermelo.com.br" would be: "yaracroft@rogermelo.com.br". It's weird that, this method only changed one of them... Also, it can also Replace whole words.

const emailReplace002 = email.replace('lara', 'azulRoxo') 

console.log(lastIndexOfA)

console.log(emailSlice)

console.log(emailSlice, email)

console.log(emailReplace)

console.log(emailReplace002)
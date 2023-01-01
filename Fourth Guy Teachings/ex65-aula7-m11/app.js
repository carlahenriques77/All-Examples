
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    
    if (request.readyState === 4) {
        console.log(request.responseText)
    }
})

request.open('GET', 'linkHere')
request.send()

console.log(request)
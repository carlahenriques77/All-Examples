
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 &&  request.status === 200) {
        console.log(request, request.responseText)
    }
})

request.open('GET', 'linkHere')
request.send()


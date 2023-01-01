
const getTodos = (url, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequestNotOk = request.readyState === 4

        if (isRequestOk) {
            const data = JSON.parse(request.responseText)
            callback(null, request.responseText)
            return
        }
        if (isRequestNotOk) {
            callback('Não foi possivel obter os dados', null)
        }
    })

    request.open('GET', url)
    request.send()
}

const getData = () => {
    return new Promise((resolve, reject) => {
        resolve('Dados aqui')
        // reject('Erro aqui')
    })
}

getData()
    .then(value => console.log(value))
    .catch(error => console.log(error))


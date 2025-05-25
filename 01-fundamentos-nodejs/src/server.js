import http from 'node:http'

/* 
    const server = http.createServer((request, response)

    ou posso usar dessa outra maneira

    const server = http.createServer((req, ou res)

    request (req) = Recebe todas a informações da requisição que esta chegando no servidor.
*/

const server = http.createServer((req, res) => {
    return res.end('Hello World')
})

// porta localhost:3333
server.listen(3333)
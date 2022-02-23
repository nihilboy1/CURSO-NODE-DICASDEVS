const http = require("http")

let users = [
    {
    nome: "samuel",
    idade: 23,
    peso: 85,
    }
]

const gate = 8080

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type":"text/html"}) // Altera os meta-dados da resposta
        res.end("<h1> Página 0 </h1>")
    }

    if (req.url === "/casa") {
        res.writeHead(200, {"Content-Type":"application/json"}) // Altera os meta-dados da resposta
        res.end(JSON.stringify(users))
    }
})

server.listen(gate, () => {
  console.log(`Servidor rodando na porta ${gate}`)
})
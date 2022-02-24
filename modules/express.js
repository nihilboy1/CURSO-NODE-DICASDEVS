const express = require("express")
const User_model = require("../src/models/user.model")
const gate = 8080

const app = express()

app.set("view engine", "ejs") // DECLARA QUE EU QUERO USAR O EJS COMO VIEW ENGINE
app.set("views", "src/views") // INFORMA O LOCAL ONDE ESTÃO MINHAS VIEWS

app.use(express.json()) // MIDDLEWARE QUE DECLARA QUE TODAS AS MINHAS REQUISIÇÕES SERÃO EM .JSON
app.use((request, response, next) => {
    console.log(`Request method: ${request.method}`)
    console.log(`Content type: ${request.headers["content-type"]}`)
    console.log(`Date: ${new Date()}`)
    next()
})


app.get("/views/home", async (request, response) => {
    const users = await User_model.find({})
    response.render("index.ejs", {users})
})


// ENTRA NA BARRA
app.get("/", (request, response) => {
    response.status(200).send("<h1> BARRA </h1>")
})

// ENTRA EM /USERS E LISTA TODOS OS USUÁRIOS
app.get("/users", async (request, response) => {
    try {
        const users = await User_model.find({}) // esse objeto é um filtro para o banco de dados
        response.status(200).json(users)
    }
    catch (error) {
        return response.status(500).send(error.message)
    }
})

// ENTRA EM /USERS/ID E LISTA UM ÚNICO USUÁRIO
app.get("/users/:id", async (request, response) => {
    try {
        const id = request.params.id
        const user = await User_model.findById(id) // esse objeto é um filtro para o banco de dados
        response.status(200).json(user)
    }
    catch (error) {
        return response.status(500).send(error.message)
    }
})

// ENTRA EM USERS E INSERE UM USUÁRIO NOVO
app.post("/users", async (request, response) => {
    try {
        const user = await User_model.create(request.body)
        response.status(201).json(user)
    }
    catch (error) {
        response.status(500).send(error.message)
    }

})

// ENTRA EM USERS/ID E ATUALIZA UM USUÁRIO
app.patch("/users/:id", async (request, response) => {
    try {
        const id = request.params.id
        const user = await User_model.findByIdAndUpdate(id, request.body, {new:true}) // esse new informa que eu quero que o registo que volte pra minha variavel seja o novo, o atualizado pela ação do patch
        response.status(200).json(user)
    }
    catch (error) {
        response.status(500).send(error.message)
    }
})


// ENTRA EM USERS/ID E DELETA UM USUÁRIO
app.delete("/users/:id", async (request, response) => {
    try {
        const id = request.params.id
        const user = await User_model.findByIdAndDelete(id)
        response.status(200).json(user)
    }
    catch (error) {
        response.status(500).send(error.message)
    }
})


app.listen(8080, () => {
    console.log(`Rodando na porta ${gate} com EXPRESS`)
})
const express = require("express")
const User_model = require("../src/models/user.model")
const gate = 8080
let users = [
    {
    nome: "samuel",
    idade: 23,
    peso: 85,
    }
]
const app = express()
app.use(express.json())


app.get("/", (request, response) => {
    request.status(200).send("<h1> BARRA </h1>")
})


app.get("/users", async (request, response) => {
    try {
        const users = await User_model.find({}) // esse objeto é um filtro para o banco de dados
        response.status(200).json(users)
    }
    catch (error) {
        return response.status(500).send(error.message)
    }
})

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


app.post("/users", async (request, response) => {
    try {
        const user = await User_model.create(request.body)
        response.status(201).json(user)
    }
    catch (error) {
        response.status(500).send(error.message)
    }

})


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
const fs = require("fs")
const path = require("path")

/*

// Criar pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if (error) {
        return console.log("Erro: ",error)
    }
    else {
        console.log("Pasta criada com sucesso")
    }
})


// Criar arquivo (a pasta ja precisa estar criada)
fs.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello Node!", (error) => {
    if (error) {
        console.log("Erro: ",error)
    }
    else {
        console.log("Arquivo criado com sucesso")
    } 
})


// Escrever num arquivo existente
fs.appendFile(path.join(__dirname, "/test", "test.txt"), "Hfelslo mundo!", (error) => {
    if (error) {
        console.log("Erro: ",error)
    }
    else {
        console.log("Novo conteudo adicionado no arquivo")
    } 
})



// Ler um arquivo
fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (error, data) => {
    if (error) {
        console.log("Erro: ", error)
    }
    else {
        console.log(data)
    }
})

*/
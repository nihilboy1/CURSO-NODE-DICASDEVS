const mongoose = require("mongoose")

const connect_to_database = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodeytb.muxli.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log("Ocorreu um erro ao conectar no banco de dados! ", error)
        }
        else {
            console.log("Conexão com o banco de dados estabelecida com sucesso!")
        }
    })
}

module.exports = connect_to_database
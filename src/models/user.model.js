const mongoose = require("mongoose")


const user_schema = new mongoose.Schema(
    {
        first_name: {
            type: String, // Informa que o tipo do dado desse input será uma string
            required: true, // Declara que esse dado será obrigatório para a criação do banco

        },
        last_name: {
            type: String,
            required: true, 

        },
        email: {
            type: String,
            required: true,

        },
        password: {
            type: String,
            required: true,
            minlength: 7, // Declara que o numero minimo de caracteres pra esse dado é 7
        },

    }
)

const User_model = mongoose.model("User", user_schema)

module.exports = User_model
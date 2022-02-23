
const dot_env = require("dotenv")
dot_env.config()
const connect_to_database = require("./src/database/connect")
connect_to_database()
require("./modules/express.js")













/*
require("./modules/path.js")
require("./modules/fs.js")
require("./modules/http.js")
*/
/*
const  { Person } = require("./person")
const pessoa = new Person("Samuel")
*/





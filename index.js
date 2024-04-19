import express from "express"
const app = express()

import mongoose from "mongoose"

import session from "express-session"
import Auth from "./middleware/Auth.js"

app.use(session({
    secret: "lojasecret",
    cookie: { maxAge: 3600000 },
    saveUninitialized: false,
    resave: false
}))

import ClientesController from "./controllers/ClientesController.js"
import ProdutosController from "./controllers/ProdutosController.js"
import PedidosController from "./controllers/PedidosController.js"
import UsersController from "./controllers/UsersController.js"

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/sistemaLoja")

app.set("view engine", "ejs")

app.use(express.static('public'))

app.get("/", Auth, (req, res) => {
    res.render("index")
})

app.use("/", ClientesController)
app.use("/", ProdutosController)
app.use("/", PedidosController)
app.use("/", UsersController)

app.listen(8080, erro => {
    if(erro){
        console.log("Ocorreu um erro!")
    } else{
        console.log("Servidor iniciado com sucesso.")
    }
})
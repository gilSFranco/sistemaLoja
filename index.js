import express from "express"
const app = express()

import mongoose from "mongoose"

import ClientesController from "./controllers/ClientesController.js"
import ProdutosController from "./controllers/ProdutosController.js"
import PedidosController from "./controllers/PedidosController.js"

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/sistemaLoja")

app.set("view engine", "ejs")

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index")
})

app.use("/", ClientesController)
app.use("/", ProdutosController)
app.use("/", PedidosController)

app.listen(8080, erro => {
    if(erro){
        console.log("Ocorreu um erro!")
    } else{
        console.log("Servidor iniciado com sucesso.")
    }
})
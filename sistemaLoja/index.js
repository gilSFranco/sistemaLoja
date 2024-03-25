const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/Clientes", (req, res) => {
    const clientes = [
        {nome: "Gilmar Soares", cpf: "436589102-12", endereco: [{
            rua: 'Rua Jose', 
            numero: '60', 
            bairro: 'Vila Mendes', 
            cidade: 'Pariquera-acu'
        }]},
        {nome: "Lucas Silva", cpf: "436589102-13", endereco: [{
            rua: 'Rua Maria',
            numero: '06',
            bairro: 'Vila Jose',
            cidade: 'Cananeia'
        }]},
        {nome: "Luiz Claudio", cpf: "436589102-14", endereco: [{
            rua: 'Rua Sao Matheus',
            numero: '66',
            bairro: 'Vila Mendes',
            cidade: 'Registro'
        }]},
        {nome: "Lauany Soares", cpf: "436589102-15", endereco: [{
            rua: 'Rua Lens',
            numero: '33',
            bairro: 'Vila Vinhas',
            cidade: 'São João Novo'
        }]}
    ]

    res.render("clientes", {
        clientes: clientes
    })
})

app.get("/Produtos", (req, res) => {
    const produtos = [
        {nome: "Notebook Acer Aspire 5", preco: 2899.00, categoria: "Notebook"},
        {nome: "Notebook Asus Vivobook", preco: 2621.00, categoria: "Notebook"},
        {nome: "PC Home Office", preco: 740.00, categoria: "Computador"},
        {nome: "PC Gamer Pichau", preco: 1669.00, categoria: "Computador"}

    ]
    
    res.render("produtos", {
        produtos: produtos
    })
})

app.get("/Pedidos", (req, res) => {
    const pedidos = [
        {numero: 1, valor: 120.00},
        {numero: 2, valor: 240.00},
        {numero: 3, valor: 360.00},
        {numero: 4, valor: 480.00}
    ]

    res.render("pedidos", {
        pedidos: pedidos
    })
})

app.listen(8080, erro => {
    if(erro){
        console.log("Ocorreu um erro!")
    } else{
        console.log("Servidor iniciado com sucesso.")
    }
})
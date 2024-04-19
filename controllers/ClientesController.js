import express from "express"
import ClienteService from "../service/ClienteService.js"
import Auth from "../middleware/Auth.js"
const router = express.Router()

router.get("/clientes", Auth, (req, res) => {
    ClienteService.selectAll().then(cliente => {
        res.render("clientes", {
            cliente: cliente
        })
    })
})

router.post("/clientes/new", Auth, (req, res) => {
    const { nome, cpf, rua, numero, bairro, cidade } = req.body
    ClienteService.Create(nome, cpf, rua, numero, bairro, cidade)

    res.redirect("/clientes")
})

router.get("/clientes/delete/:id", Auth, (req, res) => {
    const id = req.params.id
    ClienteService.Delete(id)

    res.redirect("/clientes")
})

router.get("/clientes/edit/:id", Auth, (req, res) => {
    const id = req.params.id

    ClienteService.selectOne(id).then(cliente => {
        res.render("clienteEdit", {
            cliente: cliente
        })
    })
})

router.post("/clientes/update/:id", Auth, (req, res) => {
    const id = req.params.id
    const { nome, cpf, rua, numero, bairro, cidade } = req.body

    ClienteService.Update(id, nome, cpf, rua, numero, bairro, cidade)

    res.redirect("/clientes")
})

export default router
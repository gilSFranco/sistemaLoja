import express from "express"
const router = express.Router()
import ClienteService from "../service/ClienteService.js"

router.get("/clientes", (req, res) => {
    ClienteService.selectAll().then(cliente => {
        res.render("clientes", {
            clientes: cliente
        })
    })
})

router.post("/clientes/new", (req, res) => {
    const { nome, cpf, rua, numero, bairro, cidade } = req.body
    ClienteService.Create(nome, cpf, rua, numero, bairro, cidade)

    res.redirect('/clientes')
})

router.get("/clientes/delete/:id", (req, res) => {
    const id = req.params.id
    ClienteService.Delete(id)

    res.redirect("/clientes")
})

router.get("/clientes/edit/:id", (req, res) => {
    const id = req.params.id

    ClienteService.selectOne(id).then(cliente => {
        res.render("clienteEdit", {
            cliente: cliente
        })
    })
})

router.post("/clientes/update/:id", (req, res) => {
    const id = req.params.id
    const { nome, cpf, rua, numero, bairro, cidade } = req.body

    ClienteService.Update(id, nome, cpf, rua, numero, bairro, cidade)

    res.redirect("/clientes")
})

export default router
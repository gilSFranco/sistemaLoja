import express from "express"
import PedidoService from "../service/PedidoService.js"
import Auth from "../middleware/Auth.js"
const router = express.Router()

router.get("/pedidos", Auth, (req, res) => {
    PedidoService.selectAll().then(pedido => {
        res.render("pedidos", {
            pedido: pedido
        })
    })
})

router.post("/pedidos/new", Auth, (req, res) => {
    const { numero, valor } = req.body
    PedidoService.Create(numero, valor)

    res.redirect("/pedidos")
})

router.get("/pedidos/delete/:id", Auth, (req, res) => {
    const id = req.params.id
    PedidoService.Delete(id)

    res.redirect("/pedidos")
})

router.get("/pedidos/edit/:id", Auth, (req, res) => {
    const id = req.params.id

    PedidoService.selectOne(id).then(pedido => {
        res.render("pedidoEdit", {
            pedido: pedido
        })
    })
})

router.post("/pedidos/update/:id", Auth, (req, res) => {
    const id = req.params.id
    const { numero, valor } = req.body

    PedidoService.Update(id, numero, valor)

    res.redirect("/pedidos")
})

export default router
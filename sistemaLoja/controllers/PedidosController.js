import express from "express"
const router = express.Router()
import PedidoService from "../service/PedidoService.js"

router.get("/Pedidos", (req, res) => {
    PedidoService.selectAll().then(pedido => {
        res.render("pedidos", {
            pedidos: pedido
        })
    })
})

export default router
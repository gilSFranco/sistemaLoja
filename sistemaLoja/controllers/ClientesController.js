import express from "express"
const router = express.Router()
import ClienteService from "../service/ClienteService.js"

router.get("/Clientes", (req, res) => {
    ClienteService.selectAll().then(cliente => {
        res.render("clientes", {
            clientes: cliente
        })
    })
})

export default router
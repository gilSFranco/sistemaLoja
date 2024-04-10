import express from "express"
const router = express.Router()
import ProdutoService from "../service/ProdutoService.js"

router.get("/Produtos", (req, res) => {
    ProdutoService.selectAll().then(produto => {
        res.render("produtos", {
            produtos: produto
        })
    })
})

export default router
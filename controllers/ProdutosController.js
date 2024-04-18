import express from "express"
import ProdutoService from "../service/ProdutoService.js"
const router = express.Router()

router.get("/produtos", (req, res) => {
    ProdutoService.selectAll().then(produto => {
        res.render("produtos", {
            produto: produto
        })
    })
})

router.post("/produtos/new", (req, res) => {
    const { nome, preco, categoria, imagem } = req.body
    ProdutoService.Create(nome, preco, categoria, imagem)

    res.redirect("/produtos")
})

router.get("/produtos/delete/:id", (req, res) => {
    const id = req.params.id
    ProdutoService.Delete(id)

    res.redirect("/produtos")
})

router.get("/produtos/edit/:id", (req, res) => {
    const id = req.params.id
    
    ProdutoService.selectOne(id).then(produto => {
        res.render("produtoEdit", {
            produto: produto
        })
    })
})

router.post("/produtos/update/:id", (req, res) => {
    const id = req.params.id
    const { nome, preco, categoria, imagem } = req.body

    ProdutoService.Update(id, nome, preco, categoria, imagem)

    res.redirect("/produtos")
})

export default router
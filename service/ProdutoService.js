import mongoose from "mongoose"
import produto from "../models/Produto.js"

const Produto = mongoose.model("Produto", produto)

class ProdutoService{
    selectAll(){
        const produtos = Produto.find()
        return produtos
    }

    selectOne(id){
        const produto = Produto.findOne({ _id: id })
        return produto
    }

    Create(nome, preco, categoria, imagem){
        const novoProduto = new Produto({
            nome: nome,
            preco: preco,
            categoria: categoria,
            imagem: imagem
        })

        novoProduto.save()
    }

    Delete(id){
        Produto.findByIdAndDelete(id).then(() => {
            console.log(`Produto com o id: ${id} foi deletado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }

    Update(id, nome, preco, categoria, imagem){
        Produto.findByIdAndUpdate(id, {
            nome: nome,
            preco: preco,
            categoria: categoria,
            imagem: imagem
        }).then(() => {
            console.log(`Produto com o id: ${id} foi alterado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }
}

export default new ProdutoService()
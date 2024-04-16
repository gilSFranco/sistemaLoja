import mongoose from "mongoose"
import pedido from "../models/Pedido.js"

const Pedido = mongoose.model("Pedido", pedido)

class PedidoService {
    selectAll(){
        const pedidos = Pedido.find()
        return pedidos
    }

    selectOne(id){
        const pedido = Pedido.findOne({ _id: id })
        return pedido
    }

    Create(numero, valor){
        const novoPedido = new Pedido({
            numero: numero,
            valor: valor
        })

        novoPedido.save()
    }

    Delete(id){
        Pedido.findByIdAndDelete(id).then(() => {
            console.log(`Pedido com o id: ${id} foi deletado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }

    Update(id, numero, valor){
        Pedido.findByIdAndUpdate(id, {
            numero: numero,
            valor: valor
        }).then(() => {
            console.log(`Pedido com o id: ${id} foi alterado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }
}

export default new PedidoService()
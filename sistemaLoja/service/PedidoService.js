import mongoose from "mongoose"
import pedido from "../models/Pedido.js"

const Pedido = mongoose.model("Pedido", pedido)

class PedidoService {
    selectAll(){
        const pedidos = Pedido.find()
        return pedidos
    }
}

export default new PedidoService()
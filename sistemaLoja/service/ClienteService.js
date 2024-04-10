import mongoose from "mongoose"
import cliente from "../models/Cliente.js"

const Cliente = mongoose.model("Cliente", cliente)

class ClienteService{
    selectAll(){
        const clientes = Cliente.find()
        return clientes
    }
}

export default new ClienteService()
import mongoose from "mongoose"
import cliente from "../models/Cliente.js"

const Cliente = mongoose.model("Cliente", cliente)

class ClienteService{
    selectAll(){
        const clientes = Cliente.find()
        return clientes
    }
    
    selectOne(id){
        const cliente = Cliente.findOne({ _id: id })
        return cliente
    }

    Create(nome, cpf, rua, numero, bairro, cidade){
        const novoCliente = new Cliente({
            nome: nome,
            cpf: cpf,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade
        })

        novoCliente.save()
    }

    Delete(id){
        Cliente.findByIdAndDelete(id).then(() => {
            console.log(`Cliente com a id: ${id} foi deletado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }

    Update(id, nome, cpf, rua, numero, bairro, cidade){
        Cliente.findByIdAndUpdate(id, {
            nome: nome,
            cpf: cpf,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade
        }).then(() => {
            console.log(`Cliente com a id: ${id} foi alterado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }
}

export default new ClienteService()
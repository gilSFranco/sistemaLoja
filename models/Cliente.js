import mongoose from "mongoose"

const cliente = new mongoose.Schema({
    nome: String,
    cpf: String,
    rua: String,
    numero: Number,
    bairro: String,
    cidade: String
})

export default cliente
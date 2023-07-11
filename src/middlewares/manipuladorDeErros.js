import mongoose from "mongoose"

export default function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: 'Um ou mais dados fornacidos estão incorretos' })
    } else {
        res.status(500).send({ message: 'Erro interno de servidor' })
    }
}
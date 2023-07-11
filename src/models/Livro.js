import mongoose from 'mongoose'

const livroSChema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: [true, 'titulo obrigatório'] },
        autor: { type: String, required: [true, 'autor obrigatório'] },
        editora: { type: String, required: [true, 'editora obrigatório'] },
        numeroPaginas: { type: Number }

    }
)

const livros = mongoose.model('livros', livroSChema)

export default livros;

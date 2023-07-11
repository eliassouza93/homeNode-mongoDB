
import livros from "../models/Livro.js";

class livrosController {

    static listarLivros = async (req, res, next) => {
        try {
            const mostrarLivros = await livros.find();
            res.status(200).send(mostrarLivros)
        } catch (erro) {
            next(erro)
        }
    }
    static localizarLivroPorID = async (req, res, next) => {
        try {
            const id = req.params.id
            const livroLocalizado = await livros.findById(id)
            res.status(200).send(livroLocalizado)
        } catch (erro) {
            next(erro)
        }
    }

    static cadastrarLivro = async (req, res, next) => {
        try {
            let novoLivro = new livros(req.body)
            await novoLivro.save()
            res.status(201).send(novoLivro)

        } catch (erro) {
            next(erro)
        }
    }
    static atualizarLivro = async (req, res, next) => {
        try {
            const id = req.params.id
            await livros.findByIdAndUpdate(id, { $set: req.body })
            res.status(200).send({ message: 'livro atualizado com sucesso' })
        } catch (erro) {
            next(erro)
        }
    }
    static excluirLivro = async (req, res, next) => {
        try {
            const id = req.params.id;
            const livroDeletado = await livros.findByIdAndDelete(id);
            if (!livroDeletado) {
                res.status(404).send({ message: `Livro de Id ${id} não encontrado` });
            } else {
                res.status(200).send({ message: `Livro ${id} removido com sucesso` });
            }
        } catch (erro) {
            next(erro)
        }
    };




}

export default livrosController;


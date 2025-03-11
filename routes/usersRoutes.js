const express = require('express')
const Usuario = require('../models/Usuario')
const router = express.Router()

//Rota para criar um novo usuário
router.post('/', async (req,res) => {
    try{
        const usuario = new Usuario(req.body) // Cria um novo usuário com os dados recebidos
        await usuario.save() //Salva no Mongo
        res.status(201).send(usuario) //Retorna o usuário criado com o Status 201

    } catch (err) {
        res.status(400).send(err)
    }
})
//Rota para obter os usuários
router.get('/', async (req,res) => {
    try{
        const usuarios = await Usuario.find()
        res.status(200).send(usuarios)
    } catch (err){
        res.status(500).send(err)
    }
})
//Rota para obter usuários pelo id
router.get('/:id', async (req,res) => {
    try{
        const usuario = await Usuario.findById(req.params.id)
        if(!usuario){
            return res.send(404).send('Usuário não encontrado!')
        }
        res.send(200).send(usuario)
    } catch (err){
        res.status(500).send(err)
    }
})

//Rota para atualizar um usuário
router.put(':/id', async (req,res) => {
    try{
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true})
        
        if (!usuario){
            return res.status(404).send('Usuário não encontrado!')
        }
        res.status(200).send(usuario)
    } catch (err){
        res.status(400).send(err)
    }
})

router.delete('/:id', async (req,res) => {
    try{
        const usuario = await Usuario.findByIdAndDelete(req.params.id)
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        res.status(200).send('Usuário excluído com sucesso!')
    } catch(err) {
        res.status(500).send(err)
    }
})

module.exports = router


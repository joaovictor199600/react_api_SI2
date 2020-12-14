const Funcionario = require('../models/Funcionarios')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

module.exports = {
  // Lista os Funcionários do mais atual para o mais antigo
  async index(req, res) {
    const { page = 1 } = req.query;
    const funcionario = await Funcionario.paginate({}, { page , limit: 5, sort:{createdAt: -1}});
    return res.json(funcionario)
  },
  
  async listafuncionarios(req, res) {
    const { page = 1 } = req.query;
    const funcionario = await Funcionario.paginate({}, { page , limit: 5, sort:{createdAt: -1}});
    return res.json(funcionario)
  },
  
  async show(req, res) {
    const { id } = req.params;
    const funcionario = await Funcionario.findById(id);
    return res.json(funcionario)
  },

  // gravar os funcionários
  async store(req, res) {
    //console.warn(req.File);
    //const { filename: image} = req.file

    //const [name, ext] = image.split('.')
    //const fileName = `${name}.jpg`

    /*await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70})
      .toFile(
        path.resolve(req.file.destination, 
          'resizes', fileName)
      )

    fs.unlinkSync(req.file.path)*/

    const {nome, funcao, departamento, email, telefone} = req.body;
    
    if(nome.length <= 0 || funcao.length <= 0 || departamento.length <= 0 || email.length <= 0 || telefone < 10){
      return res.status(400).send();
    }
    //console.log(image);
    //req.body.image = fileName;
    const funcionario = await Funcionario.create(req.body)
    return res.json(funcionario)
    //req.io.emit('livro', livro)
  },

  // Exclui o funcionário
  async destroy(req, res) {
    const { id } = req.params
    await Funcionario.findByIdAndRemove(id)
    return res.send()
  },

  // Altera o funcionário
  async update(req, res) {
    const { id } = req.params
    
    const funcionario = await Funcionario.findByIdAndUpdate(id, req.body, { new: true })
    return res.json(funcionario)
  }

}


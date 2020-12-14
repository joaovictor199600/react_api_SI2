const { Router } = require('express')
const multer = require('multer')
const FuncionarioController = require('./controllers/FuncionarioController')
const uploadConfig = require('./config/upload')
const routes = new Router();

const upload = multer(uploadConfig)
routes.post('/', upload.single('image'), FuncionarioController.store)

routes.get('/listafuncionario', FuncionarioController.listafuncionarios)
routes.get('/funcionario', FuncionarioController.index)
routes.get('/listafuncionario/:id', FuncionarioController.show)
routes.put('/funcionario/:id', FuncionarioController.update)
routes.delete('/funcionario/:id', FuncionarioController.destroy)
routes.delete('/funcionario', FuncionarioController.destroy)

module.exports = routes
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Definir as rotas para o CRUD
router.get('/', usuarioController.getUsuarios);          // GET /api/usuarios
router.post('/', usuarioController.criarUsuario);       // POST /api/usuarios
router.put('/:id', usuarioController.atualizarUsuario); // PUT /api/usuarios/:id
router.delete('/:id', usuarioController.deletarUsuario); // DELETE /api/usuarios/:id

module.exports = router;

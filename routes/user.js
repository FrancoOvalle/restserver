const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/user');

const router = Router();

router.get('/', usuariosGet )

// peticion put
router.put('/:id', usuariosPut )

//peticion post
router.post('/', usuariosPost )

//peticion Delete
router.delete('/', usuariosDelete )

module.exports = router;
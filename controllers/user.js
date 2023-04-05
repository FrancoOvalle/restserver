const { response } = require('express')

const usuariosGet = ( req, res = response ) => {

    const { q, nombre, rut = 'S/rut' } = req.query;

    res.json({
        msg: ' llama a Get de la API - desde controllers ',
        q, nombre, rut
    })
}

const usuariosPut = ( req, res = response ) => {
    const id = req.params.id
    res.json({
        msg: ' llama a Put de la API - desde controllers',
        id
    })
}

const usuariosPost = ( req, res = response ) => {

    //const body = req.body;
    const { rut, nombre } = req.body; 
    res.json({
        msg: ' llama a Post de la API - desde controllers',
        rut, nombre
    })
}

const usuariosDelete = ( req, res = response ) => {
    res.json({
        msg: ' llama a Delete de la API - desde controllers'
    })
}

module.exports = {
    usuariosGet, usuariosPut, usuariosPost, usuariosDelete
}
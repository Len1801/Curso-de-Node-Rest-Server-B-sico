const { response } = require('express');

 const usuariosGet = (req,res = response) => {

    const {q, nombre= 'No name', apikey, page = 1, limit} = req.query;
    
    res.json({
        msg: 'get API - ususriosGet',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPut = (req,res = response) => {

    const id = req.params.id;

        res.status(500).json({
            msg: 'put API - usuariosPut',
            id
        });
    }

const usuariosPost = (req,res = response) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - usuariosPost',
        nombre, 
        edad
    });
}

const usuariosPatch = (req,res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuraiosDelete =  (req,res) => {
    res.json({
        msg: 'delete API - usuariosDeñete'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuraiosDelete

}
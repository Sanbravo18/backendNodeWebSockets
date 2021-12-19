const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function(req, res) {
    console.log(req.headers);
    res.header({
        "custom-headers": "nuestro valor personalizado "
    })
    //res.send('Lista de mensaje');
    response.success(req, res, 'Lista de mensaje', 200);
})

router.post('/', function(req, res) {
    console.log(req.query);
    if (req.query.error == "ok"){
        response.error(req, res, 'Error inesperado', 500, 'es solo una simulación de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
})

module.exports = router;
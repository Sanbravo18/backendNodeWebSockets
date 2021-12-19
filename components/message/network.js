const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
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
    controller.addMessage(req.body.user, req.body.message)
     .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    }
    ).catch(e => {
        response.error(req, res, 'Error al crear el mensaje', 400, 'Error en el controlador');
    })
})

module.exports = router;
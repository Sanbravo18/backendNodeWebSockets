const express = require('express');
const bodyParser = require('body-parser'); 
const response = require('./network/response');

const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

router.get('/message', function(req, res) {
    console.log(req.headers);
    res.header({
        "custom-headers": "nuestro valor personalizado "
    })
    //res.send('Lista de mensaje');
    response.success(req, res, 'Lista de mensaje', 200);
})

router.post('/message', function(req, res) {
    console.log(req.query);
    if (req.query.error == "ok"){
        response.error(req, res, 'Error inesperado', 500, 'es solo una simulación de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
})

app.use('/app',express.static('public'));

app.listen(3000);
console.log('Server running on port 3000');
const express = require('express');
const bodyParser = require('body-parser'); 

const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

router.get('/message', function(req, res) {
    res.send('Lista de mensaje');
})

router.delete('/message', function(req, res) {
    console.log(req.query);
    console.log(req.body);
    res.send('mensaje '+ req.body.text +' añadido');
})

// app.use('/', function (req, res) {
//     res.send('Oli :D');
// })

app.listen(3000);
console.log('Server running on port 3000');
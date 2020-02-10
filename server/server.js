require('./config/config')
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())


app.get('/usuario', (req, res)=>{
    res.end('Get usuario');
})

app.post('/usuario', (req,res)=>{
    let body = req.body;
    if (body.nombre === undefined){
        res.status(400).json({
            "error": true,
            "resp": "El nombre es requerido"
        })

        return;
    }
    res.json({
        body
    });
})

app.put('/usuario/:id', (req,res)=>{
    let id = req.params.id
    res.json({
        id
    });
})

app.delete('/usuario/:id', (req, res) => {
    res.end('Delete Usuario');
})

app.listen(process.env.PORT , ()=>{
    console.log('Servidor en el puerto ', process.env.PORT);
})
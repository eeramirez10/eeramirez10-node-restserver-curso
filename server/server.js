require('./config/config')

const express = require('express');
const mongoose = require('mongoose');


const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//Configuracion global de rutas
app.use(require('./routes/index'))

const conexion = async (db)=>{
    await mongoose.connect( `${db}` , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

}

conexion(process.env.URLDB)
        .then(resp => console.log('Base de datos ONLINE'))
        .catch( err => console.log('Ocurrio un error',err))



app.listen(process.env.PORT , ()=>{
    console.log('Servidor en el puerto ', process.env.PORT);
})
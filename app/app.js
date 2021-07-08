const express = require('express');
const rutasVinos=require('./rutas/rutasVino');


const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/vinos',rutasVinos);


module.exports = app;
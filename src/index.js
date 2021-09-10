const express = require('express'),
path = require('path'),
morgan = require('morgan'),
mysql = require('mysql'),
myConnection = require('express-myconnection');

const app = express();

// IMPORTAR LAS RUTAS
const RutasPersona = require('./rutas/index');

// CONFIGURACION
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs'); // MOTOR DE PLANTILLAS

//ACCESO middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'educate'
}, 'single'));

app.use(express.urlencoded({extended: false})); // para llamar los datos de los formularios
// RUTA 
app.use('/', RutasPersona);

app.use(express.static(path.join(__dirname, 'public')));


// EJECUTE EL SERVIDOR
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

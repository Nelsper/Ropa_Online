
//Inicializando variable express
const express = require ('express')
const app = express();
const port = 3001;
const mongoose = require('mongoose') //Variable Mongoose

//Importando modelo User
const User = require('./models/UserModel')

//Configuración ParserBody
app.use(express.urlencoded( { extended: true } ))
app.use(express.json())

//const para crear las rutas API Rest
const router = express.Router();

//Conexion a la Base de Datos
const { urlDataBase } = require('./db/dataConnection')
mongoose.connect(urlDataBase);

//End Point de prueba
router.get('/', (req, res) =>{
    res.send('<h1>Hola Mundo</h1>')
})

//Operaciones CRUD Básicas de una BD------
//-CREATE-//
router.post('/createUser', (req, res) => {
    const {body} = req
    const newUser = new User({
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        username: body.username,
        password: body.password
    })
    //Instrucción para guardar el usuario en la BD
    newUser.save((err, success) => {
        if(err){
            res.send('Error del Servidor')
        }
        if(!success){
            res.send('Error al guardar el archivo')
        }else{
            res.status(200).send({msg: 'Usuario Creado con Exito', user: newUser})
        }
    });
})
//-READ-//
//-UPDATE-//
//-DELETE-//

//Declaramos el uso de router con la const app
app.use("/api/v1", router)

app.listen(port, () => {
    console.log('¡¡Hola Server!!');
    console.log(`Server funcionando en el puerto ${port}`);
})


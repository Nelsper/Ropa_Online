
//Inicializando variable express
const express = require('express')
const app = express();
const port = 3001;
const mongoose = require('mongoose') //Variable Mongoose

//Importando modelo User
// const User = require('./models/UserModel')

//Configuración ParserBody
app.use(express.urlencoded( { extended:true } ))
app.use(express.json());

//Rutas de las API Rest
const router = require('./routes/routes')

//Conexion a la Base de Datos
const {urlDataBase} = require('./db/dataConnection')
//La conexion es una promesa
mongoose.connect(urlDataBase)
 .then(() => console.log('Conectado a MongoDB'))
 .catch((err) => console.log(`Error de MongoDB: ${err}`))

//Declaramos el uso de router con la const app
app.use("/api/v2", router)

app.listen(port, () => {
    console.log('¡¡Hola Server!!');
    console.log(`Server funcionando en el puerto ${port}`);
})


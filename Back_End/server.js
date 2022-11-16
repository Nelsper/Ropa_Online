
//Inicializando variable express
const express = require('express')
const app = express();
const port = 3001;
const mongoose = require('mongoose') //Variable Mongoose

//Importando modelo User
const User = require('./models/UserModel')

//Configuración ParserBody
app.use(express.urlencoded( { extended:true } ))
app.use(express.json());

//const para crear las rutas API Rest
const router = express.Router();

//Conexion a la Base de Datos
const {urlDataBase} = require('./db/dataConnection')
mongoose.connect(urlDataBase);

//End Point de prueba
router.get("/", (req, res) =>{
    res.send('<h1>Hola Mundo</h1>')
})

//Operaciones CRUD Básicas de una BD------
//-CREATE-//
router.post('/createUser', (req, res) => { 
    const {body} = req
    const newUser = new User({
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email.toLowerCase(),
        username: body.username,
        password: body.password
    })
    //Antes de guardar el usuario se valida si existe
    //Opción 1: Usar findOne con el callback como parametro
    User.findOne({ email: newUser.email }, (err, userFinded) => {
        if(err){
            res.status(500).send({msg: 'Error de Servidor'})
        }
        if(userFinded){
            res.send({msg:'El Usuario Ya Existe'})
        }else{
            newUser.save( (err, success) => {
                if(err){
                    res.send('Error de Servidor')
                }
                if(!success){
                    res.send('Error al guardar el archivo')
                }else{
                    res.status(200).send({message:'Usuario Creado con Exito'})
                }
            });
        }
    })
})

//-READ-//
router.get('/getAllUsers', (req, res) => { 
    User.find({ }, (err, result) => {
        if(err){
            res.send({msg: 'Error del Servidor' + err})
        }
        if(result){
            res.status(200).send({ users: result})
        }
    })
})

//-UPDATE-//
router.put('/updateUser/:id', (req, res) => {
    const idToUpdate = req.params.id;
    const {body} = req;
    
    const userToEdit = {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email.toLowerCase(),
    }
    User.findOne({email: userToEdit.email}, (err, emailFinded) => {
        if(emailFinded){
            res.send({msg: 'Ya existe un usuario con  este email'})
        }else{
            User.findByIdAndUpdate( idToUpdate, userToEdit, {returnDocument: 'after'},(err,userUpdated) => {
                if(userUpdated){
                    res.send({msg: 'Usuario Actualizado', user: userUpdated})
                }else{
                    res.status(404).send({msg: 'El Usuario No Existe'})
                }
                if(err){
                    res.status(500).send({msg: 'Error del Servidor'})
                }
            })
        }
    })
})

//-DELETE-//
router.delete('/deleteUser/:id', (req, res) => {
    const idToDelete = req.params.id

    User.findOneAndRemove({_id: idToDelete}, (err, userDeleted) => {
        //if(err) return 'Error al Eliminar el Usuario'
        if(userDeleted){
            res.status(200).send({msg: 'Usuario Eliminado', user: userDeleted})
        }else{
            res.send({msg: 'El Usuario No Existe', error: err.msg})
        }
    })
})

//Declaramos el uso de router con la const app
app.use("/api/v2", router)

app.listen(port, () => {
    console.log('¡¡Hola Server!!');
    console.log(`Server funcionando en el puerto ${port}`);
})


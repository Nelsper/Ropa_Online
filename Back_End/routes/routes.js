const express = require('express');
const { 
    createUser, 
    readUsers, 
    updateUser, 
    deleteUser,
    loginUser } = require('../controllers/UserControllers');

//const para crear las rutas API Rest
const router = express.Router();

//End Point de prueba
router.get("/", (req, res) =>{
    res.send('<h1>Hola Mundo</h1>')
})



//Operaciones CRUD Básicas de una BD------
router.post('/createUser', createUser)
router.get('/getAllUsers', readUsers)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

//Logear usuario
router.post('/log-in', loginUser) //ToDo...

//Exportar a router
module.exports = router;
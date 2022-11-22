const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const salt = "MisionTic2022"; //Nivel más alto de seguridad

//Función para crear un Usuario
const createUser = (req, res) => {
  const { body } = req;
  const newUser = new User({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email.toLowerCase(),
    username: body.username,
    password: body.password,
  });
  //Antes de guardar el usuario se valida si existe
  User.findOne({ email: newUser.email }, (err, userFinded) => {
    if (err) {
      res.status(500).send({ msg: "Error de Servidor" });
    } else if (userFinded) {
      res.send({ msg: "El Usuario Ya Existe en la BD", status: 403 });
    } else {
      //Encriptamos el Password
      const saltRouns = 10;
      const password = newUser.password + salt; // Nivel de segurida mass alto
      bcrypt.hash(password, saltRouns, (err, hash) => {
        if (err) {
          res.send({ mas: "Error del Servidor" + err });
        } else if (hash) {
          newUser.password = hash;
          newUser
            .save()
            .then(() =>
              res.status(200).send({ msg: "Usuario Creado con Exito", status:200 })
            )
            .catch((err) => res.send({ msg: err }));
        } else {
          res.send({ msg: "Error al Encriptar el Usuario" });
        }
      });
    }
  });
};

//Función para Leer Usuarios
const readUsers = (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.send({ msg: "Error del Servidor" + err });
    }
    if (result) {
      res.status(200).send({ users: result });
    }
  });
};

//Función para actualizar Usuario
const updateUser = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;

  const userToEdit = {
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email.toLowerCase(),
    username: body.username,
    password: body.password,
  };
  User.findOne({ email: userToEdit.email }, (err, userFinded) => {
    if (err) {
      res.status(500).send({ msg: "Error del Servidor" });
    } else if (userFinded) {
      if (userFinded.id !== idToUpdate) {
        res.send({ msg: "Ya existe un usuario con este email", user: userFinded });
      } else {
        userIsUpdate(idToUpdate, userToEdit, res)
      }
    } else {
        userIsUpdate(idToUpdate, userToEdit, res)
    }
  });
};

//Función para eliminar un Usuario
const deleteUser = (req, res) => {
  const idToDelete = req.params.id;

  User.findOneAndRemove({ _id: idToDelete }, (err, userDeleted) => {
    if (userDeleted) {
      res.status(200).send({ msg: "Usuario Eliminado", user: userDeleted });
    } else {
      res.send({ msg: "El Usuario No Existe", error: err.msg });
    }
  });
};

//Funcion logear el usuario
const loginUser = (req, res) => {
  res.send({ msg: "User Login On" });
};

//Funcion para guardar el usuario en el Endpoint
const userIsUpdate = (id, update, res) => {
  User.findByIdAndUpdate(id, update, { new: true },(err, userUpdated) => {
      if (userUpdated) {
        res.send({ msg: "Usuario Actualizado", user: userUpdated });
      }else if(!userUpdated){
        res.status(404).send({ msg: "El Usuario No Existe" });
      }else{
        res.status(500).send({msg: 'Error del Servidor: ' + err}) 
      }
    });
}

module.exports = {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  loginUser,
};

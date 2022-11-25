import { useState } from "react";
import { singUpUser } from "../../api/userApi";
import InputRegister from "./InputRegister";
import Swal from 'sweetalert2'



export const RegisterForm = () => {
 
  //Declaramos un useState general para todos los inputs
  const [inputsRegister, setInputsRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  });

  const {firstname, lastname, email, username, password} = inputsRegister
  
  //Funcion manejadora para todos los inputs
  const handleInputs = (e) => {
    setInputsRegister( {...inputsRegister, [e.target.name]: e.target.value} )
  }
  
  //Funcion Manejadora del boton submit
  const handleFormSubmit = async (e) => {
    e.preventDefault() //Desactiva la recarga del formulario

    //ToDo... Validación del formulario
    if(!firstname || !lastname || !email || !username || !password){
      Swal.fire(
        'Error',
        'All inputs are required',
        'error'
      )
    }else{
      const result = await singUpUser(inputsRegister)
      Swal.fire(
        'Success',
        'All inputs are required',
        'success'
      ).then((result) => {
        if(result.isConfirmed){
          window.location.href = '/'
        }
      })
      if(result.status === 200){
        setInputsRegister({
          firstname: '',
          lastname: '',
          email: '',
          username: '',
          password: ''
        })
      }else{
        alert(result.msg)
      }
    }
  };

  return (
    <>
      {/* Inicio del elemento card */}
      <div className="card input-card">

        {/* Inicio Formulario */}
        <form onSubmit={ handleFormSubmit }>
          <div className="mb-3">
            <center>
              <img src="images/logo_01.png" alt="" width={"100"} style= {{paddingBlockEnd: '20px'}}/>
            </center>

            <label htmlFor="" className="form-label">
              ACCOUNT
            </label>
            <label htmlFor="" className="form-label" style= {{paddingBlockEnd: '20px'}}>
              Personal Information
            </label>

                <InputRegister title='First Name' type='text' name='firstname' value={firstname} handle={handleInputs}/>
                <InputRegister title='Last Name'type='text' name='lastname'  value={lastname} handle={handleInputs}/>
                <InputRegister title='Email'type='text' name='email'  value={email.toLowerCase()} handle={handleInputs}/>
                <InputRegister title='UserName'type='text' name='username'  value={username} handle={handleInputs}/>
                <InputRegister title='Password'type='text' name='password'  value={password} handle={handleInputs}/>

            {/* Boton registro */}
            <center>
              <button
                type="submit"
                className="btn btn-outline-primary"
                style={{ margin: "20px" }}
              >
                Register
              </button>
            </center>
          </div>
        </form>
        {/* Fin Formulario */}
      </div>
    </>
  );
};



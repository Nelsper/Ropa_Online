import { useState } from "react";
import InputRegister from "./InputRegister";

const RegisterForm = () => {
 
  //Declaramos un useState general para todos los inputs
  const [inputsRegister, setInputsRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  });

  //Funcion manejadora para todos los inputs
  const handleInputs = (e) => {
    setInputsRegister( {...inputsRegister, [e.target.name]: e.target.value} )
    console.log(inputsRegister);
  }

  //Funcion Manejadora del boton submit
  const handleFormSubmit = () => {
    alert(JSON.stringify(inputsRegister));
    //Todo: Envio de toda la información al Server
  };

  return (
    <>
      {/* Inicio del elemento card */}
      <div className="card input-card">

        {/* Inicio Formulario */}
        <form action="" onSubmit={ handleFormSubmit }>
          <div className="mb-3">
            <center>
              <img src="images/logo_01.png" alt="" width={"100"} />
            </center>

            <label htmlFor="" className="form-label">
              ACCOUNT
            </label>
            <label htmlFor="" className="form-label">
              Personal Information
            </label>

                <InputRegister title='First Name' type='text' name='firstname' value={inputsRegister.firstname} handle={handleInputs}/>
                <InputRegister title='Last Name'type='text' name='lastname'  value={inputsRegister.lastname} handle={handleInputs}/>
                <InputRegister title='Email'type='text' name='email'  value={inputsRegister.email} handle={handleInputs}/>
                <InputRegister title='UserName'type='text' name='username'  value={inputsRegister.username} handle={handleInputs}/>
                <InputRegister title='Password'type='text' name='password'  value={inputsRegister.password} handle={handleInputs}/>

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

export default RegisterForm;

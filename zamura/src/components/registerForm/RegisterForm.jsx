
import { useState } from 'react'

const RegisterForm = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstName = (e) => {
        setFirstName( e.target.value)
        console.log(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName( e.target.value)
        console.log(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail( e.target.value)
        console.log(e.target.value);
    }
    const handleUsername = (e) => {
        setUsername( e.target.value)
        console.log(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword( e.target.value)
        console.log(e.target.value);
    }

  return (
    <>
        <div className='card input-card'>
            <div className='mb-3'>
                
                <center><img src="images/logo_01.png" alt="" width={'100'}/></center>
                
                <label htmlFor="" className='form-label'>
                ACCOUNT
                </label>
                <label htmlFor="" className='form-label'>
                    Personal Information
                </label>

                <input
                type = "text"
                className='form-control'
                id="firstname"
                name = "firstname"
                placeholder='Type your Firstname'
                value = {firstname}
                onChange = { handleFirstName}/>

                <input
                type = "text"
                className='form-control'
                id="lastname"
                name = "lastname"
                placeholder='Type your Lastname'
                value = {lastname}
                onChange = { handleLastName}/>
                
                <input
                type = "text"
                className='form-control'
                id="email"
                name = "email"
                placeholder='Type your Email'
                value = {email}
                onChange = { handleEmail}/>

                <input
                type = "text"
                className='form-control'
                id="username"
                name = "username"
                placeholder='Type your Username'
                value = {username}
                onChange = { handleUsername }/>

                <input
                type = "text"
                className='form-control'
                id="password"
                name = "password"
                placeholder='Type your Password'
                value = {password}
                onChange = { handlePassword}/>

                {/* Boton registro */}
                <center><button className="btn btn-outline-primary" style={{ margin: '20px'}}>Register</button></center>

            </div>
        </div> 
    </>
  )
}

export default RegisterForm
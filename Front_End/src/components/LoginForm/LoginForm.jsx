import React, { useState } from "react";
import Swal from "sweetalert2";

export const LoginForm = () => {
  const [inputs, setinputs] = useState({
    email: '',
    password: ''
  })
  const {email, password} = inputs

  const handleIputs = (e) => {
    const {target} = e;
    setinputs({...inputs, [target.name]: target.value})
    console.log(inputs);
  }

  

  const handleLogin = (e) =>{
    e.preventDefault()
    if(!email || !password){
      Swal.fire(
        'Error',
        'All inputs are required',
        'error'
      )
    }
  }
  return (
    <>
      <div className="card input-card">
        <div className="form-label">
          <form action="" onSubmit={ handleLogin }>
            <div className="mb-3">
            <center>
              <img src="images/logo_01.png" alt="" width={"100"} style= {{paddingBlockEnd: '20px'}}/>
            </center>
            <h1 className="test">LOGIN</h1>
              <label htmlFor="exampleInputEmail1" className="form-label">
                <i className="pi pi-lock"></i>
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                placeholder="Type your email"
                value={inputs.email}
                onChange={ handleIputs }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                placeholder="Type your password"
                value={inputs.password}
                onChange={handleIputs}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

import React from "react";

export const LoginForm = () => {
  return (
    <>
      <div className="card input-card">
        <div className="form-label">
          <form>
            <div className="mb-3">
            <center>
              <img src="images/logo_01.png" alt="" width={"100"} />
            </center>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name=""
                onChange={""}
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

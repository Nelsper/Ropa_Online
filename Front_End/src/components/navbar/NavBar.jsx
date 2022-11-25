import { Link } from "react-router-dom";
import NavItems from "./NavItems";

const NavBar = () => {
  //Array Items
  const navItems = [
    { ruta: "/", icon: "bi bi-house", title: "Home" },
    { ruta: "/Women", title: "Women" },
    { ruta: "/Men", title: "Men" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <NavItems navItems={navItems} />
          </ul>
        </div>

        <div className="container-fluid" style={{ justifyContent: "end" }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/Register"}>
                <i
                  className="bi bi-box-arrow-right"
                  style={{ margin: "5px" }}
                />
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/Login"}>
                <i className="bi bi-person" style={{ margin: "5px" }} />
                Login
              </Link>
            </li>

          </ul>
        </div>

         <div className="logo position-absolute top-50 start-50 translate-middle ">
            <img src="images/logo_white_02.png" alt="" width={"100px"}/>
         </div> 

      </nav>
    </>
  );
};
export default NavBar;

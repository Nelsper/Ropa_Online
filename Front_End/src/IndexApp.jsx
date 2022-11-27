import NavBar from "./components/navbar/NavBar";
import { Outlet } from "react-router-dom";


const IndexApp = () => {
  

  return (
    <>
      <header>

        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
        <div className="fixed-top-2">
            
            <div className="bg-7">
                
                <h1 className="ofer efect">¡SALE! 70% 60% 50% 40%</h1>
            </div>
        </div>
    </>
  );
};
export default IndexApp;

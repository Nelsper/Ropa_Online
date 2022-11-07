import NavBar from "./components/navbar/NavBar";
import { Outlet } from "react-router-dom";


const IndexApp = () => {
    const oferta = "REBAJAS ¡Hasta el 50%!"

    return(
        <>
            <header>
                <h1 className="ofer">{oferta}</h1>
                <NavBar/>
            </header>
            <main>
                <Outlet/>
            </main>
            
        
        </>
    );
};
export default IndexApp
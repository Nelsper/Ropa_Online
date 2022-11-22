
import {Route,
    createBrowserRouter,
    createRoutesFromElements} 

  from "react-router-dom";
  import IndexApp from "../IndexApp";
  import Home from "../Home";
  
  import { LoginForm, Men, RegisterForm, Women } from "../components";
  

export const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<IndexApp />}>
        <Route index element={<Home />} />,
        <Route path="/Women" element={<Women />} />,
        <Route path="/Men" element={<Men />} />,
        <Route path="/Register" element={<RegisterForm />} />,
        <Route path="/Login" element={<LoginForm />} />,
      </Route>
    ])
  );
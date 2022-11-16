
import {Route,
    createBrowserRouter,
    createRoutesFromElements} 

  from "react-router-dom";
  import IndexApp from "../IndexApp";
  import Women from "../components/women/Women";
  import Men from "../components/men/Men";
  import Home from "../Home";
  import RegisterForm from "../components/registerForm/RegisterForm"

export const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<IndexApp />}>
        <Route index element={<Home />} />,
        <Route path="/Women" element={<Women />} />,
        <Route path="/Men" element={<Men />} />,
        <Route path="/Register" element={<RegisterForm />} />
      </Route>
    ])
  );
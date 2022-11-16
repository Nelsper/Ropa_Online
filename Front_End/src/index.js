import ReactDOM from "react-dom/client";
import "./IndexApp.css";

import {RouterProvider} 
from "react-router-dom";
import React from "react";
import { router } from "./routes/router";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

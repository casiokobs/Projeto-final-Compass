import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";

const Router = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}  />
                <Route path="/cadastro" element={<Register />}  />
                
            </Routes>
       </BrowserRouter>
   )
}

export default Router;
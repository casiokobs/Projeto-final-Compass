import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home/index";
import Login from "./pages/login/index";

const Router = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}  />
            </Routes>
       </BrowserRouter>
   )
}

export default Router;
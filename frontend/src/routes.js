import React from "react";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./welcomePage";
import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";
import Login from "./login";
import SignUp from "./signup";

const Router = () => {
   return(
       <Routes>
            <Route element = { <WelcomePage /> }  path="/" exact />
            <Route element = { <Login /> }  path="/login" exact />
            <Route element = { <SignUp /> }  path="/signup" exact />
            <Route element = { <Home /> }  path="/" exact />
            <Route element = { <Home /> }  path="/home" exact />
            <Route element = { <Sobre /> }  path="/sobre" />
            <Route element = { <Usuario /> }  path="/usuario" />
       </Routes>
   )
}

export default Router;
import React from "react";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/welcomePage/index";
import Home from "./pages/Home/index";
import Sobre from "./Sobre";
import Usuario from "./Usuario";
import Login from "./pages/login/index";
import SignUp from "./pages/signup/index";
import AdditionalInfo from "./pages/additionalInfo/index";

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
            <Route element = { <AdditionalInfo /> }  path="/additionalInfo" />
       </Routes>
   )
}

export default Router;
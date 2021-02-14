import React from "react";
import {BrowserRouter,Route} from "react-router-dom"
import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp";
import Topic from "../Topic/Topic";

export default function Layout(){
    return (

    <BrowserRouter>
        {/* <Route render={() =><h1>Hello</h1>} /> */}
        
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/Topic" exact component={Topic}></Route>
        <Route path="/" exact render={() =><h1>Hello</h1>} />
    </BrowserRouter>
    )
}
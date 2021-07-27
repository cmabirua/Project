import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import SignUp from "../SignUp/SignUp";
import Topic from "../Topic/Topic";
import TopicContent from "../TopicContent/TopicContent";
import {Subscribe} from "unstated";
import Data from "../../Container/Data";
import CTopic from "../Company/Topic/Topic"
import Complier from "../Complier/Complier";
import About from "../About/About";
export default function Layout() {
  return (
    <BrowserRouter>
      {/* <Route path="/topic/:id" exact component={TopicContent} />  */}
      <Route
        path="/login"
        exact
        component={() => (
          <Subscribe to={[Data]}>{(data) => <Login check={data} />}</Subscribe>
        )}
      ></Route>
      <Route
        path="/signup"
        component={() => (
          <Subscribe to={[Data]}>{(data) => <SignUp check={data} />}</Subscribe>
        )}
      ></Route>
      {/* <Route
            path="/Topic"

            component={() => (
              <Subscribe to={[Data]}>
                {(data) => <Topic check={data} />}
              </Subscribe>
            )}
          ></Route> */}
      <Route
        path="/"
        exact
        component={() => (
          <Subscribe to={[Data]}>{(data) => <Main check={data} />}</Subscribe>
        )}
      ></Route>
      <Route path="/company/:id" component={CTopic}></Route>
      <Route path="/solve/:id" component={Complier}></Route>
      <Route path="/topic/:id" component={TopicContent}></Route>
      <Route path="/about" component={About}></Route>
      {/* <Route path="/complier">
        <Complier></Complier>{" "}
      </Route> */}

      {/* <Route path="/login" exact component={Login}></Route>
      <Route path="/signup" exact component={SignUp}></Route>
      <Route path="/Topic" exact component={Topic}></Route>
      <Route path="/" exact component={Main} />*/}
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import SignUp from "../SignUp/SignUp";
import Topic from "../Topic/Topic";
import TopicContent from "../TopicContent/TopicContent";

export default function Layout() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/signup" exact component={SignUp}></Route>
      <Route path="/Topic" exact component={Topic}></Route>
      <Route path="/" exact component={Main} />
      <Route path="/:id" exact component={TopicContent} />
    </BrowserRouter>
  );
}

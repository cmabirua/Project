import React from "react";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";
import MidContent from "../MidContent/MidContent";
import Topic from "../Topic/Topic";
export default function Main() {
  return (
    <>
      <MainContent></MainContent>
      <Topic></Topic>
     
    <hr style={{backgroundColor:"#73def9" }}/>
      <MidContent></MidContent>
      {/* <hr style={{backgroundColor:"#73def9" }}/> */}
      <Footer></Footer>
    </>
  );
}

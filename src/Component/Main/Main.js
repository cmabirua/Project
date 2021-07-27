import React from "react";
import Company from "../Company/Company";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";
import MidContent from "../MidContent/MidContent";
import Topic from "../Topic/Topic";
export default function Main(props) {
  return (
    <>
      <MainContent data={props}></MainContent>
      <Topic></Topic>
      <Company></Company>
    <hr style={{backgroundColor:"#73def9" }}/>
      <MidContent></MidContent>
      {/* <hr style={{backgroundColor:"#73def9" }}/> */}
      <Footer></Footer>
    </>
  );
}

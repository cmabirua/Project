import React, { useState } from "react"
import Question from "../Question/Question";
import Styles from "./Topic.module.css";
import Card from "../Topic/Card/Card";
export default function Topic(props){
    var mapp = {Amazon:0,MicroSoft:1,Google:2,FacaBook:3,Directi:4,GoldmanSachs:5,Netflix:6,Uber:7};
    const [ques,setQues] = useState(false);
    if(!ques){
        setQues(Question(mapp[props.match.params.id]));
    }
    console.log(ques);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className={`col-lg-12`}>
              <div className={"row"}>
                <div className={`col-lg-8 col-sm-12 ${Styles.topic}`}>
                  {props.match.params.id}
                </div>
                <div className={`col-lg-4 col-sm-12 ${Styles.data}`}>
                  Total Qns. {!ques ? 0 : ques.length}
                </div>
              </div>
            </div>
            {!ques
              ? ""
              : ques.map((d) => <Card name={d.Problem} link={d.URL} />)}
          </div>
        </div>
        {/* <Footer></Footer> */}
      </>
    );
} 
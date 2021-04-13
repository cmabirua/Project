import React from "react"
import Styles from "./Card.module.css";
export default function Card(props){
    return(
        
        <div className={`col-lg-12`}>
        <div className="row">

            <div className={`col-lg-8 ${Styles.qbox}`}>
                <p className={`${Styles.prb}`}>
                    {props.name}
                </p>
            </div>
            <div className={`col-lg-4 ${Styles.btn}`}>
                <a href={props.link} >Solve</a>
            </div>
        </div>
        </div>

        
    )
}
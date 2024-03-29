import React from "react"
import { Link } from "react-router-dom";
import Styles from "./Card.module.css";
export default function Card(props){
    return (
      <div className={`col-lg-12`}>
        <div className="row">
          <div className={`col-lg-8 ${Styles.qbox}`}>
            <p className={`${Styles.prb}`}>{props.name}</p>
          </div>
          <div className={`col-lg-4 ${Styles.btn}`}>
            {props.done && <Link to={"/solve/" + props.link}>Solve</Link>}
            {!props.done && <a href = {props.link}>Solve</a>}
          </div>
        </div>
      </div>
    );
}
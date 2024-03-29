import React, {} from "react";
import Styles from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div>
      <div className={`${Styles.card}`}>
        <div className={`${Styles.wave} ${Styles.one}`}></div>
        <div className={`${Styles.wave} ${Styles.two}`}></div>
        <div className={`${Styles.wave} ${Styles.three}`}></div>
        <div className={Styles.title}>
          <Link
            to={"/topic/" + props.Topic}
            style={{ color: "white", textDecoration: "none" }}
          >
            {props.Topic}
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

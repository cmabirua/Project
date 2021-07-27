import React from "react";
import Styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Amazon from "../../../Assets/Amazon.png";
export default function Card(props) {
  return (
    <div className={Styles.card}>
      <div className={Styles.img}>
        <img src={props.img} />
      </div>
      <div className={Styles.title}>
          <Link
            to={"/company/" + props.Topic}
            style={{ textDecoration: "none" }}
          >
            {props.Topic}
          </Link>
      </div>
    </div>
    // <div className={`col-lg-3 col-md-4 ${Styles.content}`}>
    // <div className = {`${Styles.card}`}>

    // </div>
    //   {/* <div className={`${Styles.card}`}>
    //     <div className={Styles.img}>
    //       <img src={props.img} />
    //     </div>
    //     <div className={Styles.title}>
    //       <a>
    //         <Link
    //           to={"/company/" + props.Topic}
    //           style={{ textDecoration: "none" }}
    //         >
    //           {props.Topic}
    //         </Link>
    //       </a>{" "}
    //     </div>
    //   </div> */}
    // </div>
  );
}

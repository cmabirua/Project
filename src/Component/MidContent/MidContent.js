import React from "react";
import Styles from "./MidContent.module.css";

export default function MidContent() {
  return (
    <div className={`row ${Styles.middle}`}>
      <div className={`col-lg-4 justify-content-center`}>
        <div className={`${Styles.Card}`}>
          <a className={`${Styles.icon}`}>
            <i className={`fas fa-database`}></i>
          </a>
          <h3 className={Styles.head}>Data Structures Courses</h3>
          <p className={Styles.content}>
            It is very important for Coding Interview and help to improve your
            coding
          </p>
        </div>
      </div>
      <div className={`col-lg-4 justify-content-center`}>
        <div className={`${Styles.Card}`}>
          <a className={`${Styles.icon}`}>
            <i className={`fas fa-clock`}></i>
          </a>
          <h3 className={Styles.head}>Time and Space Complexity</h3>
          <p className={Styles.content}>
            We discuss the time and space complexity of every question.
          </p>
        </div>
      </div>
      <div className={`col-lg-4 justify-content-center`}>
        <div className={`${Styles.Card}`}>
          <a className={`${Styles.icon}`}>
            <i className={`fas fa-language`}></i>
          </a>
          <h3 className={Styles.head}>Solution in many Language</h3>
          <p className={Styles.content}>
            We use many types of language of every solution. Because every body
            is own Choice
          </p>
        </div>
      </div>
    </div>
  );
}

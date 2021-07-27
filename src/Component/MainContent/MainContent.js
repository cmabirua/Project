import React from "react";
import { Link } from "react-router-dom";
import Styles from "./MainContent.module.css";
export default function (props) {
  return (
    <div>
      <section>
      <div className={Styles.Header}>
        <input type="checkbox" id={Styles.check} />
        <header>
          <h2>
            <p href="" className={Styles.logo}>Logo</p>
          </h2>
          <div className={Styles.navigation}>
            <Link to="/">
              {" "}
              <a href="/">Home</a>
            </Link>
            <Link to="/About">
              {" "}
              <a href="/About">About</a>
            </Link>
            
            
            <Link to="/Complier">
              {" "}
              <a href="/Complier">Code Editor</a>
            </Link>
            <Link to={props.data.check.state.name==null?"/Login":"/"}>
              {" "}
              <a href={props.data.check.state.name==null?"/Login":"/"}>{props.data.check.state.name==null?"Login":props.data.check.state.name}</a>
              </Link>
          </div>
          <label for={Styles.check}>
            <i class={`fas fa-bars ${Styles.menu_btn}`}></i>
            <i class={`fas fa-times ${Styles.close_btn}`}></i>
          </label>
        </header>
        <div className={Styles.content}>
          <div className={Styles.info}>
            <h2>
              BEST PLACE
              <br />
              <span>TO LEARN DSA</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <Link to="/"><a href="/" className={Styles.info_btn}>
              More info
            </a></Link>
          </div>
        </div>

        <div className={Styles.media_icons}>
          <i className={Styles.icons}>
            <i class="fab fa-facebook-f"></i>
          </i>
          <i className={Styles.icons}>
            <i class="fab fa-twitter"></i>
          </i>
          <i className={Styles.icons}>
            <i class="fab fa-instagram"></i>
          </i>
        </div>
        </div>
      </section>
    </div>
  );
}

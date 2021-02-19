import React from "react";
import { Link } from "react-router-dom";
// import Navigation from "../Navigation/Navigation"
import Topic from "../Topic/Topic";
import Styles from "./MainContent.module.css";
import MidContent from "../MidContent/MidContent";
import Parallax from "react-rellax"
export default function () {
  return (
    <div>
      <section>
      <div className={Styles.Header}>
        <input type="checkbox" id={Styles.check} />
        <header>
          <h2>
            <a href="" className={Styles.logo}>Logo</a>
          </h2>
          <div className={Styles.navigation}>
            <Link to="/">
              {" "}
              <a>Home</a>
            </Link>
            <Link to="/About">
              {" "}
              <a>About</a>
            </Link>
            <Link to="/Login">
              {" "}
              <a>Login</a>
            </Link>
            <Link to="/Signup">
              {" "}
              <a href="/Signup">SignUp</a>
            </Link>
            <Link to="/Contact">
              {" "}
              <a>Contact</a>
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
            <a href="#" className={Styles.info_btn}>
              More info
            </a>
          </div>
        </div>

        <div className={Styles.media_icons}>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        </div>
      </section>
    </div>
  );
}

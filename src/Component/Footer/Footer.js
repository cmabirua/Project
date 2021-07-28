import React from "react"
import Styles from "./Footer.module.css"
export default function Footer(){
    return (
      <div>
        <footer>
          <div className={Styles.footer_content}>
            <h3>Group 🖐 </h3>
            <p>
              A Small team aim to introduce the coding to the student and help
              them to achieve success in their life.{" "}
            </p>
          </div>
          <div className={Styles.footer_bottom}>
            <p>
              Copyright &copy;2021 Team designed by <span>Group 🖐</span>
            </p>
          </div>
        </footer>
      </div>
    );
}
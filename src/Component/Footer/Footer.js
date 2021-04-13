import React from "react"
import Styles from "./Footer.module.css"
export default function Footer(){
    return(
        <div>
        <footer>
        <div className={Styles.footer_content}>
            <h3>Seema and Team</h3>
            <p>A Small team aim to introduce the coding to the student and help them to achieve success in their life. </p>
        </div>
        <div className={Styles.footer_bottom}>
            <p>Copyright &copy;2021 Seema and Team designed by <span>Team</span></p>
        </div>
    </footer>
        </div>
    )
}
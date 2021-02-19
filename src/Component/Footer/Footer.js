import React from "react"
import Styles from "./Footer.module.css"
export default function Footer(){
    return(
        <div>
        <footer>
        <div className={Styles.footer_content}>
            <h3>Seema and Team</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste corrupti doloribus odio sed!</p>
        </div>
        <div className={Styles.footer_bottom}>
            <p>Copyright &copy;2021 Seema and Team designed by <span>Seema</span></p>
        </div>
    </footer>
        </div>
    )
}
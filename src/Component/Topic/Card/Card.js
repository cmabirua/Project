import React, { useEffect } from "react"
import Styles from "./Card.module.css"
import {Link} from "react-router-dom"
 export default function Card(props){
     
     
     return(
         <div className={Styles.card}>
            <h1 className={Styles.topic}>{props.Topic}</h1>
            <Link to={props.Topic}><button className={`${Styles.button}`} >Continue</button> </Link>
         </div>
     )
 }
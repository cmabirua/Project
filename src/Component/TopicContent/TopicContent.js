import React from "react"
import Styles from "./TopicContent.module.css"
export default function TopicContent(props){
    console.log(props.match.params.id); //Give Topic Name
    return(
        <div>
            <h1>{props.match.params.id}</h1>
        </div>
    )
}
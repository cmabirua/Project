import React from "react"
import Card from "./Card/Card"
import Styles from "./Topic.module.css"

export default function Topic(){
let arr = ["Array","LinkedList","Stack","Queue","Tree","Graph"]
    return(
        <div className="container-fliud">
            <div className="row" style={{marginTop:"20px"}}>
                {arr.map((topic)=>(
                    <div className= {`col-lg-4 ${Styles.card}` }>
                <Card Topic={topic} />
                </div>
            ))}
            </div>
        </div>
    )
}
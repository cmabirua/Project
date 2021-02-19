import React from "react";
import Card from "./Card/Card";
import Styles from "./Topic.module.css";

export default function Topic() {
  let arr = [
    "Array",
    "LinkedList",
    "Stack",
    "Queue",
    "Tree",
    "Graph",
    "Searching",
    "Sorting",
    "Hashing",
    "BST",
    "Matrix",
    "Heap"
  ];
  return (
    <div className={`container-fliud`}>
      <div className={Styles.topicbody}>
        <h1 className={Styles.head}>Data Structures</h1>
        <div className="row" style={{ marginTop: "40px" }}>
          {arr.map(topic => (
            <Card Topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
}

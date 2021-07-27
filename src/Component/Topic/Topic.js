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
    "DP",
    "BST",
    "Matrix",
    "Heap"
  ];
  return (
    <div className={`container-fliud`}>
      <div className={Styles.topicbody}>
        <h1 className={Styles.head}>Data Structures</h1>
        <div className={Styles.row} style={{ marginTop: "20px" }}>
          {arr.map((topic,i) => (i < 4 ? <Card Topic={topic} /> : ""))}
        </div>
        <div className={Styles.row} style={{ marginTop: "20px" }}>
          {arr.map((topic,i) => (i >= 4 && i < 8 ? <Card Topic={topic} /> : ""))}
        </div>
        <div className={Styles.row} style={{ marginTop: "20px" }}>
          {arr.map((topic,i) => (i >=8 ? <Card Topic={topic} /> : ""))}
        </div>
      </div>
    </div>
  );
}

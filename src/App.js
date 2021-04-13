import React from "react";
import "./styles.css";
import Layout from "./Component/Layout/Layout";
import { Provider } from "unstated";
export default function App() {
  return (
    <Provider>

    <div className="App">
      
      <Layout></Layout>
    </div>
    </Provider>
  );
}

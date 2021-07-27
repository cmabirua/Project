import React, { useState } from "react";
import Styles from "./Complier.module.css";
// import {ace} from "./js/lib/ace.js"

// let editor;
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-python";
import { diff as DiffEditor } from "react-ace";
import { Button } from "@material-ui/core";
import axios from "axios";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";


const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(0),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    marginLeft:"0",
    outLine:"none"
  },
}));
function Complier() {
  const [code, setCode] = useState(null);
  const [mode,setMode] = useState("c_cpp"); 
  const [language, setlanguage] = useState("cpp");
  const [run,setRun] = useState(false)
  const [input,setInput] = useState("")
  const [output,setOutput] = useState("")
  const changeLanguage = () => {};
  const classes = useStyles();
  const executeCode = () => {};
  const handleCode = (newValue) => {
    setCode(newValue);
    // console.log(newValue);
    // console.log();
  };
  const excuteCode = async() => {
    setRun(true)
    // var input = document.getElementById("input").innerText;

    const formData = {
      language: language,
      code:code,
      input:input
    };
    console.log(formData);
    await axios.post("http://localhost:5002/codex", formData).then((res) => {
      console.log(res.data);
      if(res.data){
        console.log(res.data.output);
        setOutput(res.data.output)
        setRun(false)
      }
      // var output = document.getElementById("output");

    });
    
  };
  const handleInput = (e)=>{
    setInput(e.target.value);
  }
  const handleChange = (e)=>{
    
    if(e.target.value=="cpp"){
      setMode("cpp");
      setlanguage("cpp")

    }
    else if(e.target.value=="java"){
      setMode("java");
      setlanguage("java")
    }
    else if(e.target.value=="python"){
      setMode("python")
      setlanguage("py");
    }
    // console.log(mode,e.target.value);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6"></div>
        <div className="col-lg-6">
          <div>
            <div className={Styles.top}>
              <div>
                <FormControl className={classes.margin}>
                  <NativeSelect
                    id="demo-customized-select-native"
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                    <option value="c_cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                  </NativeSelect>
                </FormControl>
              </div>
              <div>
                <Button variant="contained" color="primary" disabled = {run} onClick = {excuteCode}>
                  {run?"Running":"Run"}
                </Button>
              </div>
            </div>
            <div className={Styles.complier}>
              <AceEditor
                width="100%"
                height="69.8vh"
                mode={mode}
                theme="textmate"
                onChange={handleCode}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                
              />
              {/* <DiffEditor
                value={["Test code differences", "Test code difference"]}
                height="1000px"
                width="1000px"
                mode="text"
              /> */}
            </div>
            <div className={Styles.text}>
              <div>
                <h6>Input</h6>
                <textarea cols="25" rows="5" id = "input" onChange = {handleInput} ></textarea>
              </div>
              <div>
                <h6>Output</h6>
                <p style={{width:"216px",height:"120px",border:"1px lightgrey solid"}} >{output}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complier;

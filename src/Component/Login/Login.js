import React,{useState} from "react"
import Styles from "./Login.module.css"
import TextBox from "../../UI/TextBox/TextBox"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
form: {
width: '100%', 
marginTop: theme.spacing(3),
},
}));
export default function Login(){


    const [e,setEmail] = useState(null); // for email validata or not check
    const [p,setPhone] = useState(null); // for number validate or not check

    const useStyles = makeStyles((theme) => ({
    form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    },
    }));

var check = ()=>{
    var email = document.getElementById("email").value;
    checkemail(email)
    var phone = document.getElementById("phone").value;
    checkphone(phone)
}

var checkemail = (data)=>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data))
    {
        setEmail(null)
    }
    else{
        setEmail("Invaild Email")
    }
}

var checkphone = (data)=>{
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(data.match(phoneno)){
        setPhone(null)
    }
    else{
        setPhone("Invaild Phone No.")
    }
}
const classes = useStyles();
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4" className={Styles.box}>
                <br></br>
                    <h2 className={Styles.name}>LOGIN</h2>
                    <br></br>
                    <form className={classes.form}>
                    <Grid container spacing={2}>
                        <TextBox xs = "12" sm="12" auto="email" name="email" id="email" label="Email Id" autofocus="false" />
                        <TextBox xs = "8" sm="8" auto="phone" name="phone" id="phone" label="Phone No."  />
                        <Grid xs="4" sm="4"><button   onClick={check}  type={p==null && e==null?"submit":"button"} className={Styles.btnlogin}>LOGIN</button></Grid>
                    </Grid>
                    <br></br>
                    <p style={{color:"red",fontSize:"15px"}}> {e==null?"":e}</p>
                    <p style={{color:"red",fontSize:"15px"}}> {p==null?"":p}</p>
                    
                    <Grid container spacing={2}>
                        <p className={Styles.txtlogin}><NavLink to="/signup">New User ? Create Account</NavLink></p>
                    </Grid>
                    </form>
                </div>
            </div>
        </div>
    )
}

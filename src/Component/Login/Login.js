import React, { useState } from "react";
import Styles from "./Login.module.css";
import TextBox from "../../UI/TextBox/TextBox";
import Data from "../../Container/Data";
import { NavLink, useHistory ,Link} from "react-router-dom";
import { Subscribe } from "unstated";
import GoogleLogin from "react-google-login";

export default function Login(props) {
  const [e, setEmail] = useState(null); // for email validata or not check
  const [p, setPhone] = useState(null); // for number validate or not check
  let h = useHistory();
  console.log(props);

  var check = () => {
    var email = document.getElementById("email").value;
    checkemail(email);
    var phone = document.getElementById("phone").value;
    checkphone(phone);
  };

  var checkemail = (data) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        data
      )
    ) {
      setEmail(null);
    } else {
      setEmail("Invaild Email");
    }
  };

  var checkphone = (data) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (data.match(phoneno)) {
      setPhone(null);
    } else {
      setPhone("Invaild Phone No.");
    }
  };
var resGoogle = async (d,doLogin)=>{
  await doLogin(d.profileObj);
  console.log(props);
  h.push("/")
}
var googleFailue=()=>{

}
  return (
    <>
    {/* <div className="container-fluid">
      <div className="row">
        <div className={`col-lg-12 ${Styles.back}`}>
          <div className={Styles.circle1}></div>
          <div className={Styles.circle2}></div>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className={Styles.box}>
            <br></br>
            <br></br>
            <h2 className={Styles.name}>LOGIN</h2>
            <br></br>
            {/* <form>
              <TextBox
                auto="email"
                name="email"
                id="email"
                autofocus="false"
                width="100%"
                placeholder="Email"
              />
              <TextBox
                auto="phone"
                name="phone"
                id="phone"
                width="100%"
                placeholder="Phone No."
              />
              <button
                onClick={check}
                type={p == null && e == null ? "submit" : "button"}
                className={Styles.btnlogin}
              >
                LOGIN
              </button>


              <br></br>
              <p style={{ color: "red", fontSize: "15px" }}>
                {" "}
                {e == null ? "" : e}
              </p>
              <p style={{ color: "red", fontSize: "15px" }}>
                {" "}
                {p == null ? "" : p}
              </p>
              <br></br>
              <p className={Styles.txtlogin}>
                <NavLink to="/signup">New User ? Create Account</NavLink>
              </p>
            </form> 
            <Subscribe to={[Data]}>
                    {(data) => (
                      <GoogleLogin
                      className="googlebtn"
                        clientId="966541688745-ml0v25mp23b44st2pnoojif5gfsh8juu.apps.googleusercontent.com" // Work Only on localhost:3000 
                        buttonText="Login with Google"
                        onSuccess={(d) =>
                          resGoogle(d, data.doLogin)
                        }
                        onFailure={googleFailue}
                        cookiePolicy={"single_host_origin"}
                        width={200}
                        
                      />
                    )}
                  </Subscribe>
          </div>
        </div>
      </div>
    </div> */}


    <div className="container-fluid">
        <div className="row">
            <div className={`col-lg-5 ${Styles.sec1}`}>
            <div className={Styles.sec1a}>

                <Link to="/"><a href="/">Back</a></Link>
            </div>
                <div className={Styles.sec1btn} >
                <h3>Log in to your account</h3>
                <br></br>
                <Subscribe to={[Data]}>
                    {(data) => (
                      <GoogleLogin
                      className={Styles.googlebtn}
                        clientId="966541688745-ml0v25mp23b44st2pnoojif5gfsh8juu.apps.googleusercontent.com" // Work Only on localhost:3000 
                        buttonText="Login with Google"
                        onSuccess={(d) =>
                          resGoogle(d, data.doLogin)
                        }
                        onFailure={googleFailue}
                        cookiePolicy={"single_host_origin"}
                        width={200}
                        
                      />
                    )}
                  </Subscribe>
                </div>
            </div>
            <div className={`col-lg-7 ${Styles.sec2} `}>
                  <div className={Styles.sec2p}>

                  <p>
                    ONE STEP SOLUTION
                  </p>
                  <p>
                    FOR <span>DSA</span>
                  </p>
                  <p>
                    PRACTICE AND STUDY
                  </p>
                  </div>
            </div>

        </div>
                        

    </div>
    </>
  );
}

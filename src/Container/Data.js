import {Container} from 'unstated';


class Data extends Container {
  state = {
    isLoggedIn: false,
    phone: null,
    email: null,
    name: null,
    accessToken: null,
    apiUrl:"http://localhost:3006/",
    
    tid:null,
    tauth:null
    
  };
  doLogin = (data)=>{
        console.log("True",data);
      this.setState({
          name:data.savedUser.name,
          email:data.savedUser.email,
          phone:data.savedUser.phone,
          tphn:data.savedUser.tphn,
          tid:data.savedUser.tid,
          tsec:data.savedUser.tsec,
          accessToken:data.accessToken,

      })
      return true;

  }
}


export default Data;

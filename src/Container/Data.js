import { Container } from "unstated";

class Data extends Container {
  state = {
    email: null,
    name: null,
  };
  doLogin = (data) => {
    console.log("True", data);
    this.setState({
      name: data.name,
      email: data.email,
    });

    return true;
  };
}

export default Data;

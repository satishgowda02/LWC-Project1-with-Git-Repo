import { LightningElement } from "lwc";
import signInTemplate from "./signInTemplate.html";
import signupTemplate from "./signupTemplate.html";
import defaultTemplate from "./renderMultipleDemo.html";
export default class RenderMultipleDemo extends LightningElement {
  selected = null;
  render() {
    return this.selected === "Sign Up"
      ? signupTemplate
      : this.selected === "Sign In"
      ? signInTemplate
      : defaultTemplate;
  }
  handleClick(event) {
    this.selected = event.target.label;
  }

  submitHandler(event) {
    if (event.target.label === "Sign In") {
      console.log("Login Successfully");
    } else if (event.target.label === "Sign Up") {
      console.log("Sign Up Successfully");
    }
  }
}

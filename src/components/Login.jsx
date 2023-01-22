import React, { useState } from "react";
import Input from "./Input";

function Login() {
  const [fullname, setFullname] = useState({
    fname: "",
    lname: "",
  });
  const handleChange=(event)=>{
    const { name, value } = event.target;
    
    setFullname((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname
        }
      }
      else if(name === "lname") {
        return {
          fname: preValue.fname,
          lname: value
        }
      }
    })
  }
  return (
    <form className="form">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <Input
        type="text"
        placeholder="First Name"
        name="fname"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Last Name"
        name="lname"
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default Login;

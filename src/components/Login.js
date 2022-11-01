import React, { useState } from "react";
import  { Navigate } from 'react-router-dom'

export default function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {

      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        localStorage.setItem("type", userData.username);
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="errorone">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="formone" style={{color: "black"}}>
      <form onSubmit={handleSubmit}>
        <div className="input-containerone">
          <label>Username </label>
          <input style={{height: "60px",border: "1px solid rgba(0, 0, 0, 0.2)", borderRadius: "30px"}} type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-containerone">
          <label>Password </label>
          <input style={{height: "60px",border: "1px solid rgba(0, 0, 0, 0.2)", borderRadius: "30px"}} type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-containerone">
          <input style={{marginTop: "10px",cursor: "pointer",fontSize: "15px",background: "#01d28e", border: "1px solid #01d28e",color: "#fff",padding: "10px 20px"}} type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="appone" style={{color: "black"}}>
      <div className="login-formone">
        <div className="titleone">Sign In</div>
        {isSubmitted ? <Navigate to= '/profile' /> : renderForm}
      </div>
    </div>
  );
}

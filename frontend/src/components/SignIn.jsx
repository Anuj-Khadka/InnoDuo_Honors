import React, { useState } from "react";
import "../assets/css/signin.css";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import useInput from "./microcomponents/useInput";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"
const baseUrl = "https://innoduo-honors.onrender.com/login";

const SignIn = () => {

  const history = useNavigate()

  const [showPass, setShowPass] = useState(false);
  const [email, bindEmail, resetEmail] = useInput("");
  const [password, bindPassword, resetPassword] = useInput("");

  const showPassHandler = () => {
    console.log("hi");
    let userPass = document.getElementById("user-password");
    if (!showPass) {
      userPass.type = "text";
      setShowPass(!showPass);
    } else {
      userPass.type = "password";
      setShowPass(!showPass);
    }
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    resetEmail();
    resetPassword();
    console.log("print");


    // try {
    //   const response = await axios.post(baseUrl);
    //   if (response.data === 'Logged in successfully') {
    //     console.log('Logged in successfully');
    //   } else {
    //     console.log(response.data);
    //   }
    // } catch (error) {
    //   console.log('An error occurred. Please try again.'); 
    //   console.error('Error:', error);
    // }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-content">
          <h2 className="form-title">Sign In</h2>

          <form
            action=""
            method="post"
            className="auth-form"
            onSubmit={signInHandler}
          >
            <div className="form-fields">
              <div className="user-email-info input-field">
                <label htmlFor="user-email">Email</label>
                <div className="field-restrict">
                  <div id="email-input-field" className="input-field-wrap">
                    <input
                      type="text"
                      name="user-email"
                      id="user-email"
                      placeholder="johndoe"
                      {...bindEmail}
                      required
                    />
                  </div>
                  <span>@caldwell.edu</span>
                </div>
              </div>

              <div className="user-password-info input-field">
                <label htmlFor="user-password">Password</label>
                <div className="field-restrict">
                  <div className="input-field-wrap">
                    <input
                      type="password"
                      name="user-password"
                      id="user-password"
                      placeholder="***********"
                      {...bindPassword}
                      required
                    />
                    <div className="display-password" onClick={showPassHandler}>
                      <PiEyeBold
                        id="open-eye"
                        className={`pass-icon ${
                          showPass ? "pass-display" : ""
                        }`}
                      />
                      <PiEyeClosedBold
                        id="closed-eye"
                        className={`pass-icon ${
                          showPass ? "" : "pass-display"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="auth-btn-holder">
              <div className="primary-btn">
                <button type="submit">Sign In</button>
              </div>
            </div>
          </form>
        </div>
        <div className="other-options">
          <div className="register-link">Do not have an account? </div>
          <span>
            <NavLink to="/signup">
              <b>Signup</b>
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

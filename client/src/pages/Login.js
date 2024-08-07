import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { GiMusicSpell } from "react-icons/gi";

import { useDispatch, useSelector } from "react-redux";
import "../form.css";
import { login } from "../redux/authSlice";

const Login = () => {
  const emailId = useRef();
  const password = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();

    let emailVal = emailId.current.value;
    let passwordVal = password.current.value;

    dispatch(login({ email: emailVal, password: passwordVal }));

    // console.log(emailVal, passwordVal);
  }

  return (
    <div>
      {/* <span className="brand-heading">
        <GiMusicSpell /> Music Player
      </span> */}
      <div className="auth">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="">
            <h1>Login</h1>
            <div className="input-box">
              <input
                id="email"
                type="email"
                ref={emailId}
                required
                className="auth-input"
                placeholder="Email Address"
              />
            </div>

            <div>
              <div className="input-box">
                <input
                  id="password"
                  type="password"
                  ref={password}
                  required
                  className="auth-input"
                  placeholder="Password"
                />
              </div>
              <div className="remember-forget">
                <p className="">Forgot password?</p>
              </div>
            </div>

            <div>
              <button type="submit" className="btn">
                Sign in
              </button>
            </div>
            <div className="register-link">
              <p>
                Don't have an account?
                <br /> <span>Register</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div>
    <div className="row mt-5">
      <div className="col-4 mt-5">
        <img src="media/images/Signup.png" style={{ marginLeft: "50px" }} />
      </div>
      <div className="col-2"></div>
      <div className="col-4  mt-5">
        <div className="form_container">
          <h2>Signup Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="email">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <a className="SubmitButton" href="http://localhost:3001/">Submit</a>
            <span>
              Already have an account? <Link to={"/login"}>Login</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      </div>
      <div className="col-2"></div>
    </div>
    
       <div className="row">
        <div className="col-2"></div>
        <div className="mb-5 text-center col-8  mt-5 fs-8 text-muted" style={{ fontSize: "12px" }}>
          <p >
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN. Please visit this article to know more.
          </p>
          <p >
            By submitting your contact details, you authorize Zerodha to contact
            you even if you are registered on DND & conduct online KYC for
            trading & demat account opening as per KRA regulations and PMLA
            guidelines.
          </p>
          <p >
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the offline forms. For help, click here.
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Signup;

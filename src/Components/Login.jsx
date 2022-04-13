import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [inputChange, setInputChange] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputChange({
      ...inputChange,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    const request = {
      email: inputChange.email,
      password: inputChange.password,
    };
    console.log("request", request);
    //API CALL
    // The data from the API should be passed to profile through props for that we have to use history
    let result = [];
    history({
      pathname: `/profile`,
      //   state: { data: result }, // Pass the data through result
    });
  };

  return (
    <div className="login-page">
      <div className="form-box">
        <h4>Login Form</h4>
        <div className="form-control">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            name="email"
            value={inputChange.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            name="password"
            value={inputChange.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <button
            name="submit"
            onClick={handleSubmit}
            className="btn btn-small"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

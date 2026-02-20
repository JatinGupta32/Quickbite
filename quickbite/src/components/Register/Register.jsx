import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../service/authService";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser(data);
      if (response.status === 201) {
        toast.success("Registration completed. Please login.");
        navigate("/login");
      } else {
        toast.error("Unable to register. Please try again");
      }
    } catch (error) {
      toast.error("Unable to register. Please try again");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              required
            />
          </div>

          <button type="submit" className="btn-primary-custom">
            Sign Up
          </button>

          <button type="reset" className="btn-outline-custom">
            Reset
          </button>

          <p className="auth-footer">
            Already have an account?{" "}
            <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

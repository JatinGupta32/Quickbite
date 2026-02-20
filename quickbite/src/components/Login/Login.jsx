import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../service/authService";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

const Login = () => {
  const { setToken, loadCartData } = useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
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
      const response = await login(data);
      if (response.status === 200) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        await loadCartData(response.data.token);
        navigate("/");
      } else {
        toast.error("Unable to login. Please try again.");
      }
    } catch (error) {
      console.log("Unable to login", error);
      toast.error("Unable to login. Please try again");
    }
  };
  
  return (
  <div className="login-container">
    <div className="login-card">
      <h2 className="login-title">Sign In</h2>

      <form onSubmit={onSubmitHandler}>
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

        <button className="login-btn" type="submit">
          Sign In
        </button>

        <button className="reset-btn" type="reset">
          Reset
        </button>

        <p className="signup-text">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  </div>
);
};

export default Login;

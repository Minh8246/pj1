import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const Jumptosignup = () => {
    navigate("/Signup");
  };

  const Jumptoproduct = () => {
    navigate("/ProductList");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        userName: username,
        password: password,
      });

      if (!isNaN(response.data.message)) {
        localStorage.setItem("userId", response.data.message);
        Jumptoproduct();
      } else if (response.data.error === "False password") {
        setMessage("False password");
      } else if (response.data.error === "Account not found") {
        setMessage("Account not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-theme">
      <div className="register-box">
        <h1>Login</h1>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Log in
        </button>
        <strong>{message}</strong>
        <div className="jumptosignup">
          <h2>Dont have account?</h2>
          <button onClick={Jumptosignup} className="jumptosignup-button">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

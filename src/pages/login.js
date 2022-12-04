import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="app">
      <h1>Login page</h1>
      <Link to="/signup">Go to signup</Link>
      <Link to="/">Back home</Link>
    </div>
  );
};

export default LoginPage;

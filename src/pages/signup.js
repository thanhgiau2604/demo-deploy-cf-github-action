import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="app">
      <h1>Signup Page</h1>
      <Link to="/login">Go to login</Link>
      <Link to="/">Back home</Link>
    </div>
  );
};

export default SignupPage;

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="app">
      <h1>HOME PAGE - 2</h1>
      <Link to="/login">Go to login</Link>
      <Link to="/signup">Go to signup</Link>
    </div>
  );
};

export default HomePage;

import React from "react";
import { Link } from "react-router-dom"; //prevent full page reload

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/Routing-Example-React/Routing-Example-React/">Home</Link>
      </li>
      <li>
        <Link to="/Routing-Example-React/products">Products</Link>
      </li>
      <li>
        <Link to="/Routing-Example-React/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/Routing-Example-React/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;

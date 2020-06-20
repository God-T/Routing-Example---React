import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  /* ul>(li>Link[to=""])*2 */
  return (
    <ul>
      <li>
        <Link to="/Routing-Example-React/admin/posts">Posts</Link>
      </li>
      <li>
        <Link to="/Routing-Example-React/admin/users">Users</Link>
      </li>
    </ul>
  );
};

export default SideBar;

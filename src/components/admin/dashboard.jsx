import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./sideBar";
import Users from "./users";
import Posts from "./posts";
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/Routing-Example-React/admin/users" conmponent={Users} />
      <Route path="/Routing-Example-React/admin/posts" conmponent={Posts} />
    </div>
  );
};

export default Dashboard;

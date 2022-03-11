import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"; // css reset
import NewUser from "./pages/NewUser";
import UserList from "./pages/UserList";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/new" element={<NewUser />} />
          <Route path="users/:id" element={<UserDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

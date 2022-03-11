import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"; // css reset
import NewUser from "./pages/NewUser";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="new" element={<NewUser />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

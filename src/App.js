import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css"; // css reset
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import UserDashboard from "./components/UserDashboard";
import AllUsers from "./pages/AllUsers";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import { useStore } from "./store";
import UserForm from "./components/UserForm";
import UserLoginForm from "./components/UserLoginForm";

function App() {
  const theme = useStore((state) => state.currentTheme);

  return (
    <ThemeProvider className="App" theme={theme}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="user/signup" element={<UserForm title="User Sign Up" />} />
        <Route path="user/login" element={<UserLoginForm />} />

        <Route path="admin" element={<Layout isAdmin={true} />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<AllUsers />} />
          <Route
            path="new"
            element={<UserForm title="Create New User" isAdmin={true} />}
          />
          <Route path="users/:id" element={<User />} />
          <Route
            path="edit/user/:id"
            element={<UserForm title="Update User" />}
          />
        </Route>

        <Route path="user" element={<Layout />}>
          <Route index element={<UserDashboard />} />
          <Route path="transactions" element={<User />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

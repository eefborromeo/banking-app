import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css"; // css reset
import NewUser from "./pages/NewUser";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import AllUsers from "./pages/AllUsers";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import { useStore } from "./store";
import UserSignUpForm from "./components/UserSignUpForm";
import UserLoginForm from "./components/UserLoginForm";

function App() {
  const theme = useStore((state) => state.currentTheme);

  return (
    <ThemeProvider className="App" theme={theme}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="user/signup" element={<UserSignUpForm title="User Sign Up" />} />
        <Route path="user/login" element={<UserLoginForm />} />

        <Route path="admin" element={<UserDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="new" element={<NewUser />} />
          <Route path="users/:id" element={<User />} />
          <Route path="edit/user/:id" element={<UserSignUpForm title="Update User" />} />
        </Route>

        <Route path="user" element={<Layout />}>
          <Route index element={<User />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css"; // css reset
import NewUser from "./pages/NewUser";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";

const darkTheme = {
  sideBarBackground: "#222",
  textColor: "#fff",
  pageBackground: "#303030",
  boxBackground: "#80808073",
  topBar: "#000",
  sunBgColor: "#fff",
  sunColor: "#222",
  inputBackground: "#545454",
};

const lightTheme = {
  pageBackground: "#fff",
  textColor: "#222",
  pageBackground: "#ebeaf1",
  boxBackground: "#fff",
  topBar: "#596DC4",
  sunBgColor: "#222",
  sunColor: "#fff",
};

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider className="App" theme={themes[theme]}>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="admin"
          element={<Layout theme={theme} setTheme={setTheme} />}
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="new" element={<NewUser />} />
          <Route path="users/:id" element={<User />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

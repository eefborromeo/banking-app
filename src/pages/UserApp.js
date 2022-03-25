import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BiMenu, BiX, BiAddToQueue, BiListUl, BiHome } from "react-icons/bi";
import { FiMoon, FiSun } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import LoginForm from "../components/LoginForm";
import { useStore } from "../store";
import logo from "../images/logo.png";
import UserLoginForm from "../components/UserLoginForm";
import UserDashboard from "../components/UserDashboard";

export default function UserApp() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isAdminLoggedIn = useStore((state) => state.adminLoggedIn);
  const currentUser = useStore((state) => state.currentUser);
  const userLogOut = useStore((state) => state.userLogOut);
  const { pathname } = useLocation();
  const theme = useStore((state) => state.currentTheme);
  const setTheme = useStore((state) => state.setTheme);

  const toggleTheme = () => {
    if (theme.name === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!isAdminLoggedIn && pathname.includes("admin")) {
    return <LoginForm />;
  } else if (!currentUser && !pathname.includes("admin")) {
    return <UserLoginForm />;
  }

  return (
    <ParentDiv>
      <TopBar>
        <div>
            <img src={logo} alt="Cashpoint Logo" />
        </div>
        <div>
          <button className="mode" onClick={toggleTheme}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          <button className="mode" onClick={userLogOut}>
            <MdLogout />
          </button>
        </div>
      </TopBar>
      <Dashboard>
        {/* <UserDashboard /> */}
      </Dashboard>
    </ParentDiv>
  );
}
const ParentDiv = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const TopBar = styled.div`
  background-color: ${(themes) => themes.theme.topBar};
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  height: 9%;

  .mode {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 0%;
    vertical-align: middle;
    border: none;
    border-radius: 100%;
    background: ${(themes) => themes.theme.sunBgColor};
    color: ${(themes) => themes.theme.sunColor};
    font-size: 20px;
    cursor: pointer;
  }
  .modeOne {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 0%;
    vertical-align: middle;
    border: none;
    color: ${(themes) => themes.theme.sunColor};
    font-size: 25px;
    cursor: pointer;
  }

  img {
    height: 25px;
  }

  button {
    border: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;
    button {
      background: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: ${(themes) => themes.theme.textColor};
    }
  }
`;

const Dashboard = styled.div`
width: 100%;
`;
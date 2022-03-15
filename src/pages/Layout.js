import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMoon, FiSun } from "react-icons/fi";
import LoginForm from "../components/LoginForm";
import useStore from "../store";
import logo from '../images/logo.png'

export default function Layout({ theme, setTheme }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const isAdminLoggedIn = useStore((state) => state.loggedIn);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!isAdminLoggedIn) {
    return <LoginForm />;
  }

  const toggleSideBar = () =>
    isSideBarOpen ? setIsSideBarOpen(false) : setIsSideBarOpen(true);

  return (
    <div>
      <TopBar>
        <div>
          <button onClick={toggleSideBar}>
            <GiHamburgerMenu />
          </button>
          <Link to="/admin/">
            <img src={logo} alt="Cashpoint Logo" />
          </Link>
        </div>
        <button onClick={toggleTheme}>
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
      </TopBar>
      <StyledLayout>
        <SideBar isSideBarOpen={isSideBarOpen}>
          <ul>
            <StyledLink activeclassname="active" to="/admin/">
              Dashboard
            </StyledLink>
            <StyledLink activeclassname="active" to="/admin/users">
              Users List
            </StyledLink>
            <StyledLink activeclassname="active" to="/admin/new">
              Create User
            </StyledLink>
          </ul>
        </SideBar>
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </StyledLayout>
    </div>
  );
}

const StyledLink = styled(NavLink)`
  padding: 1rem;
  text-decoration: none;
  color: ${(themes) => themes.theme.textColor};

  &.active {
    background: #596dc4;
    color: white;
    border-radius: 10px;
  }
`;

const SideBar = styled.div`
  background: ${(themes) => themes.theme.sideBarBackground};
  width: 20vw;
  padding: 2rem;
  font-weight: bold;
  font-size: 2rem;
  position: ${(props) => (props.isSideBarOpen ? "absolute" : "static")};
  left: -100%;

  div {
    color: #596dc4;
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
  }
`;

const StyledLayout = styled.div`
  display: flex;
`;

const OutletLayout = styled.div`
  height: 100vh;
  flex: 1;
  padding: 2rem;
  background: ${(themes) => themes.theme.pageBackground};

  .box {
    background: ${(themes) => themes.theme.boxBackground};
    border-radius: 10px;
    padding: 1rem 2rem;
    width: 80%;
    margin: auto;
  }

  h1 {
    color: #596dc4;
  }
`;

const TopBar = styled.div`
  background-color: ${(themes) => themes.theme.topBar};
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  button {
    width: 40px;
    height: 40px;
    padding-top: 2px;
    border: none;
    border-radius: 100%;
    background: ${(themes) => themes.theme.sunBgColor};
    color: ${(themes) => themes.theme.sunColor};
    font-size: 20px;
    cursor: pointer;
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

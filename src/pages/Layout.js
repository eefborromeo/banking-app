import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMoon, FiSun } from "react-icons/fi";
import LoginForm from "../components/LoginForm";
import useStore from "../store";
import logo from "../images/logo.png";
import UserLoginForm from "./UserLoginForm";

export default function Layout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isAdminLoggedIn = useStore((state) => state.adminLoggedIn);
  const currentUser = useStore((state) => state.currentUser);
  const userLogOut = useStore((state) => state.userLogOut);
  const { pathname } = useLocation()
  

  const theme = useStore((state) => state.currentTheme);
  const setTheme = useStore((state) => state.setTheme);
  const logOut = useStore((state) => state.adminLogOut);

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
    return <UserLoginForm />
  }

  const toggleSideBar = () =>
    isSideBarOpen ? setIsSideBarOpen(false) : setIsSideBarOpen(true);

  return (
    <ParentDiv>
      <TopBar>
        <div>
          {
            pathname.includes('admin') &&
          <button onClick={toggleSideBar}>
            <GiHamburgerMenu />
          </button> 
          }
          <Link to="/admin/">
            <img src={logo} alt="Cashpoint Logo" />
          </Link>
        </div>
        <div>
          <button className="mode" onClick={toggleTheme}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          { !pathname.includes('admin') && <button onClick={userLogOut}>Logout</button> }
        </div>
      </TopBar>
      <StyledLayout>
     { pathname.includes('admin') ?
        <SideBar isSideBarOpen={isSideBarOpen}>
          <ul>
            <StyledLink activeclassname="active" end to="/admin">
              Dashboard
            </StyledLink>
            <StyledLink activeclassname="active" end to="/admin/users">
              Users List
            </StyledLink>
            <StyledLink activeclassname="active" to="/admin/new">
              Create User
            </StyledLink>
          </ul>
          <button onClick={logOut}>Logout</button> 
        </SideBar> :
          null
        }
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </StyledLayout>
    </ParentDiv>
  );
}
const ParentDiv = styled.div`
height: 100%;
`

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
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.1rem;
  font-size: 2rem;
  position: ${(props) => (props.isSideBarOpen ? "absolute" : "static")};
  left: -100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  button {
    display: block;
    border: #eee 2px solid;
    color: #eee;
    margin: 0 auto;
    font-size: 1.5rem;
    padding: 0.5rem 0.8rem;
    background: #596dc4;
    border-radius: 1rem;
    cursor: pointer;

    &:hover {
      background: #eee;
      color: #596dc4;
    }
  }
`;

const StyledLayout = styled.div`
  display: flex;
  height: 100%;
`;

const OutletLayout = styled.div`
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

  .mode {
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

import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { BiAddToQueue, BiHome, BiListUl, BiMenu, BiX } from "react-icons/bi";
import { FiMoon, FiSun } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import LoginForm from "../components/LoginForm";
import { useStore } from "../store";
import logo from "../images/logo.png";
import UserLoginForm from "../components/UserLoginForm";

export default function Layout({ isAdmin }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isAdminLoggedIn = useStore((state) => state.adminLoggedIn);
  const currentUser = useStore((state) => state.currentUser);
  const userLogOut = useStore((state) => state.userLogOut);

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

  if (!isAdminLoggedIn && isAdmin) {
    return <LoginForm />;
  } else if (!currentUser && !isAdmin) {
    return <UserLoginForm />;
  }

  const toggleSideBar = () =>
    isSideBarOpen ? setIsSideBarOpen(false) : setIsSideBarOpen(true);

  return (
    <ParentDiv>
      <TopBar>
        <div>
          <button className="modeOne" onClick={toggleSideBar}>
            {isSideBarOpen ? <BiMenu /> : <BiX />}
          </button>
          <img src={logo} alt="Cashpoint Logo" />
        </div>
        <div>
          <button className="mode" onClick={toggleTheme}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          {!isAdmin && (
            <button onClick={userLogOut} className="mode">
              <MdLogout />
            </button>
          )}
          {isAdmin && (
            <button onClick={logOut} className="mode">
              <MdLogout />
            </button>
          )}
        </div>
      </TopBar>
      <StyledLayout>
        {isAdmin ? (
          <SideBar isSideBarOpen={isSideBarOpen}>
            <ul>
              <StyledLink activeclassname="active" end to="/admin">
                <BiHome /> Dashboard
              </StyledLink>
              <StyledLink activeclassname="active" end to="/admin/users">
                <BiListUl /> Users List
              </StyledLink>
              <StyledLink activeclassname="active" to="/admin/new">
                <BiAddToQueue /> Create User
              </StyledLink>
            </ul>
          </SideBar>
        ) : (
          <SideBar isSideBarOpen={isSideBarOpen}>
            <ul>
              <StyledLink activeclassname="active" end to="/user">
                <BiHome /> Dashboard
              </StyledLink>
              <StyledLink activeclassname="active" end to="/user/transactions">
                <BiListUl /> Transaction
              </StyledLink>
            </ul>
          </SideBar>
        )}
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </StyledLayout>
    </ParentDiv>
  );
}
const ParentDiv = styled.div`
  height: 100%;
`;

const StyledLink = styled(NavLink)`
  padding: 1rem;
  text-decoration: none;
  color: ${(themes) => themes.theme.textColor};
  display: flex;
  flex-direction: row;
  font-size: 20px;
  gap: 10px;

  &.active {
    background: #596dc4;
    color: white;
    border-radius: 10px;
    color: ${(themes) => themes.theme.sunColor};
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

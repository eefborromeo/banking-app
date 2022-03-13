import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Layout({ themes, theme, setTheme }) {
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')  
    } else {
      setTheme('light');
    }
  }


  return (
    <div>
      <TopBar>
        <Link to="/">Logo</Link>
        <button onClick={toggleTheme}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button>
      </TopBar>
      <StyledLayout>
        <SideBar>
          <ul>
            <StyledLink activeClassName="active" to="/users">
              Users List
            </StyledLink>
            <StyledLink activeClassName="active" to="/new">
              Create User
            </StyledLink>
            <StyledLink activeClassName="active" to="/user">
              User Dashboard
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
  color: ${themes => themes.theme.textColor};

  &.active {
    background: #596dc4;
    color: white;
    border-radius: 10px;
  }
`;

const SideBar = styled.div`
  background: ${themes => themes.theme.sideBarBackground};
  width: 20vw;
  padding: 2rem;
  font-weight: bold;
  font-size: 2rem;

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
  background: ${themes => themes.theme.pageBackground};

  .box {
    background: ${themes => themes.theme.boxBackground};
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
  background-color: ${themes => themes.theme.topBar};
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  button {
    width: 40px;
    height: 40px;
    padding-top: 2px;
    border: none;
    border-radius: 100%;
    background: ${themes => themes.theme.sunBgColor};
    color: ${themes => themes.theme.sunColor};
    font-size: 20px;
  }
`

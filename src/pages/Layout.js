import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <StyledLayout>
      <SideBar>
        <div>
          <Link to="/">Logo</Link>
        </div>
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
  );
}

const StyledLink = styled(NavLink)`
  padding: 1rem;
  text-decoration: none;

  &.active {
    background: #596dc4;
    color: white;
    border-radius: 10px;
  }
`;

const SideBar = styled.div`
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
  display: grid;
  place-items: center;
  background: #ebeaf1;
`;

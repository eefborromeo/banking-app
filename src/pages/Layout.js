import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <StyledLayout>
      <SideNav>
        <Link to="/">Logo</Link>
        <Link to="/users">Users List</Link>
        <Link to="/users/new">Create User</Link>
      </SideNav>
      <OutletLayout>
        <Outlet />
      </OutletLayout>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
`;

const SideNav = styled.div`
  border: 1px black solid;
  height: 100vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  padding: 2em;

  > * {
    margin: 0.5em 0;
  }
`;

const OutletLayout = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  background: #ebeaf1;
`;

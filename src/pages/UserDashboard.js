import React from "react";
import styled from "styled-components";

export default function UserDashboard() {
  return (
    <ParentDiv>
      <SideBar>
        <div> picture </div> <div> Janssen Radh </div>
        
      </SideBar>
      <Dashboard>
        <div> 2 </div>
      </Dashboard>
      <Section>
        <div> 3 </div>
      </Section>
    </ParentDiv>
  );
}

const ParentDiv = styled.section`
height: 100%;
display: flex;

`
const SideBar = styled.section`
background-color: red;
width: 20%;
align-items: center;
padding: 30px;
  div {
    display: flex;
  }
`
const Dashboard = styled.section`
background-color: blue;
width: 50%;
`

const Section = styled.section`
background-color: green;
width: 30%;
`
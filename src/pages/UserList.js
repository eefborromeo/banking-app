import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NewUser() {
  return (
    <ListContainer>
      <TableGrid>
        <TableHeader>
          <p>Name</p>
          <p>Balance</p>
        </TableHeader>
        <TableItems>
          <Link to={`/users/${"JohnDoe"}`}>John Doe</Link>
          <p>$420,000</p>
        </TableItems>
        <TableItems>
          <Link to={`/users/${"SpikeVinz"}`}>Spike Vinz</Link>
          <p>$69,000</p>
        </TableItems>
      </TableGrid>
    </ListContainer>
  );
}

const TableHeader = styled.div`
  display: grid;
  background: #222;
  grid-gap: 1px;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px #555 solid;

  > * {
    background: #eee;
  }
`;

const TableItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #222;
  grid-gap: 1px;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px #555 solid;

  > * {
    background: #fff;
  }
`;

const TableGrid = styled.div`
  border: black 1px solid;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.div`
  background: #fff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  height: 35%;
  width: 70%;
  padding: 1em;
`;

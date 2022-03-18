import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useStore from "../store";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${(themes) => themes.theme.textColor};

  a {
    color: ${(themes) => themes.theme.textColor};
    text-transform: capitalize;
    text-decoration: none;
    display: table;
  }

  tr {
    border-bottom: 1px solid rgba(128, 128, 128, 0.45);
    th {
      text-align: left;
      padding: 1rem 0;
      color: #596dc4;
      color: ${(themes) => themes.theme.thColor};
    }
    td {
      padding: 1rem 0.5rem;
    }
  }

  tbody tr:last-child {
    border-bottom: none;
  }

  tbody tr:hover {
    background-color: rgba(117, 138, 229, 1);
    color: white;
  }
`;

export default function AllUsers() {
  const users = useStore((state) => state.users);

  return (
    <Div className="box">
      <h1 className="bold">All Users</h1>
      <Table>
        <thead>
          <tr>
            <th className="bold">Name</th>
            <th className="bold">Balance</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr onClick={() => handleClick(user.id)} key={user.id}>
                  <td>
                    {user.name}
                  </td>
                  <td>{user.balance}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Div>
  );
}

const Div = styled.div `
h1 {
  color: ${(themes) => themes.theme.thColor};
  font-size: 50px;
  text-align: center;
}
`
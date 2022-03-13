import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  tr {
    border-bottom: 1px solid rgba(128, 128, 128, 0.45);
    th {
      text-align: left;
      padding: 1rem 0;
      color: #596dc4;
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

export default function AllUsers({ users, theme }) {
  return (
      <div className="box">
        <h1>All Users</h1>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>
                      <Link to={`${user.id}`}>{user.name}</Link>
                    </td>
                    <td>{user.balance}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
  );
}

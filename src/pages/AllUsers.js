import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../store";

export default function AllUsers() {
  const users = useStore((state) => state.users);
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/admin/users/${id}`);
  }

  return (
    <Div className="box">
      <h1 className="bold">All Users</h1>
      <Table>
        <thead>
          <tr>
            <th className="bold">Name</th>
            <th className="bold">Balance</th>
            <th className="bold">Status</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr onClick={() => handleClick(user.id)} key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.balance}</td>
                  <td>
                    <StatusPending>Pending</StatusPending>
                    <button>Approve</button>
                    <button>Deny</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Div>
  );
}

const Div = styled.div`
  h1 {
    color: ${(themes) => themes.theme.thColor};
    font-size: 50px;
    text-align: center;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${(themes) => themes.theme.textColor};

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
      text-transform: capitalize;
      text-decoration: none;
      width: 30%;
        button {
          margin-left: 10px;
        }
    }
  }

  tbody tr:last-child {
    border-bottom: none;
  }

  tbody tr:hover {
    background-color: rgba(117, 138, 229, 1);
    color: white;
    cursor: pointer;
  }
`;

const StatusApproved = styled.span`
  background-color: lightgreen;
  padding: 10px 30px;
  border-radius: 20px;
`
const StatusPending = styled.span`
  background-color: orange;
  padding: 10px 30px;
  border-radius: 20px;
`
const StatusDenied = styled.span`
  background-color: red;
  padding: 10px 30px;
  border-radius: 20px;
`

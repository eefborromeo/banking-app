import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../store";

export default function AllUsers() {
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);
  const [isEdit, setIsEdit] = useState(false);
  const [onEdit, setOnEdit] = useState(0);
  const navigate = useNavigate();

  function handleClick(id, status) {
    if (status === "BLOCKED" || status === "DENIED") {
      return;
    }
    navigate(`/admin/users/${id}`);
  }

  let updateUsers;

  function updateStatus(selectedUser, message) {
    updateUsers = users.map(user => {
     if (user.id === selectedUser.id) {
        return {
          ...user,
          status: message
        }
      } else {
          return user
      }
    });
    return updateUsers;
  }

  function handleStatus(e, user, message) {
    e.stopPropagation();
    updateStatus(user, message);
    setUsers(updateUsers);
  }

  function handleEdit(e, user) {
    e.stopPropagation();
    setOnEdit(user)
    setIsEdit(true);
  }

  function handleUpdate(e, selectedUser) {
    const key = e.target.id;
    const value = e.target.value;
    updateUsers = users.map(user => {
      if (user.id === selectedUser.id) {
        return {
          ...user,
          [key]: key === 'balance' ? parseInt(value) : value
        }
      } else {
        return user
      }
    });
  }

  function handleSave(e) {
    e.stopPropagation();
    setUsers(updateUsers);
    setIsEdit(false)
  }

  function handleDelete(e, deleteUser) {
    e.stopPropagation();
    const updateUsers = users.filter(user => user.id !== deleteUser.id)
    setUsers(updateUsers)
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
            <th className="bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr onClick={() => handleClick(user.id, user.status)} key={user.id}>
                  {
                    onEdit === user.id && isEdit ? 
                    <td>
                      <input id="name" onClick={(e) => e.stopPropagation()} onChange={(e) => handleUpdate(e, user)} /> 
                    </td> :
                    <td>{user.name}</td> 
                  }
                  {
                    onEdit === user.id && isEdit ? 
                    <td>
                      <input id="balance" onClick={(e) => e.stopPropagation()} onChange={(e) => handleUpdate(e, user)} /> 
                    </td> :
                    <td>{user.balance}</td> 
                  }
                  <td>
                      <Status status={user.status}>{user.status}</Status>
                  </td>
                  <td>
                      {
                        user.status === "APPROVED" && onEdit && 
                          isEdit ? 
                            <button onClick={(e) => handleSave(e, user)}>Save</button> :
                            <>
                              <button onClick={(e) => handleStatus(e,user, "BLOCKED")}>Block</button>
                              <button onClick={(e) => handleEdit(e, user.id)}>Edit</button>
                              <button onClick={(e) => handleDelete(e, user)}>Delete</button>
                            </>
                      }
                      {
                        user.status === "PENDING" && 
                        (
                          <>
                            <button onClick={(e) => handleStatus(e,user, "APPROVED")}>Approve</button>
                            <button onClick={(e) => handleStatus(e,user, "DENIED")}>Deny</button>
                          </>
                        )
                      }
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
      width: 25%;
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

const Status = styled.span`
  background-color: ${props => {
    if (props.status === "APPROVED") {
      return "lightgreen"
    } else if (props.status === "PENDING") {
      return "orange"
    } else if (props.status === "DENIED") {
      return "red"
    } else if (props.status === "BLOCKED") {
      return "lightgray"
    }
  }};
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 20px;
`;

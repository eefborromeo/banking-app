import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiBlock, BiEdit, BiTrash, BiCheckCircle, BiXCircle } from "react-icons/bi";
import { useStore } from "../store";

export default function AllUsers() {
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);
  const navigate = useNavigate();

  function handleClick(id, status) {
    if (status === "BLOCKED" || status === "DENIED" || status === "PENDING") {
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

  function handleEdit(e, id) {
    e.stopPropagation();
    navigate(`/admin/edit/user/${id}`)
  }

  function handleDelete(e, deleteUser) {
    e.stopPropagation();
    const updateUsers = users.map(user => {
      if (user.id === deleteUser.id) {
        return { ...user, deleted: true}
      } else {
        return user
      }
    })
    setUsers(updateUsers)
  }

  const filteredUsers = users.filter(user => user.deleted === undefined);

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
          {filteredUsers &&
            filteredUsers.map((user) => {
              return (
                <tr onClick={() => handleClick(user.id, user.status)} key={user.id}>
                    <td>{user.name}</td> 
                    <td>{user.balance}</td> 
                  <td>
                      <Status status={user.status}>{user.status}</Status>
                  </td>
                  <td>
                      {
                        user.status === "APPROVED" &&
                            <>
                              <BiBlock onClick={(e) => handleStatus(e,user, "BLOCKED")} />
                              <BiEdit onClick={(e) => handleEdit(e, user.id)} />
                              <BiTrash onClick={(e) => handleDelete(e, user)} />
                            </>
                      }
                      {
                        user.status === "PENDING" && 
                        (
                          <>
                            <BiCheckCircle onClick={(e) => handleStatus(e,user, "APPROVED")} />
                            <BiXCircle onClick={(e) => handleStatus(e,user, "DENIED")} />
                          </>
                        )
                      }
                      {
                        user.status === "BLOCKED" &&
                          (
                            <>
                              <button onClick={(e) => handleStatus(e,user, "APPROVED")}>Unblock</button>
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
      svg {
        width: 2em;
        height: 1.5em;
        margin-left: 10px;
        color: rgba(117, 138, 229, 1);
      }
      button {
        padding: 8px 12px;
        border: none;
        background: rgba(117, 138, 229, 1);
        color: #fff;
        border-radius: 5px;
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
    td svg {
      color: #fff;
    }
    button {  
        background: #fff;
        color: rgba(117, 138, 229, 1);
      }
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

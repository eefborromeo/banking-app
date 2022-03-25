import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../store";

export default function UserSignUpForm({ title, isAdmin }) {
  const navigate = useNavigate();
  const userParams = useParams();
  const users = useStore((state) => state.users);
  const editUser = users.find((user) => user.id === parseInt(userParams.id));
  const addUser = useStore((state) => state.addUser);
  const setUsers = useStore((state) => state.setUsers);
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    balance: 0,
  });

  useEffect(() => {
    if (editUser) {
      setIsEditing(true);
      setUserInfo({
        name: editUser.name,
        email: editUser.email,
        username: editUser.username,
        password: editUser.password,
        balance: editUser.balance,
      });
    }
  }, [userParams, editUser]);

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, username, password, balance } = userInfo;

    const newUser = {
      id: users.length + 1,
      name,
      email,
      username,
      password,
      balance: parseInt(balance),
      status: "PENDING",
    };

    const nameList = users.map((user) => user.name);

    if (nameList.includes(name) && !isEditing) {
      alert(`the name "${name}" is already taken`);
    } else if (!isEditing && !isAdmin) {
      addUser(newUser);
      navigate(`/user/login`);
    } else if (!isEditing && isAdmin) {
      addUser({ ...newUser, status: "APPROVED" });
      navigate(`/admin/users`);
    } else if (isEditing) {
      const editedUser = users.map((user) => {
        if (user.id === editUser.id) {
          return {
            ...user,
            name,
            email,
            username,
            password,
            balance: parseInt(balance),
          };
        } else {
          return user;
        }
      });
      setUsers(editedUser);
      navigate(`/admin/users`);
    }
  };
  return (
    <Background>
      <Container>
        <h1>{title}</h1>
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userInfo.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="balance">Initial Balance</label>
            <input
              type="number"
              id="balance"
              value={userInfo.balance}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  background: #ebeaf1;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 50%;
  margin: auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
    color: #596dc4;
  }
`;

const Form = styled.form`
  label {
    color: ${(themes) => themes.theme.textColor};
    margin-bottom: 10px;
    display: block;
  }
  input {
    border: none;
    border-bottom: 2px solid rgb(236, 236, 236);
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    background: ${(themes) => themes.theme.inputBackground};
  }

  input:nth-child(2) {
    margin-bottom: 1rem;
  }

  button {
    display: block;
    margin-top: 1rem;
    margin-left: auto;
    border: none;
    padding: 0.8rem 1.8rem;
    background-color: #596dc4;
    color: white;
    border-radius: 5px;
    font-weight: bold;
  }
`;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../store";

export default function UserSignUpForm() {
  const navigate = useNavigate();
  const users = useStore((state) => state.users);
  const addUser = useStore((state) => state.addUser);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    balance: 0,
  });

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

    const user = {
      id: users.length + 1,
      name,
      email,
      username,
      password,
      balance: parseInt(balance),
      status: "PENDING",
    };

    const nameList = users.map((user) => user.name);

    if (nameList.includes(name)) {
      alert(`the name "${name}" is already taken`);
    } else {
      addUser(user);
      navigate(`/user`);
    }
  };
  return (
    <Background>
      <Container>
        <h1>Sign Up Form</h1>
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
          <button type="submit">Sign Up</button>
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

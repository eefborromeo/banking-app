import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../store";

export default function UserLoginForm() {
  const users = useStore((state) => state.users);
  const logIn = useStore((state) => state.userLogIn);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getUsers = users.map(({ username, password }) => {
      return {
        username,
        password,
      };
    });

    const matchedUser = getUsers.some(
      (user) => JSON.stringify(user) === JSON.stringify(values)
    );

    if (matchedUser) {
      const user = users.find((user) => user.username === values.username);
      if (user.status === "APPROVED") {
        logIn(user.id);
        navigate(`/user`);
      } else if (user.status === "PENDING") {
        alert('Your account is pending and waiting for approval.')
      } else if (user.status === "BLOCKED" || user.status === "DENIED") {
        alert('Your account has been blocked or denied. Please contact admin.')
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>User Login</Title>
      <Field>
        <label>Username:</label>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </Field>
      <button>Login</button>
    </Form>
  );
}

const Form = styled.form`
  height: 40vh;
  min-height: 300px;
  width: 25%;
  padding: 2rem;
  border-radius: 50px;
  background: #596dc4;
  color: #eee;
  position: absolute;
  margin: 0;
  top: 25%;
  left: 37%;

  button {
    display: block;
    border: #eee 2px solid;
    color: #eee;
    margin: 0 auto;
    font-size: 1.5rem;
    padding: 0.5rem 0.8rem;
    background: #596dc4;
    border-radius: 1rem;
    cursor: pointer;

    &:hover {
      background: #eee;
      color: #596dc4;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Field = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.2rem;
  }

  input {
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: none;
    border-radius: 1rem;
  }
`;

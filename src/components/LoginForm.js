import React, { useState } from "react";
import styled from "styled-components";
import { useStore } from "../store";

const admin = {
  username: "admin",
  password: "admin",
};

export default function LoginForm() {
  const logIn = useStore((state) => state.adminLogIn);
  const userLogOut = useStore((state) => state.userLogOut);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (JSON.stringify(admin) === JSON.stringify(values)) {
      userLogOut();
      logIn();
    } else {
      alert("wrong password!");
    }
  };

  return (
    <Form onSubmit={HandleSubmit}>
      <Title>Admin Login</Title>
      <Field>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
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

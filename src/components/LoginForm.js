import React, { useState } from "react";
import styled from "styled-components";
import useStore from "../store";

const admin = {
  username: "admin",
  password: "admin",
};

export default function LoginForm() {
  const logIn = useStore((state) => state.logIn);
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

    if (JSON.stringify(admin) == JSON.stringify(values)) {
      logIn();
    } else {
      alert("wrong password!");
    }
  };

  return (
    <Form onSubmit={HandleSubmit}>
      <Title>Admin Login</Title>
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
      <button>Submit</button>
    </Form>
  );
}

const Form = styled.form`
  height: 50vh;
  width: 25%;
  padding: 2rem;
  border-radius: 50px;
  background: #ccc;
  position: absolute;
  margin: 0;
  top: 25%;
  left: 37%;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 1.5rem;
  }
`;

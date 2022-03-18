import React from "react";
import styled from "styled-components";

export default function UserLoginForm() {
    return (
        <Form>
            <Title>User Login</Title>
            <Field>
            <label>Username:</label>
            <input
                name="username"
            />
            </Field>
            <Field>
            <label>Password:</label>
            <input
                type="password"
                name="password"
            />
            </Field>
            <button>Login</button>
        </Form>
    )
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
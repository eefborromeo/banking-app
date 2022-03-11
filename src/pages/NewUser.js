import React from "react";
import styled from "styled-components";

export default function NewUser() {
  return (
    <FormLayout>
      <h3>Add New User</h3>
      <div className="input">
        <p>Name</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>Initial Balance</p>
        <input type="number" />
      </div>
      <button type="submit">Add User</button>
    </FormLayout>
  );
}

const FormLayout = styled.form`
  background: #fff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  height: 35%;
  width: 30%;
  padding: 1em;

  h3 {
    text-align: left;
    font-size: 2rem;
    padding-bottom: 0.2em;
    border-bottom: black 1px solid;
    margin-bottom: 1em;
  }

  .input {
    margin: 1em 0;
  }

  input {
    margin-top: 0.5em;
    width: 100%;
    font-size: 1.5rem;
    border: 2px solid #3b84c6;
    border-radius: 0.3em;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  button {
    font-size: 1.5rem;
    display: block;
    margin-top: 2em;
    margin: 0 auto;
    border: none;
    background: #3b84c6;
    color: #eee;
    border-radius: 0.5em;
    padding: 0.5rem;
  }
`;

import React, { useState } from "react";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function User() {
  const navigate = useNavigate();
  const users = useStore((state) => state.users);
  const addUser = useStore((state) => state.addUser);

  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };
  const balanceInputHandler = (e) => {
    setBalance(parseInt(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      id: users.length + 1,
      name: name,
      balance: balance,
    };

    const nameList = users.map((user) => user.name);

    if (balance < 0) {
      alert("initial balance can't be negative");
    } else if (nameList.includes(name)) {
      alert(`the name "${name}" is already taken`);
    } else if (name === "") {
      alert("name can't be empty");
    } else {
      addUser(user);
      navigate("/admin/users");
    }
  };

  return (
    <Div className="box">
      <h1 className="bold">Create New User</h1>
      <Form onSubmit={submitHandler}>
        <div>
          <label className="bold" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={nameInputHandler}
            type="text"
          />
        </div>
        <div>
          <label className="bold" htmlFor="balance">
            Initial Balance
          </label>
          <input
            id="balance"
            value={balance}
            onChange={balanceInputHandler}
            type="number"
            min="0"
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Div>
  );
}

const Div = styled.div`
  color: ${(themes) => themes.theme.textColor};
  h1 {
    color: ${(themes) => themes.theme.thColor};
    font-size: 50px;
    text-align: center;
  }
`;

const Form = styled.form`
  input {
    border: none;
    border-bottom: 2px solid rgb(236, 236, 236);
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    background: ${(themes) => themes.theme.inputBackground};
    color: ${(themes) => themes.theme.thColor};
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

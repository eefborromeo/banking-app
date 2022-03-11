import React, { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  width: 70%;

  .box {
    background-color: #fff;
    border-radius: 15px;
    padding: 2rem;
    width: 80%;
    margin: auto;
    box-shadow: 0px 0px 5px 3px rgba(240, 240, 240, 1);

    h1 {
      color: #596dc4;
    }
  }

  form {
    input {
      border: none;
      border-bottom: 2px solid rgb(236, 236, 236);
      padding: 1rem;
      width: 100%;
      box-sizing: border-box;
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
  }
`;

export default function User({ users, setUsers }) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };
  const balanceInputHandler = (e) => {
    setBalance(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      id: users.length + 1,
      name: name,
      balance: balance,
    };

    setUsers([...users, user]);
    setName("");
    setBalance("");
  };

  return (
    <Content>
      <div className="box">
        <h1>Create New User</h1>
        <form onSubmit={submitHandler}>
          <div>
            <p>Name</p>
            <input value={name} onChange={nameInputHandler} type="text" />
          </div>
          <div>
            <p>Initial Balance</p>
            <input
              value={balance}
              onChange={balanceInputHandler}
              type="number"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Content>
  );
}

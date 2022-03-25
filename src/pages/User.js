import React from "react";
import { useStore } from "../store";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TransactionForm from "../components/TransactionForm";
import TransferForm from "../components/TransferForm";

export default function NewUser() {
  const users = useStore((state) => state.users);
  const loggedInUser = useStore((state) => state.currentUser);

  const userParams = useParams();
  const userId = userParams.id ? parseInt(userParams.id) : loggedInUser;
  const currentUser = users.find((user) => user.id === userId);

  return (
    <Content>
      <div className="box flex">
        <h1 className="bold">{currentUser.name}</h1>
        <p>
          Current Balance: <span className="bold">{currentUser.balance}</span>
        </p>
      </div>
      <div className="transactions">
        <div>
          <TransactionForm currentUser={currentUser} formType="deposit" />
          <TransactionForm currentUser={currentUser} formType="withdraw" />
        </div>
        <TransferForm currentUser={currentUser} />
      </div>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  flex: 1;
  padding: 2rem;

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .box {
    background-color: ${(themes) => themes.theme.boxBackground};
    border-radius: 15px;
    padding: 2rem;
    width: 100%;
    margin: 0 auto 1rem;

    h1 {
      color: ${(themes) => themes.theme.thColor};
      font-size: 50px;
    }

    p {
      color: ${(themes) => themes.theme.thColor};
      font-size: 30px;
    }

    span {
      font-size: 2rem;
      color: ${(themes) => themes.theme.thColor};
      font-size: 50px;
      margin-left: 10px;
    }
  }

  .transactions {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    gap: 10px;
    > div {
      flex: 1;
      color: ${(themes) => themes.theme.textColor};
    }
    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .box {
      box-sizing: border-box;
      height: 50%;
      width: 100%;
      margin: 0 0 10px;
      text-align: center;
    }
  }

  form {
    text-align: left;
  }

  label {
    display: block;
    margin-bottom: 1rem;
  }

  input {
    border: none;
    border-bottom: 2px solid rgb(236, 236, 236);
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1rem;
    background: ${(themes) => themes.theme.inputBackground};
    color: ${(themes) => themes.theme.textColor};
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
    :disabled {
      background-color: rgb(236, 236, 236);
    }
  }

  select {
    width: 100%;
    padding: 5px;
    outline: none;
    border: none;
    -o-border: none;
    border-bottom: 2px solid rgb(236, 236, 236);
    margin-bottom: 1rem;
    background: ${(themes) => themes.theme.inputBackground};
    color: ${(themes) => themes.theme.textColor};
    font-size: 20px;
  }

  textarea {
    width: 100%;
    height: 10vh;
    border: 2px solid rgb(236, 236, 236);
    background: ${(themes) => themes.theme.inputBackground};
  }
`;

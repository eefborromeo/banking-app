import React, { useState } from "react";
import useStore from "../store";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  width: 70%;
  flex: 1;
  padding: 2rem;

  .box {
    background-color: ${(themes) => themes.theme.boxBackground};
    border-radius: 15px;
    padding: 2rem;
    width: 80%;
    margin: 0 auto 1rem;

    h1 {
      color: #596dc4;
    }

    p {
      color: ${(themes) => themes.theme.textColor};
    }

    span {
      font-size: 2rem;
      color: #596dc4;
    }
  }

  .transactions {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    margin: auto;
    gap: 10px;
    > div {
      flex: 1;
      color: ${(themes) => themes.theme.textColor};
    }
    .box {
      box-sizing: border-box;
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
  }

  select {
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 2px solid rgb(236, 236, 236);
    margin-bottom: 1rem;
    background: ${(themes) => themes.theme.inputBackground};
    color: ${(themes) => themes.theme.textColor};
  }

  textarea {
    width: 100%;
    height: 10vh;
    border: 2px solid rgb(236, 236, 236);
    background: ${(themes) => themes.theme.inputBackground};
  }
`;

export default function NewUser() {
  const users = useStore((state) => state.users);
  const addToTransactionsLog = useStore((state) => state.addTransactionsLog);
  const userParams = useParams();
  const foundUser = users.find((user) => user.id == userParams.id);
  const [values, setValues] = useState({
    withdraw_amount: 0,
    deposit_amount: 0,
    transfer_amount: 0,
  });

  const [currentUser, setCurrentUser] = useState(foundUser);
  const [selectedId, setSelectedId] = useState(2);

  const changeHandler = (e) => {
    const key = e.target.id;
    const value = parseInt(e.target.value);
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const depositSubmitHandler = (e) => {
    e.preventDefault();
    setCurrentUser({
      ...currentUser,
      balance: (currentUser.balance += values.deposit_amount),
    });
  };

  const withdrawSubmitHandler = (e) => {
    e.preventDefault();
    if (currentUser.balance < values.withdraw_amount) {
      alert("you don't have enough money!");
    } else {
      setCurrentUser({
        ...currentUser,
        balance: (currentUser.balance -= values.withdraw_amount),
      });
    }
  };

  const handleSelectedChange = (e) => {
    setSelectedId(parseInt(e.target.value));
  };

  const handleSelectedSubmit = (e) => {
    e.preventDefault();
    if (values.transfer_amount > currentUser.balance) {
      alert(`You don't have enough money!`);
    } else {
      setCurrentUser({
        ...currentUser,
        balance: (currentUser.balance -= values.transfer_amount),
      });
      const selectedUser = users.find((user) => user.id === selectedId);
      selectedUser.balance += values.transfer_amount;

      const transaction = {
        sender: currentUser.name,
        reciever: selectedUser.name,
        amount: values.transfer_amount,
      };

      addToTransactionsLog(transaction);
    }
  };

  return (
    <Content>
      <div className="box">
        <h1>{currentUser.name}</h1>
        <p>
          Current Balance: <span>{currentUser.balance}</span>
        </p>
      </div>
      <div className="transactions">
        <div>
          <div className="box">
            <p>Withdraw</p>
            <form onSubmit={withdrawSubmitHandler}>
              <input
                id="withdraw_amount"
                type="number"
                value={values.withdraw_amount}
                onChange={changeHandler}
              />
              <button>Withdraw</button>
            </form>
          </div>
          <div className="box">
            <p>Deposit</p>
            <form onSubmit={depositSubmitHandler}>
              <input
                id="deposit_amount"
                value={values.deposit_amount}
                onChange={changeHandler}
                type="number"
              />
              <button>Deposit</button>
            </form>
          </div>
        </div>
        <div className="box">
          <p>Transfer</p>
          <form onSubmit={handleSelectedSubmit}>
            <label htmlFor="user">Account Name:</label>
            <select
              name="user"
              value={selectedId}
              onChange={handleSelectedChange}
            >
              {users.map((user) => {
                if (user.id !== currentUser.id) {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                }
              })}
            </select>
            <label htmlFor="transfer">Amount:</label>
            <input
              id="transfer_amount"
              type="number"
              name="transfer"
              value={values.transfer_amount}
              onChange={changeHandler}
            />
            <label htmlFor="remarks">Remarks:</label>
            <textarea></textarea>
            <button>Transfer</button>
          </form>
        </div>
      </div>
    </Content>
  );
}

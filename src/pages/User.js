import React, { useEffect, useState } from "react";
import useStore from "../store";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  const [selectedId, setSelectedId] = useState(0);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [search, setSearch] = useState('')
  const [searchList, setSearchList] = useState(users);
  const [isDisabled, setIsDisabled] = useState(true);

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

  const handleSelectedSubmit = (e) => {
    e.preventDefault();
    if (selectedId === 0) {
       alert(`Please select a user.`);
       return
    }
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
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
    search.length === 1 ? setSearchDisplay(false) : setSearchDisplay(true);
  }

  const handleClick = (e) => {
    setSearch(e.target.innerHTML);
    setSelectedId(parseInt(e.target.id));
    setSearchDisplay(false);
    setIsDisabled(false);
  }

  useEffect(() => {
    if (search === '') {
      setSearchList(users);
    } else {
      setSearchList(users.filter(user => user.name.toLowerCase().match(search.toLowerCase())))
    }
  }, [search, users])

  return (
    <Content>
      <div className="box flex">
        <h1 className="bold" >{currentUser.name}</h1>
        <p>
          Current Balance: <span className="bold">{currentUser.balance}</span>
        </p>
      </div>
      <div className="transactions">
        <div>
          <div className="box">
            <p className="bold">Withdraw</p>
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
            <p className="bold">Deposit</p>
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
          <p className="bold">Transfer</p>
          <form onSubmit={handleSelectedSubmit}>
            <label htmlFor="user">Account Name:</label>
            <Dropdown>
              <input id="user" value={search} onChange={handleSearch} autoComplete="off"/>
              {
                searchDisplay &&
                <div className="options">
                  {searchList.map((user) => {
                    if (user.id !== currentUser.id) {
                      return <div key={user.id} id={user.id} onClick={handleClick}>{user.name}</div>
                    }
                  })}
                </div>
              }
            </Dropdown>
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
            <button disabled={isDisabled} >Transfer</button>
          </form>
        </div>
      </div>
    </Content>
  );
}


const Content = styled.div`
  width:100%;
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

const Dropdown = styled.div`
  position: relative;
  .options {
    position: absolute;
    width: 100%;

    div {
      background: rgb(236,236,236);
      padding: 1rem;


      :hover {
        background: #596DC4;
        color: #fff;
      }
    }
  }

`
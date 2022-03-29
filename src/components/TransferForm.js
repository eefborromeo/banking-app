import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import styled from "styled-components";

export default function TransferForm({ currentUser }) {
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);
  const addToTransactionsLog = useStore((state) => state.addTransactionsLog);

  const [transactionValue, setTransactionValue] = useState(0);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState(users);
  const [isDisabled, setIsDisabled] = useState(true);

  const changeHandler = (e) => {
    setTransactionValue(parseInt(e.target.value));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    search.length === 1 ? setSearchDisplay(false) : setSearchDisplay(true);
  };

  const handleClick = (e) => {
    setSearch(e.target.innerHTML);
    setSelectedId(parseInt(e.target.id));
    setSearchDisplay(false);
    setIsDisabled(false);
  };

  useEffect(() => {
    if (search === "") {
      setSearchList(users);
    } else {
      setSearchList(
        users.filter((user) =>
          user.name.toLowerCase().match(search.toLowerCase())
        )
      );
    }
  }, [search, users]);

  const transactionSubmitHandler = (e) => {
    e.preventDefault();
    if (selectedId === 0) {
      alert(`Please select a user.`);
      return;
    }
    const selectedUser = users.find((user) => user.id === selectedId);
    const updatedUsers = users.map((user) => {
      if (user.id === currentUser.id) {
        return {
          ...user,
          balance: user.balance - transactionValue,
        };
      } else if (user.id === selectedUser.id) {
        return {
          ...user,
          balance: user.balance + transactionValue,
        };
      } else {
        return user;
      }
    });

    setUsers(updatedUsers);

    const transaction = {
      sender: currentUser.name,
      reciever: selectedUser.name,
      amount: transactionValue,
    };

    addToTransactionsLog(transaction);
  };

  return (
    <div className="box">
      <p className="bold">Transfer</p>
      <form onSubmit={transactionSubmitHandler}>
        <label htmlFor="user">Account Name:</label>
        <Dropdown>
          <input
            id="user"
            value={search}
            onChange={handleSearch}
            autoComplete="off"
          />
          {searchDisplay && (
            <div className="options">
              {searchList.map((user) => {
                if (user.id !== currentUser.id) {
                  return (
                    <div key={user.id} id={user.id} onClick={handleClick}>
                      {user.name}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </Dropdown>
        <label htmlFor="transfer">Amount:</label>
        <input
          id="transfer"
          type="number"
          name="transfer"
          value={transactionValue}
          onChange={changeHandler}
          min="0"
        />
        <label htmlFor="remarks">Remarks:</label>
        <textarea></textarea>
        <button data-testid="transfer-button" disabled={isDisabled}>Transfer</button>
      </form>
    </div>
  );
}

const Dropdown = styled.div`
  position: relative;
  .options {
    position: absolute;
    width: 100%;

    div {
      background: rgb(236, 236, 236);
      padding: 1rem;

      :hover {
        background: #596dc4;
        color: #fff;
      }
    }
  }
`;

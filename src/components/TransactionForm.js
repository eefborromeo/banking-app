import React, { useState } from "react";
import { useStore } from "../store";

export default function TransactionForm({ currentUser, formType }) {
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);

  const [transactionValue, setTransactionValue] = useState(0);

  const computedBalance = (balance) => {
    if (formType === "deposit") {
      return balance + transactionValue;
    } else if (formType === "withdraw") {
      return balance - transactionValue;
    }
  };

  const changeHandler = (e) => {
    setTransactionValue(parseInt(e.target.value));
  };

  const transactionSubmitHandler = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) => {
      if (user.id === currentUser.id) {
        return {
          ...user,
          balance: computedBalance(user.balance),
        };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
    setTransactionValue(0);
  };

  return (
    <div className="box">
      <p className="bold">{formType.toUpperCase()} BALANCE</p>
      <form onSubmit={transactionSubmitHandler}>
        <input
          data-testid="transaction-input"
          type="number"
          value={transactionValue}
          onChange={changeHandler}
          min="0"
        />
        <button data-testid="transaction-button">
          {formType.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

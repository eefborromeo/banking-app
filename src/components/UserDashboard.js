import React, { useState } from "react";
import { useStore } from "../store";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BiCreditCard } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";

export default function NewUser() {
  const users = useStore((state) => state.users);
  const loggedInUser = useStore((state) => state.currentUser);
  const setUsers = useStore((state) => state.setUsers);

  const userParams = useParams();
  const userId = userParams.id ? parseInt(userParams.id) : loggedInUser;
  const currentUser = users.find((user) => user.id === userId);
  const [values, setValues] = useState({
    expense_amount: 0,
  });

  const [expenseName, setExpenseName] = useState("");

  const totalExpenses = currentUser.expenseItems
    .map((items) => items.value)
    .reduce((previous, current) => previous + current, 0);

  const estimatedBalance = currentUser.balance - totalExpenses;


  const changeHandler = (e) => {
    const key = e.target.id;
    const value = parseInt(e.target.value);
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const expenseHandler = (e) => {
    setExpenseName(e.target.value);
  };

  const expenseSubmitHandler = (e) => {
    e.preventDefault();
    const expenseItemObject = {
      name: expenseName,
      value: values.expense_amount,
    };
    const updatedUsers = users.map((user) => {
      if (user.id === currentUser.id) {
        return {
          ...user,
          expenseItems: [...user.expenseItems, expenseItemObject],
        };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
    setValues((values) => ({ ...values, expense_amount: 0 }));
  };

  return (
    <Section>
      <div className="grid">
        <div className="rowOne">
          <div className="box expense">
            <h1 className="bold">Good Morning, {currentUser.name}</h1>
            <div className="mode">
              <BiCreditCard />
            </div>
            <h3 className="bold">Estimated Balance</h3>
            <h4>${estimatedBalance}</h4>
          </div>
          {/* EXPENSESSESESESES ITEMSSS */}
          <div className="box">
            <p className="bold">Expenses</p>
            <form onSubmit={expenseSubmitHandler}>
              <input
                id="expense_name"
                value={expenseName}
                onChange={expenseHandler}
                type="text"
              />
              <input
                id="expense_amount"
                value={values.expense_amount}
                onChange={changeHandler}
                type="number"
                min="0"
              />
              <button>
                <GrAdd />
              </button>
            </form>
            <div>
              {currentUser.expenseItems.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.name} -{item.value}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100%;

  .grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${(themes) => themes.theme.textgitColor};

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

    .bold {
      font-size: 40px;
      line-height: 50px;
      text-align: center;
    }

    .rowOne {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 40%;
      gap: 1rem;
    }

    .rowTwo {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 40%;
    }

    .box {
      width: 100%;
      height: 100%;
    }
    .expense {
      background-color: ${(themes) => themes.theme.boxBackground};
      width: 100%;
      height: 100%;
      text-align: center;

      h1 {
        font-size: 60px;
        line-height: 50px;
      }
      h2 {
        font-size: 20px;
        line-height: 50px;
      }
      .mode {
        font-size: 100px;
        line-height: 5px;
      }
      h3 {
        font-size: 40px;
        line-height: 10px;
        font-family: "Bebas Neue", cursive;
      }
      h4 {
        font-size: 40px;
        line-height: 100px;
        font-family: "Bebas Neue", cursive;
      }
    }
  }
`;

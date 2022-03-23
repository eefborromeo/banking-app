import React from "react";
import styled from "styled-components";
import { useStore } from "../store.js";

export default function Transfers() {
  const transactions = useStore((state) => state.transactionsLog);

  return (
    <Section>
      <div className="title">
        <h2 className="bold">Your Transfers</h2>
      </div>
      <div className="transactions" data-testid="transactions-list">
        {transactions.map((transaction, idx) => {
          return (
            <div className="transaction" key={idx}>
              <div className="transactionTitle">
                <div className="transactionTitleDetails">
                  <h3 data-testid={`transaction-${idx}`}>
                    From {transaction.sender} to {transaction.reciever}
                  </h3>
                </div>
              </div>
              <div className="transactionAmount">
                <span className="bold" data-testid={`amount-${idx}`}>
                  {transaction.amount}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 1rem 2rem 3rem 2rem;
  border-radius: 1rem;
  background: ${(themes) => themes.theme.boxBackground};
  font-family: "Bebas Neue", cursive;
  color: ${(themes) => themes.theme.textColor};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;

  .title {
    h2 {
      color: ${(themes) => themes.theme.thColor};
      font-size: 50px;
      text-align: center;
    }
  }

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    font-size: 18px;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 15px;
    }
    .transactionAmount {
      padding: 0.2rem 0.5rem;
      width: 4rem;
      border-radius: 1rem;
      text-align: center;
      transition: 0.3s ease-in-out;
      font-size: 20px;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;

import React from "react";
import styled from "styled-components";

export default function Transfers() {
  const transactions = [
    {
      sender: "spike",
			reciever: "mel",
			method: "Transfer",
      amount: "$50",
    },
    {
      sender: "mel",
			reciever: "",
			method: "Deposit",
      amount: "$1000",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Your Transfers</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transactionTitle">
                <div className="transactionTitleDetails">
                  <h3>From {transaction.sender} to {transaction.reciever}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transactionAmount">
                <span>{transaction.amount}</span>
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

  .title {
    h2 {
      color: #596dc4;
      font-size: 30px;
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
    }
		.transactionAmount {
			padding: 0.2rem 0.5rem;
			width: 4rem;
			border-radius: 1rem;
			text-align: center;
			transition: 0.3s ease-in-out;
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

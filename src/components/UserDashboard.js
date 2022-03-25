import React from "react";
import styled from "styled-components";
import GreetBar from "./users/GreetBar";
import Balance from "./users/Balance";
import ExpenseItems from "./users/ExpenseItems";
import Withdraw from "./users/Withdraw";
import Deposit from "./users/Deposit";
import Transfer from "./users/Transfer";

export default function NewUser() {
  return (
    <ParentDiv>
      <GreetBar />
      <FirstDiv className="grid-one">
        <Balance />
        <ExpenseItems />
      </FirstDiv>
      <SecondDiv className="grid-two">
        <Withdraw />
        <Deposit />
        <Transfer />
      </SecondDiv>
    </ParentDiv>
  );
}

const ParentDiv = styled.div`
  background-color: rgb(227, 231, 252);
  padding: 0 2rem;
  span {
    font-weight: 700;
    color: rgb(109, 109, 109);
  }
`;

const FirstDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  height: 40%;
  .top__card {
    @include getCardStyles;
  }
  @include getMonthlyFollowersStyles;
  margin-bottom: 1rem;
`;

const SecondDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  height: 40%;

  @include getTrendingTracksStyles;
  @include getTrendingUsersStyles;
  @include getUserActivityStyles;
`;

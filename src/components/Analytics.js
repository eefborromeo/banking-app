import React from "react";
import styled from "styled-components";
import useStore from "../store";

export default function Analytics() {
  const users = useStore((state) => state.users);
  const total = (users.reduce((total,currentItem) =>  total = total + currentItem.balance , 0 ));
  const richestUser = (users.reduce((prevUser, currentUser) => (prevUser.balance < currentUser.balance) ? currentUser : prevUser));
  const poorestUser = (users.reduce((prevUser, currentUser) => (prevUser.balance > currentUser.balance) ? currentUser : prevUser));
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>Total Money In Account</h5>
          <h2 className="bold">
            {total}
          </h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Total Users in Account</h5>
          <h2 className="bold"> {users.length} </h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Richest User</h5>
          <h2 className="bold">{richestUser.balance}</h2>
          <h3 className="bold">{richestUser.name}</h3>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Poorest User</h5>
          <h2 className="bold">{poorestUser.balance}</h2>
          <h3 className="bold">{poorestUser.name}</h3>
        </div>
      </div>
    </Section>
  );
}


const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  h5 {
    font-size: 20px;
    margin: 0px;
    padding: 0px;
    line-height:5rem;
    
  }
  h2 {
    font-size: 60px;
    color: #596dc4;
  }
  h3 {
    font-size: 40px;
    color: #596dc4;
  }


  .analytic {
    border-radius: 1rem;
    background: ${(themes) => themes.theme.boxBackground};
    color: ${(themes) => themes.theme.textColor};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Bebas Neue', cursive;
    text-align: center;
    
    }
  

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
 
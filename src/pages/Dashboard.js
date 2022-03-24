import React from "react";
import styled from "styled-components";
import Analytics from "../components/Analytics";
import Transfers from "../components/Transfers";
import Profile from "../components/Profile";
import Background from "../images/adminbg.png";

export default function Dashboard() {
  return (
    <Section>
      <div className="grid">
        <div className="rowOne">
        <Profile />
        </div>
        <div className="rowTwo">
        <Analytics />
        <Transfers />
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
    height: 100%;
    gap: 1rem;

    .rowOne {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      height: 20%;
      border-radius: 1rem;
      gap: 1rem;
      background-image: url(${Background});
      background-repeat: no-repeat;
      background-size: cover;
    }

    .rowTwo {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;


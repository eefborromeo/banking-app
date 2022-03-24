import React from "react";
import styled from "styled-components";

export default function Profile() {
  return (
    <Section>
    <div className="greeting">
      <h2 className="bold">Good Morning, Admin!</h2>
      <h5>
        What would you like to do today?
      </h5>
    </div>
    </Section>
  )
}
const Section = styled.div`
padding: 1rem 2rem 3rem 2rem;
border-radius: 1rem;
color: ${(themes) => themes.theme.thColor};
font-family: "Bebas Neue", cursive;


.greeting {
  text-align: left;
  h2,
  h5 {
    font-size: 5rem;
  }
  h5 {
    font-size: 2rem;
  }
}

`
;



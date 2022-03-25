import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import logo from "../images/logo.png"
import phone from "../images/phone.png"

export default function Home() {
  return (
    <Background>
      <NavContainer>
        <LogoContainer>
          <img src={logo} alt="Cashpoint Logo"/>
        </LogoContainer>
        <div>
          <Link to="user/signup"><button>Sign Up</button></Link>
          <Link to="user/login"> <button>Login</button></Link>
        </div>
      </NavContainer>
      <FlexContainer>
        <div>
          <h1>Coming Soon!</h1>
          <p>Our team is actively working on this project. See you around!</p>
          <div>
            <p>Sign up to get early access!</p>
            <form>
              <input type="text"/>
              <button>Add me!</button>
            </form>
          </div>
        </div>
        <ImageContainer>
          <img src={phone} alt="Cashpoint App" />
        </ImageContainer>
      </FlexContainer>
    </Background>
  );
}

const Background = styled.div`
  height: 100%;
  background-color: #596dc4;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  button {
    border: none;
    background-color: #415195;
    padding: 1rem 2rem;
    border-radius: 30px;
    color: #fff;
    font-weight: 600;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
      filter: brightness(200%)
    }
  }
`

const LogoContainer = styled.div`
  width: 15%;
  padding: 2rem;
  display: block;
  > img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: auto;
  > div {
    color: #fff;
    div {
      margin-top: 2rem;
    }
  }
  h1 {
    font-size: 70px;
    margin-bottom: 1rem;
  }
  p {
    font-size: 30px;
    margin-bottom: 1rem;
  }

  input {
    border: none;
    width: 60%;
    padding: 1rem;
    border-radius: 30px;
  }

  button {
    border: none;
    margin-left: 20px;
    background-color: #415195;
    padding: 1rem 2rem;
    border-radius: 30px;
    color: #fff;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 70%;
    margin: auto;
    padding-bottom: 2rem;
    justify-content: center;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
    }
    input {
      width: 40%;
    }
    button {
    margin-left: 5px;

    }
  }
`

const ImageContainer = styled.div`
  width: 80%;
  img {
    width: 85%;
    height: 85vh;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    width: 100%;
    order: -1;
  }
`

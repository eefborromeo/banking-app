import React from "react";
import { Link } from "react-router-dom";
import { MdSendToMobile } from "react-icons/md"
import { BiWallet } from "react-icons/bi"
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
          <h1>Banking & Budgeting Made Simple</h1>
          <p>Banking has never been easier! Say goodby to endless paperwork and branch visits.</p>
          <p>Open your account today!</p>
          <BoxContainer>
            <Box>
              <MdSendToMobile />
              <h2>Make cashless payments</h2>
              <p>Fast, secure, easy payments and transfers </p>
            </Box>
            <Box>
              <BiWallet />
              <h2>Save even when you spend</h2>
              <p>We are commited to helping you find solutions for your financial needs and goals</p>
            </Box>
          </BoxContainer>
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
  margin: auto;
  line-height: 1.5;
  > div {
    color: #fff;
    flex: 1;
    div {
      margin-top: 2rem;
    }
  }
  h1 {
    font-size: 50px;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  p {
    font-size: 25px;
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
  flex: 1;
  img {
    width: 100%;
    height: 85vh;
    object-fit: contain;
    display: block;
    margin: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    order: -1;
  }
`

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Box = styled.div`
  flex: 50%;
  margin: 0 10px;
  background-color: #415195;
  padding: 0px 30px 30px;
  border-radius: 10px;
  position: relative;
  svg {
    margin-bottom: 10px;
    background-color: #6985ff;
    width: 80px;
    height: 80px;
    padding: 20px;
    border-radius: 100%;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);

  }
  h2 {
    margin-top: 60px;
    font-weight: bold;
    font-size: 20px;
  }
  p {
    font-size: 18px;
    padding-top: 10px;
  }
`

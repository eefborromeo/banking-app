import React from "react";
import styled from "styled-components";

export default function UserSignUpForm() {
    return (
        <Background>
            <Container>
                <h1>Sign Up Form</h1>
                <Form >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div>
                        <label htmlFor="balance">Initial Balance</label>
                        <input type="number" id="balance" />
                    </div>
                    <button type="submit">Sign Up</button>
                </Form>
            </Container>
        </Background>
    )
}

const Background = styled.div`
    background: #ebeaf1;
    height: 100%;
    display: flex;
`

const Container = styled.div`
    width: 50%;
    margin: auto;
    background: #fff;
    padding: 2rem;
    border-radius: 10px;

    h1 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 10px;
        color: #596dc4;
    }
`;

const Form = styled.form`
  label {
    color: ${(themes) => themes.theme.textColor};
    margin-bottom: 10px;
    display: block;
  }
  input {
    border: none;
    border-bottom: 2px solid rgb(236, 236, 236);
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    background: ${(themes) => themes.theme.inputBackground};
  }

  input:nth-child(2) {
    margin-bottom: 1rem;
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
  }
`;
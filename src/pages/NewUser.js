import React from "react";
import styled from 'styled-components';

const Container  = styled.main`
    display: flex;
    height: 100vh;
`;

const SideBar = styled.div`
    background: #222;
    border-right: 2px solid rgb(236, 236, 236);
    width: 15vw;
    padding: 2rem;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    ul {
        list-style-type: none;
        padding: 0;
        font-size: 1rem;
        li {
            padding: 1rem 1rem 1rem 0;
        }
    }
`;

const Content = styled.div`
    background-color: rgb(236, 236, 236);
    flex: 1;
    padding: 2rem;

    form {
        background-color: #fff;
        padding: 2rem;
        border-radius: 15px;
        width: 80%;

        input {
            border: none;
            border-bottom: 2px solid rgb(236, 236, 236);
            width: 100%;
        }

        input:nth-child(2) {
            margin-bottom: 1rem;
        }

        button {
            display: block;
            margin-top: 1rem;
            margin-left: auto;
            border: none;
            padding: .8rem 1.8rem;
            background-color: #222;
            color: white;
            border-radius: 5px;
            font-weight: bold;
        }
    }
`;

export default function NewUser() {
    return (
        <Container>
            <SideBar>
                <div>
                    LOGO
                </div>
                <ul>
                    <li>Create User</li>
                    <li>All Users</li>
                </ul>
            </SideBar>
            <Content>
                <h1>Create New User</h1>
                <form>
                    <div>
                        <p>Name</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Initial Balance</p>
                        <input type="number" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </Content>
        </Container>
    )
}


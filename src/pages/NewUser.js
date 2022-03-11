import React from "react";
import styled from 'styled-components';

const Container  = styled.main`
    display: flex;
    height: 100vh;
`;

const SideBar = styled.div`
    ${'' /* background: #222; */}

    width: 20vw;
    padding: 2rem;
    ${'' /* color: #fff; */}
    font-weight: bold;
    font-size: 2rem;

    div {
        color: #596DC4;
        margin-bottom: 2rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
        font-size: 1rem;
        li {
            padding: 1rem;
        }

        li:first-child {
            background: #596DC4;
            color: white;
            border-radius: 10px;
        }
    }
`;

const Content = styled.div`
    background-color: rgba(244, 244, 244, .69);
    flex: 1;
    padding: 2rem;
    .box {
        background-color: #fff;
        border-radius: 15px;
        padding: 2rem;
        width: 80%;
        margin: auto;
        box-shadow: 0px 0px 5px 3px rgba(240, 240, 240, 1);

        h1 {
            color: #596DC4;
        }
    }

    form {
        input {
            border: none;
            border-bottom: 2px solid rgb(236, 236, 236);
            padding: 1rem;
            width: 100%;
            box-sizing: border-box;
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
            background-color: #596DC4;
            color: white;
            border-radius: 5px;
            font-weight: bold;
        }
    }
`;

export default function User() {
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
                <div className="box">
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
                </div>
            </Content>
        </Container>
    )
}


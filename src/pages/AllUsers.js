import React from "react";
import styled from 'styled-components';

const Container  = styled.main`
    display: flex;
    height: 100vh;
`;

const SideBar = styled.div`
    width: 20vw;
    padding: 2rem;
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

        li:last-child {
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
        background: #fff;
        border-radius: 10px;
        padding: 1rem 2rem;
        box-shadow: 0px 0px 5px 3px rgba(240, 240, 240, 1);
        width: 80%;
        margin: auto;

        h1 {
            color: #596DC4
        }
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    tr {
            border-bottom: 1px solid rgba(128, 128, 128, 0.45);
        th {
            text-align: left;
            padding: 1rem 0;
            color: #596DC4
        }
        td {
            padding: 1rem .5rem;
        }
    }

    tbody tr:last-child {
        border-bottom: none;
    }

    tbody tr:hover {
        background-color: rgba(117, 138, 229, 1);
        color: white;
    }
    
`

export default function AllUsers() {
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
                    <h1>All Users</h1>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td>1000</td>
                                </tr>
                            </tbody>
                        </Table>
                </div>
            </Content>
        </Container>
    )
}


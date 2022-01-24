import React, { useState } from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import LoginInput from "../../components/loginInput/loginInput";

const LoginWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const LoginContainer = styled.div`
    width: 700px;
    height: 400px;
    background-color: white;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsername: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        console.log(username);
        setUsername(event.target.value);
    };
    const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setPassword(event.target.value);
    };

    return (
        <LoginWrapper>
            <LoginContainer>
                {username}
                <LoginInput
                    onChange={handleUsername}
                    error={false}
                    padding="10px"
                    borderRadius="4px"
                />
                <LoginInput
                    onChange={handlePassword}
                    error={false}
                    padding="10px"
                    borderRadius="4px"
                    password={true}
                />
                <div></div>
            </LoginContainer>
        </LoginWrapper>
    );
};

export default Login;

/*
                <LoginInput
                    error={null}
                    styledFocus={false}
                    errorBox={false}
                    borderRadius="4px"
                    noMargin={false}
                    value={""}
                    placeholder="Password"
                    onChange={handleUsername}
                />
                */

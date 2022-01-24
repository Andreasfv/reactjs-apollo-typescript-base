import React from "react";
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
    width: 400px;
    height: 200px;
    background-color: white;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
`;

const Login = () => {
    return (
        <LoginWrapper>
            <LoginContainer>
                <LoginInput
                    width={""}
                    fullWidth={false}
                    label={"Username"}
                    error={false}
                />
            </LoginContainer>
        </LoginWrapper>
    );
};

export default Login;

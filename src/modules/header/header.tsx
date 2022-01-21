import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/button/customButton";
import { LOGIN_USER, LoginData } from "../../util/queries/user";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
const HeaderWrapper = styled.header`
    grid-area: header;
    background-color: red;
`;
interface Props {
    mobile: boolean;
}
const Header: React.FC<Props> = () => {
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [loginUser, { loading, error, data }] =
        useMutation<LoginData>(LOGIN_USER);
    const auth = useContext(AuthContext);
    const usernameRef = useRef();
    const paasswordRef = useRef();
    const handleUsername: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setUsernameValue(event.target.value);
    };

    const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setPasswordValue(event.target.value);
    };
    const handleLogin = () => {
        loginUser({
            variables: { username: usernameValue, password: passwordValue },
        }).then((result) => {
            console.log(data, "whatever this -> is ", result);
            if (data && data.data.login.ok) {
                auth?.setUser(data.data.login.user);
            }
        });
    };

    useEffect(() => {}, [data, error, loading]);

    return (
        <HeaderWrapper>
            username
            <input onChange={handleUsername} value={usernameValue} />
            passwørd
            <input onChange={handlePassword} value={passwordValue} />
            <Button primary className="loginBTN" onClick={handleLogin}>
                Rogin
            </Button>
            {loading ? <>LOOAAADING</> : null}
            {error ? <p>{error.message}</p> : null}
            {data ? <p>GOTTEM</p> : null}
        </HeaderWrapper>
    );
};

export default Header;

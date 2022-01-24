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
    background-color: violet;
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
        });
        // .then((result) => {
        //     console.log(data, "whatever this -> is ", result);
        //     if (data && data.login.ok) {
        //         auth?.setUser(data.login.user);
        //     }
        // });
    };
    useEffect(() => {
        if (data && data.login.ok && auth) {
            auth.setUser(data.login.user);
            auth.setToken(data.login.token);
            console.log(data?.login.user?.firstName);
        }
    }, [data, error, loading]);

    return (
        <HeaderWrapper>
            username
            <input onChange={handleUsername} value={usernameValue} />
            passwørd
            <input onChange={handlePassword} value={passwordValue} />
            <Button primary className="loginBTN" onClick={handleLogin}>
                Rogin
            </Button>
            <div>
                {loading ? <>LOOAAADING</> : null}
                {error ? <p>{error.message}</p> : null}
                {auth ? (
                    <p>{`${auth.user?.username} - ${auth.token}`}</p>
                ) : null}
            </div>
        </HeaderWrapper>
    );
};

export default Header;

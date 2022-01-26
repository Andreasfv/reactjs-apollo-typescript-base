import React, { useContext, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../../components/button/customButton";
import LoginInput from "../../components/loginInput/loginInput";
import AuthContext from "../../context/authcontext";
import theme from "../../themes/light.theme";
import { LOGIN_USER, LoginData } from "../../util/queries/user";
import ErrorBox from "./ErrorBox";

interface LoginWrapper {
    ref: React.MutableRefObject<HTMLDivElement | null>;
}

//TODO Make gucci for phones and generally fix css :)) should be done in spare time
const LoginWrapper = styled.div<LoginWrapper>`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.background};
`;

const LoginContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.background};
`;

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const loginWindowRef = useRef<HTMLDivElement>(null);
    const auth = useContext(AuthContext);
    const [loginUser, { loading, data }] = useMutation<LoginData>(LOGIN_USER);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const navigate = useNavigate();

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

    const handleLogin = () => {
        loginUser({
            variables: { username: username, password: password },
        })
            .then((x) => {
                console.log(x);
                if (x.data?.login.token) {
                    localStorage.setItem("token", x.data?.login.token);
                    setError(undefined);
                    navigate("../frontpage", { replace: true });
                } else {
                    throw new Error("Invalid login");
                }
            })
            .catch((err) => {
                setError(err);
                console.log("Catched error", err);
            });
        // .then((result) => {
        //     console.log(data, "whatever this -> is ", result);
        //     if (data && data.login.ok) {
        //         auth?.setUser(data.login.user);
        //     }
        // });
    };

    const handleSignUp: React.MouseEventHandler<HTMLButtonElement> = () => {
        alert("Not yet implemented");
    };

    const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> = (
        event
    ) => {
        if (event.key == "Enter") {
            handleLogin();
        }
    };

    useEffect(() => {
        console.log("Idk");
    });

    useEffect(() => {
        if (data && data.login.ok && auth) {
            auth.setUser(data.login.user);
            auth.setToken(data.login.token);
            setError(undefined);
        }
    }, [data, error, loading]);

    return (
        <LoginWrapper ref={loginWindowRef}>
            <LoginContainer>
                <LoginInput
                    onChange={handleUsername}
                    onKeyDown={handleKeydown}
                    error={false}
                    padding="10px"
                    borderRadius="4px"
                />
                <LoginInput
                    onChange={handlePassword}
                    onKeyDown={handleKeydown}
                    error={false}
                    padding="10px"
                    borderRadius="4px"
                    password={true}
                />
                <Button onClick={handleLogin} error={false}>
                    Login
                </Button>
                <Button onClick={handleSignUp} error={false}>
                    Sign up!
                </Button>
                <ErrorBox error={error} />
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

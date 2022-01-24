import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/button/customButton";
import { LOGIN_USER, LoginData } from "../../util/queries/user";
import AuthContext from "../../context/authcontext";
import { useContext } from "react";

const HeaderWrapper = styled.header`
    grid-area: header;
    background-color: violet;
    height: 70px;
    display: flex;
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

    // TODO LOGIN SHOULD NOT BE HERE, this was dumb
    const handleLogin = () => {
        console.log("I AM RUN aka handleLogin");
        loginUser({
            variables: { username: usernameValue, password: passwordValue },
        }).then((x) => {
            console.log(x);
            if (x.data?.login.token)
                localStorage.setItem("token", x.data?.login.token);
        });
        // .then((result) => {
        //     console.log(data, "whatever this -> is ", result);
        //     if (data && data.login.ok) {
        //         auth?.setUser(data.login.user);
        //     }
        // });
    };

    const handleLogout = () => {
        auth?.setUser(null);
        auth?.setToken(null);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        if (data && data.login.ok && auth) {
            auth.setUser(data.login.user);
            auth.setToken(data.login.token);
        }
    }, [data, error, loading]);

    return (
        <HeaderWrapper>
            {auth && auth.user != null ? (
                <div>
                    Vælkømn {auth.user?.firstName}
                    <Button
                        primary
                        className="logoutBTN"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>
            ) : (
                <p>Public Header</p>
            )}

            <div>
                {loading ? <>LOOAAADING</> : null}
                {error ? <p>{error.message}</p> : null}
                {auth && auth.user != null ? (
                    <p>{`Username: ${auth.user?.username} - Name: ${auth.user.name}`}</p>
                ) : null}
            </div>
        </HeaderWrapper>
    );
};

export default Header;

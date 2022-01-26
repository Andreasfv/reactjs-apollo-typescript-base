import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/button/customButton";
import { LOGIN_USER, LoginData } from "../../util/queries/user";
import AuthContext, { AuthContextType } from "../../context/authcontext";
import { useContext } from "react";
import theme from "../../themes/light.theme";
interface HeaderWrapperProps {
    auth: AuthContextType | null;
}
const HeaderWrapper = styled.header<HeaderWrapperProps>`
    grid-area: header;
    background-color: ${theme.accent};
    height: 70px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid black;
    max-height: 70px;
    z-index: 9999;

    button {
        background-color: ${(props) => props.theme.accent};
        position: relative;
        border: none;
        align-self: center;
        margin-left: auto;
        margin-right: 6px;
        height: 100%;
        padding: 4px;
    }

    button::before {
        content: "";
        left: -6px;
        height: 70%;
        top: 15%;
        background: gray;
        width: 1px;
        position: absolute;
    }
`;

const LogoutButton = styled(Button)``;
interface Props {
    mobile: boolean;
}
const Header: React.FC<Props> = () => {
    const auth = useContext(AuthContext);

    const handleLogout = () => {
        auth?.setUser(null);
        auth?.setToken(null);
        localStorage.removeItem("token");
    };

    useEffect(() => {}, [auth]);

    return (
        <HeaderWrapper className="header" auth={auth}>
            <div className="Logo">
                {auth && auth.user != null ? (
                    <p>{`Username: ${auth.user?.username} - Name: ${auth.user.name}`}</p>
                ) : null}
            </div>
            {auth && auth.user != null ? (
                <button className="logoutButton" onClick={handleLogout}>
                    Logout
                </button>
            ) : (
                <p>Public Header</p>
            )}
        </HeaderWrapper>
    );
};

export default Header;

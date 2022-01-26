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
    justify-content: center;
    z-index: 9999;
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
        <HeaderWrapper auth={auth}>
            <div>
                {auth && auth.user != null ? (
                    <p>{`Username: ${auth.user?.username} - Name: ${auth.user.name}`}</p>
                ) : null}
            </div>
            {auth && auth.user != null ? (
                <LogoutButton
                    primary
                    className="logoutBTN"
                    onClick={handleLogout}
                    error={false}
                    width={"150px"}
                    margin="0.25em 0.25em 0.25em auto"
                    borderRadius="5px"
                    height="90%"
                    justifySelf="flex-end"
                    padding="0px"
                >
                    Logout
                </LogoutButton>
            ) : (
                <p>Public Header</p>
            )}
        </HeaderWrapper>
    );
};

export default Header;

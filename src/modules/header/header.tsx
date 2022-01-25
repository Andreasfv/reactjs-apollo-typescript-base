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

    const auth = useContext(AuthContext);

    //TODO function should not exist in login and
    const handleLogout = () => {
        auth?.setUser(null);
        auth?.setToken(null);
        localStorage.removeItem("token");
    };

    useEffect(() => {}, [auth]);
    return (
        <HeaderWrapper>
            {auth && auth.user != null ? (
                <div>
                    Vælkømn {auth.user?.firstName}
                    <Button
                        primary
                        className="logoutBTN"
                        onClick={handleLogout}
                        error={false}
                    >
                        Logout
                    </Button>
                </div>
            ) : (
                <p>Public Header</p>
            )}

            <div>
                {auth && auth.user != null ? (
                    <p>{`Username: ${auth.user?.username} - Name: ${auth.user.name}`}</p>
                ) : null}
            </div>
        </HeaderWrapper>
    );
};

export default Header;

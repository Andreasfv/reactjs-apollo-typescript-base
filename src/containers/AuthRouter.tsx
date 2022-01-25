import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FrontPage from "../modules/frontpage";
import Bootstrap from "./bootstrap";
import Login from "../modules/login/Login";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    //Redirect,
} from "react-router-dom";
import AllShifts from "../modules/allshifts";
import { useMutation } from "@apollo/client";
import {
    GetUserWithToken,
    GET_USER_WITH_TOKEN,
    VerifyUser,
    VERIFY_USER,
} from "../util/queries/user";
import User from "../types/User";
import AuthContext from "../context/authcontext";
interface Props {
    mobile: boolean;
}

// Query? after login I think, idk. this page should contain the setup after loging inn.
//
interface MainLayoutProps {
    mobile: boolean;
}
const MainLayout = styled.div<MainLayoutProps>`
    ${(props) => (props.mobile ? `` : ``)}
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-column-gap: 1em;
    background: lightgray;
`;

// const ContentWrapper = styled.main`
//     background-color: ${props => props.theme.colors.primary}
// `

interface ContentWrapperProps {}
const ContentWrapper = styled.main`
    background-color: lightgray;
`;
interface HeaderWrapperProps {
    mobile: boolean;
}
const HeaderWrapper = styled.header<HeaderWrapperProps>`
    ${(props) =>
        props.mobile
            ? `
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4900;
    `
            : `grid-area: header`}
`;

interface RouterProps {}
const AuthRouter: React.FC<RouterProps> = (props) => {
    //Unsure, but this functionality should probably be moved to its own authContext file.
    const [getCookdUser, { loading, error, data }] =
        useMutation<GetUserWithToken>(GET_USER_WITH_TOKEN);
    const [auth, setAuth] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    //-----------------------------------------------------
    // TODO Get user from Cookies/somewhere, think I'll just use something jank till I know best practice.
    useEffect(() => {
        if (localStorage.getItem("token") != null) {
            let cookiedToken = localStorage.getItem("token");
            getCookdUser({ variables: { token: cookiedToken } }).then(
                ({ data }) => {
                    if (data?.errors == null && data?.verifyUser.user) {
                        console.log("Cookie user", data?.verifyUser);
                        setAuth(data?.verifyUser.user);
                        setToken(data.verifyUser.loginToken);
                    }
                }
            );
        }
        //getCookdUser({variables: {token: }})
    }, []);
    return (
        <AuthContext.Provider
            value={{
                user: auth,
                setUser: setAuth,
                token: token,
                setToken: setToken,
            }}
        >
            <Router>
                <Routes>
                    <>{auth ? auth?.username : ""}</>
                    <Route path="/" element={<Bootstrap />}>
                        <Route path="/frontpage" element={<FrontPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/mordi"
                            element={
                                <div>MORDI fortjener en blomst {"<3"}</div>
                            }
                        />
                        <Route path="/shifts" element={<AllShifts />} />
                    </Route>
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
};

export default AuthRouter;

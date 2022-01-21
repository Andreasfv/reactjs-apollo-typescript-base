import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FrontPage from "../modules/frontpage";
import Bootstrap from "./bootstrap";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    //Redirect,
} from "react-router-dom";
import AllShifts from "../modules/allshifts";
import { useMutation } from "@apollo/client";
import { VERIFY_USER } from "../util/queries/user";
import User from "../types/User";
import AuthContext from "../context/AuthContext";

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
    const [getCookdUser, { loading, error, data }] = useMutation(VERIFY_USER);
    const [auth, setAuth] = useState<User | null>(null);
    console.log("authRouter", props);
    useEffect(() => {
        //getCookdUser({variables: {token: }})
        console.log(auth);
    }, [auth]);
    return (
        <AuthContext.Provider
            value={{
                user: auth,
                setUser: setAuth,
            }}
        >
            <Router>
                <Routes>
                    <>{auth ? auth?.username : ""}</>
                    <Route path="/" element={<Bootstrap />}>
                        <Route path="/frontpage" element={<FrontPage />} />
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

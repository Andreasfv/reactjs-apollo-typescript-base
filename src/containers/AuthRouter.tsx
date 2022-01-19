import React from "react";
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
const AuthRouter: React.FC<RouterProps> = () => {
    console.log("ROUTER WAS LOADED");
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Bootstrap />}>
                    <Route path="/frontpage" element={<FrontPage />} />
                    <Route
                        path="/mordi"
                        element={<div>MORDI fortjener en blomst {"<3"}</div>}
                    />
                    <Route path="/shifts" element={<AllShifts />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AuthRouter;

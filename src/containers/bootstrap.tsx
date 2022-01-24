import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import useMedia from "../util/hooks/media";
import Header from "../modules/header/header";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

// Query? after login I think, idk. this page should contain the setup after loging inn.
//
interface MainProps {
    mobile: boolean;
}
const Main = styled.div<MainProps>`
    display: flex;
    background-color: lightblue;
    ${(props) =>
        props.mobile
            ? `

            `
            : `
            grid-area: main;
    `}
`;

interface LayoutGridProps {
    mobile: boolean;
}
const LayoutGrid = styled.div<LayoutGridProps>`
    display: grid;
    ${(props) =>
        props.mobile
            ? `
                grid-template-areas:
                    'header'
                    'main';`
            : `
        grid-template-columns: 1fr 5fr;
        grid-template-rows: 70px auto;
        grid-column-gap: 4px;
        grid-template-areas:
            'header  header'
            'sidebar main';
    `}
    background: lightgray;
    height: 100%;
`;

interface BootstrapProps {}

const Bootstrap: React.FC<BootstrapProps> = (props, context) => {
    const [mobile, desktop] = useMedia();
    const auth = useContext(AuthContext);
    return (
        <LayoutGrid mobile={mobile}>
            <Header mobile={mobile} />
            <SideBar mobile={mobile} />
            <Main mobile={mobile}>
                <Outlet />
            </Main>
        </LayoutGrid>
    );
};

export default Bootstrap;

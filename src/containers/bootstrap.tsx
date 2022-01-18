import React from "react";
import styled from "styled-components";
import PageEdge from "./SideBar";
import AuthRouter from "./AuthRouter";
import { Outlet } from "react-router-dom";

// Query? after login I think, idk. this page should contain the setup after loging inn.
//

const Main = styled.div`
    display: flex;
    background-color: lightblue;
`;

const LayoutGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-column-gap: 4px;
    background: lightgray;
    height: 100%;
`;

interface BootstrapProps {}

const Bootstrap: React.FC<BootstrapProps> = () => {
    return (
        <LayoutGrid>
            <PageEdge />
            <Main>
                <Outlet />
            </Main>
        </LayoutGrid>
    );
};

export default Bootstrap;

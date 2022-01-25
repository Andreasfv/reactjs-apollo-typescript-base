import { printIntrospectionSchema } from "graphql";
import React from "react";
import styled from "styled-components";
import Button from "../components/button/customButton";

interface Props {
    mobile: boolean;
}

const SideBarWrapper = styled.div<Props>`
    ${(props) =>
        props.mobile
            ? `
                display: none;
            `
            : `
                grid-area: sidebar;
    `}
    display: flex;
    flex-direction: column;
    background-color: darkgray;
    minheight: 100px;
`;

const SideBar: React.FC<Props> = (props) => {
    return (
        <SideBarWrapper mobile={props.mobile}>
            <Button
                className="sidebarbtn1"
                onClick={function (event): void {
                    throw new Error("Function not implemented.");
                }}
                error={false}
            >
                Dickings
            </Button>
            <Button
                className="sidebarbtn1"
                onClick={function (event): void {
                    throw new Error("Function not implemented.");
                }}
                error={false}
            >
                Dickings2
            </Button>
        </SideBarWrapper>
    );
};
export default SideBar;

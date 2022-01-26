import { printIntrospectionSchema } from "graphql";
import React from "react";
import styled from "styled-components";
import Button from "../components/button/customButton";
import theme from "../themes/light.theme";

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
                display: flex;

                grid-area: sidebar;
    `}
    border-right: 1px solid black;
    flex-direction: column;
    background-color: ${theme.accent};
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
                Something
            </Button>
            <Button
                className="sidebarbtn1"
                onClick={function (event): void {
                    throw new Error("Function not implemented.");
                }}
                error={false}
            >
                Exists
            </Button>
        </SideBarWrapper>
    );
};
export default SideBar;

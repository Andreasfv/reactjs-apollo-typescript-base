import { printIntrospectionSchema } from "graphql";
import React, { useRef, useState } from "react";
import styled from "styled-components";

interface ButtonProps {
    primary?: boolean;
    className?: string;
    children: string;
    onClick?: () => void;
}

const BtnElement = styled.button<ButtonProps>`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <BtnElement onClick={onClick} className={className}>
            {children}
        </BtnElement>
    );
};

Button.defaultProps = {
    onClick: () => {},
    primary: false,
    children: "",
    className: "",
};

export default Button;

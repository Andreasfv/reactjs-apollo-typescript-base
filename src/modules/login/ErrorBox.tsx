import { printIntrospectionSchema } from "graphql";
import React from "react";
import styled from "styled-components";

interface ErrorBox {
    error: Error | undefined;
}

interface WrapperProps extends ErrorBox {}

const Wrapper = styled.div<WrapperProps>`
    visibility: ${(props) => (props.error ? "show" : "hidden")};
    color: ${(props) => props.theme.error};
    height: 1rem;
`;

const ErrorBox: React.FC<ErrorBox> = ({ error }) => {
    console.log(error);
    return <Wrapper error={error}>{error ? error.message : ""}</Wrapper>;
};

export default ErrorBox;

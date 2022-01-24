import React, { ForwardRefRenderFunction } from "react";
import styled from "styled-components";
import useMedia from "../../util/hooks/media";
import LoginInputProps from "./types";

interface Wrapper {
    width: string;
    height: string;
    label: string | null;
    mobile: boolean;
}

// const Wrapper = styled.span<Wrapper>`
//     display: flex;
//     position: relative;
//     width: ${(props) => props.width};
//     height: ${(props) => props.height};

//     ${(props) =>
//         props.label &&
//         `
//     &::before {
//         content: '${props.label}';
//         position: absolute;
//         left: 4px;
//         top: 0;
//         transform: translateY(-100%);

//         color: paleviolet;
//     }

//     margin-top: 10em;
//     `}
// `;

interface StyledInputProps {
    styledFocus: boolean;
    styledFocusColor: boolean;
    errorBox: boolean;
    borderRadius: string;
    noMargin: boolean;
    removeMargin?: boolean;
    width?: string;
    disabled?: boolean;
    error?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 10px;

    border: none;
    border-radius: 4px;
    outline: none;

    ${(props) => (props.error != null ? `` : ``)}
`;

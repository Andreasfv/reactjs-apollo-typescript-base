import { printIntrospectionSchema } from "graphql";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import theme from "../../themes/light.theme";

const Wrapper = styled.div``;
interface ButtonProps {
    primary?: boolean;
    className?: string;
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    backgroundColor?: string;
    border?: string;
    borderColor?: string;
    borderRadius?: string;
    margin?: string;
    padding?: string;
    removeMargin?: boolean;
    width?: string;
    height?: string;
    disabled?: boolean;
    font?: string;
    fontColor?: string;
    fontSize?: string;
    error: boolean;
    type?: boolean;
}

const BtnElement = styled.button<ButtonProps>`
    /* Adapt the colors based on primary prop */
    background: ${(props) =>
        props.backgroundColor ? props.backgroundColor : theme.primary};
    ${(props) => (props.removeMargin ? null : "margin: " + props.margin + ";")}
    padding: 0.25em 1em;
    border: ${(props) => (props.border ? props.border : "2px")} solid;
    border-color: ${(props) =>
        props.borderColor ? props.borderColor : theme.primary};
    border-radius: 3px;
    font-size: ${(props) =>
        props.fontSize ? props.fontSize : theme.fontSize.standard};
    font-family: ${(props) => (props.font ? props.font : theme.font.standard)};
    color: ${(props) =>
        props.error
            ? theme.error
            : props.fontColor
            ? props.fontColor
            : theme.fontColor.secondary};
    height: ${(props) => props.height};
    width: ${(props) => props.width};

    &:focus {
        border-color: white;
    }
`;

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    onClick,
    error = false,
    border,
    borderColor,
    borderRadius = "0px",
    backgroundColor,
    margin = "4px auto",
    removeMargin = false,
    width = "300px",
    height = "32px",
    disabled = false,
    font,
    fontSize,
    fontColor,
}) => {
    return (
        <Wrapper>
            <BtnElement
                onClick={onClick}
                className={className}
                border={border}
                borderColor={borderColor}
                error={error}
                width={width}
                height={height}
                disabled={disabled}
                borderRadius={borderRadius}
                backgroundColor={backgroundColor}
                margin={margin}
                removeMargin={removeMargin}
                font={font}
                fontSize={fontSize}
                fontColor={fontColor}
            >
                {children}
            </BtnElement>
        </Wrapper>
    );
};

export default Button;

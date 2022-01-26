import { printIntrospectionSchema } from "graphql";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import theme from "../../themes/light.theme";
interface WrapperProps {
    justifySelf?: string;
    margin?: string;
    removeMargin?: boolean;
}
const Wrapper = styled.div<WrapperProps>`
    ${(props) =>
        props.justifySelf ? "justify-self: " + props.justifySelf + ";" : ""}
    ${(props) => (props.removeMargin ? null : "margin: " + props.margin + ";")}
`;
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
    marginLeft?: string;
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
    justifySelf?: string;
}

const BtnElement = styled.button<ButtonProps>`
    /* Adapt the colors based on primary prop */
    background: ${(props) =>
        props.backgroundColor ? props.backgroundColor : theme.secondary};
    padding: ${(props) => props.padding};
    border: ${(props) => (props.border ? props.border : "2px")} solid;
    border-color: ${(props) =>
        props.borderColor ? props.borderColor : theme.primary};
    border-radius: ${(props) =>
        props.borderRadius ? props.borderRadius : "0px"};
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
    ${(props) =>
        props.justifySelf ? "justify-self: " + props.justifySelf + ";" : null}

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
    padding = "0.25em 1em",
    margin = "4px auto",
    removeMargin = false,
    width = "300px",
    height = "32px",
    disabled = false,
    font,
    fontSize,
    fontColor,
    justifySelf,
}) => {
    return (
        <Wrapper
            justifySelf={justifySelf}
            removeMargin={removeMargin}
            margin={margin}
        >
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
                padding={padding}
                removeMargin={removeMargin}
                font={font}
                fontSize={fontSize}
                fontColor={fontColor}
                justifySelf={justifySelf}
            >
                {children}
            </BtnElement>
        </Wrapper>
    );
};

export default Button;

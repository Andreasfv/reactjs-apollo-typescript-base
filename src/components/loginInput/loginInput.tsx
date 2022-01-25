import { printIntrospectionSchema } from "graphql";
import React, { ForwardRefRenderFunction } from "react";
import styled from "styled-components";
import theme from "../../themes/light.theme";
import useMedia from "../../util/hooks/media";

interface StyledInputProps {
    border?: string;
    borderColor?: string;
    styledFocus?: boolean;
    styledFocusColor?: string;
    errorBox?: boolean;
    borderRadius?: string;
    noMargin?: boolean;
    margin?: string;
    padding?: string;
    removeMargin?: boolean;
    width?: string;
    height?: string;
    disabled?: boolean;
    font?: string;
    fontSize?: string;
    error: boolean;
    password?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    type?: string;
}

const StyledInput = styled.input<StyledInputProps>`
    ${(props) => (props.error != null ? `` : ``)}
    border: solid black ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    width: calc(
        ${(props) => (props.width ? props.width : theme.inputSize.width)} -
            ${(props) => props.border} - ${(props) => props.border}
    );
    margin: ${(props) => (props.noMargin ? "0px" : props.margin)};
    height: ${(props) => props.height};
    font-family: ${(props) => (props.font ? props.font : theme.font.standard)};
    font-size: ${(props) =>
        props.fontSize ? props.fontSize : theme.fontSize.input};
    font-color: ${(props) =>
        props.error ? theme.fontColor.error : theme.fontColor.standard};
`;

const Input = React.forwardRef<HTMLInputElement, StyledInputProps>(
    (
        {
            styledFocus = false,
            styledFocusColor = "primary",
            errorBox = false,
            borderRadius = "0px",
            noMargin = false,
            removeMargin = false,
            height = "36px",
            width,
            margin = "2px auto",
            fontSize = "18px",
            password = false,
            font,
            error,
            onChange,
            onKeyDown,
            ...props
        },
        ref
    ) => {
        const type = password ? "password" : "default";
        return (
            <div>
                <StyledInput
                    ref={ref}
                    error={error}
                    errorBox={errorBox}
                    styledFocus={styledFocus}
                    styledFocusColor={styledFocusColor}
                    noMargin={noMargin}
                    margin={margin}
                    border="1px"
                    borderColor="gray7"
                    height={height}
                    borderRadius={borderRadius}
                    removeMargin={removeMargin}
                    width={width}
                    fontSize={fontSize}
                    font={font}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    type={type}
                    {...props}
                />
            </div>
        );
    }
);

export default Input;

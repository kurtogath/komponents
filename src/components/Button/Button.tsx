import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
    text?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    borderRadius?: string;
    fontWeight?: number;
};

const StyledButton = styled.button<ButtonProps>`
    border: 0;
    line-height: 1;
    display: inline-block;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "15px")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
    border-radius: ${(props) =>
        props.borderRadius ? props.borderRadius : "10px"};
    color: ${(props) => (props.color ? props.color : "#fff")};
    background-color: ${(props) =>
        props.backgroundColor ? props.backgroundColor : "#FF5655"};
    padding: ${(props) =>
        props.size === "small"
            ? "7px 25px 8px"
            : props.size === "medium"
              ? "9px 30px 11px"
              : "14px 30px 16px"};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Button: React.FC<ButtonProps> = ({
    size,
    disabled,
    text,
    onClick,
    ...props
}) => {
    return (
        <StyledButton
            type="button"
            onClick={onClick}
            disabled={disabled}
            size={size}
            {...props}
        >
            {text}
        </StyledButton>
    );
};

export default Button;

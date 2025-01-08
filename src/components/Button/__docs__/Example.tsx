import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
    disabled = false,
    onClick = () => {},
    size = "small",
    text = "Button",
    color = "#FFF",
    backgroundColor = "#FF5655",
    fontSize = "15px",
    borderRadius = "10px",
    fontWeight = 700,
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Button
                size={size}
                text={text}
                disabled={disabled}
                onClick={onClick}
                color={color}
                backgroundColor={backgroundColor}
                fontSize={fontSize}
                borderRadius={borderRadius}
                fontWeight={fontWeight}
            />
        </div>
    );
};

export default Example;

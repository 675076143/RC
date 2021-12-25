import React from "react";
import "./index.css";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const { children, onClick, ...otherProps } = props;
  const dynamicStyles: React.CSSProperties = {};
  if (otherProps.disabled) {
    Object.assign(dynamicStyles, {
      color: "gray",
      backgroundColor: "lightgray",
      cursor: "not-allowed",
      borderColor: "lightgray",
    });
  }
  return (
    <button
      style={dynamicStyles}
      {...otherProps}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

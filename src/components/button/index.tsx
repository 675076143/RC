import React from "react";
import "./index.css";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  loading?: boolean;
};

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    disabled = false,
    loading = false,
    ...otherProps
  } = props;
  const dynamicStyles: React.CSSProperties = {};
  if (disabled) {
    Object.assign(dynamicStyles, {
      color: "gray",
      backgroundColor: "lightgray",
      cursor: "not-allowed",
      borderColor: "lightgray",
    });
  }

  const classNames = ["button"];
  if (loading) {
    classNames.push("loading");
  }

  return (
    <button
      style={dynamicStyles}
      disabled={loading || disabled}
      {...otherProps}
      className={classNames.join(" ")}
      onClick={onClick}
    >
      {loading && <div className="loader" />}
      {children}
    </button>
  );
};

export default Button;

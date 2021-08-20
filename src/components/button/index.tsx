import React from "react";
import classes from "./index.module.scss";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const Button = (props: ButtonProps) => {
  const { children, onClick, ...otherProps } = props;

  return (
    <button  {...props} className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

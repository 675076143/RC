import React from "react";
import "./index.css";

export type InputProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
};

const Input = (props: InputProps) => {
  const { placeholder, onChange, ...otherProps } = props;

  return (
    <input
      {...otherProps}
      placeholder={placeholder}
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
      className="input"
    />
  );
};

export default Input;

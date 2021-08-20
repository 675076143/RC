import React, { useEffect, useReducer, useRef, useState } from "react";
import classes from "./index.module.scss";

export type FilterProps = {
  onChange?: (value: [string, string]) => void;
};

const Filter = (props: FilterProps) => {
  const { onChange, ...otherProps } = props;
  const [classNames, setClassNames] = useState(classes.filter);
  const value = useRef<[string, string]>(["=", ""]);

  return (
    <div
      {...otherProps}
      className={classNames}
      onFocus={() => {
        setClassNames(`${classes.filter} ${classes["filter-focus"]}`);
      }}
      onBlur={() => setClassNames(classes.filter)}
    >
      <select
        onChange={(e) => {
          value.current = [e.target.value, value.current[1]];
          onChange?.(value.current);
        }}
      >
        <option>=</option>
        <option>&gt;</option>
        <option>&lt;</option>
        <option>&gt;=</option>
        <option>&lt;=</option>
      </select>
      <input
        onChange={(e) => {
          value.current = [value.current[0], e.target.value];
          onChange?.(value.current);
        }}
      />
    </div>
  );
};

export default Filter;

import React, { useRef, useState } from "react";
import classes from "./index.module.scss";

export type RangeProps = {
  onChange?: (value: [null | number, null | number]) => void;
};

const Range = (props: RangeProps) => {
  const { onChange, ...otherProps } = props;
  const [classNames, setClassNames] = useState(classes.range);
  const value = useRef<[null | number, null | number]>([null, null]);
  return (
    <div
      {...otherProps}
      className={classNames}
      onFocus={() => {
        setClassNames(`${classes.range} ${classes["range-focus"]}`);
      }}
      onBlur={() => setClassNames(classes.range)}
    >
      <input
        placeholder="min"
        onChange={(e) => {
          value.current = [Number(e.target.value), value.current[1]];
          onChange?.(value.current);
        }}
      />
      ~
      <input
        placeholder="max"
        onChange={(e) => {
          value.current = [value.current[0], Number(e.target.value)];
          onChange?.(value.current);
        }}
      />
    </div>
  );
};

export default Range;

import React, { useRef, useState } from "react";
import "./index.css";

export type RangeProps = {
  onChange?: (value: [null | number, null | number]) => void;
};

const Range = (props: RangeProps) => {
  const { onChange, ...otherProps } = props;
  const [classNames, setClassNames] = useState("range");
  const value = useRef<[null | number, null | number]>([null, null]);
  return (
    <div
      {...otherProps}
      className={classNames}
      onFocus={() => {
        setClassNames("range range-focus");
      }}
      onBlur={() => setClassNames("range")}
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

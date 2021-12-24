import React from "react";
import "./index.css";

export type DividerProps = {
  children: React.ReactNode;
  textPosition?: number
};

const Divider = (props: DividerProps) => {
  const { textPosition = 50 } = props
  return <div className='divider' text-position={"50%"}>{props.children}</div>;
};

export default Divider;

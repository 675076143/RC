import React from "react";
import classes from "./index.module.scss";

export type DividerProps = {
  children: React.ReactNode;
  textPosition?: number
};

const Divider = (props: DividerProps) => {
  const { textPosition = 50 } = props
  return <div className={classes.divider} text-position={"50%"}>{props.children}</div>;
};

export default Divider;

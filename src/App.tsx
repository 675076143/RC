import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import Range from "./components/range";
import Filter from "./components/filter";
import Divider from "./components/divider";

function App() {

  return (
    <div className="App">
      <header>
        <h2>React业务组件库</h2>
      </header>
      <h2>按钮</h2>
      <Button
        onClick={() => {
          console.log("我被点了");
        }}
      >
        点点看？
      </Button>
      <h2>输入框</h2>
      <Input
        placeholder="愣着干嘛？写点啥啊"
        onChange={(value) => {
          console.log(value);
        }}
      />
      <h2>输入框[范围]</h2>
      <Range
        onChange={(value) => {
          console.log(value);
        }}
      />
      <h2>筛选</h2>
      <Filter
        onChange={(value) => {
          console.log(value);
        }}
      />
      <h2>分割线</h2>
      <Divider>Divider</Divider>
    </div>
  );
}

export default App;

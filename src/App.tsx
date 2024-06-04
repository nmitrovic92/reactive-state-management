import { useState } from "react";
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents";
import { BasicCounter } from "./Counter/components/BasicCounter";
import Wrappper from "./Counter/components/Wrapper";
import Title from "./Counter/components/Title";
import reactLogo from './assets/react.svg'
import "./index.css";

enableReactComponents();

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="container">
      <img src={reactLogo} className="logo" alt="React logo" />
      <h1>React RxJS</h1>
      State count: {counter}
      <div className="card">
        <button onClick={() => setCounter(counter + 1)}>
          Add count
        </button>
      </div>
      <Title text="React RxJS" />
      <br />
      <BasicCounter />
      <br />
      <Wrappper />
    </div>
  );
}

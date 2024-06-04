import { Memo } from "@legendapp/state/react";
import { count$ } from "../state";

const NestedCounter = () => {
  console.log("NestedCounter re-render");

  return (
    <div>Nested Legend Counter: <Memo>{count$}</Memo></div>
  )
}

export default NestedCounter
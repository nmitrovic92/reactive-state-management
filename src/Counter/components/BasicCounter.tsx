import { Memo } from "@legendapp/state/react";
import { count$ } from "../state";

export const BasicCounter = () => {
  const handleClick = () => count$.set((v) => v + 1);

  return (
    <div>
      <div>
        Legend Count: <Memo>{count$}</Memo>
      </div>
      <button onClick={handleClick}>Add count</button>
    </div>
  );
};

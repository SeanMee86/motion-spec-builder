import * as React from "react";
import { AppState } from "../App";
import TimeIncrements from "./TimeIncrements";
import Animation from "./Animation";

type IAppProps = AppState;

const App: React.FunctionComponent<IAppProps> = ({
  animations,
  timeColumn: { timeIncrements, totalTime },
}) => {
  return (
    <div className="size-[100%]">
      <div className="border-l-2 border-b-2 border-black size-full py-4 relative h-[80%] w-[100%]">
        {animations.map((animation) => (
          <Animation animation={animation} totalTime={totalTime} />
        ))}
        <TimeIncrements totalTime={totalTime} timeIncrements={timeIncrements} />
      </div>
    </div>
  );
};

export default App;

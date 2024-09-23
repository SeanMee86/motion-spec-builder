import * as React from "react";
import { AppState } from "../App";
import TimeIncrements from "./TimeIncrements";
import Animation from "./Animation";

type IAppProps = AppState;

const App: React.FunctionComponent<IAppProps> = ({
  motionSpecTitle,
  animations,
  timeColumn: { timeIncrements, totalTime },
}) => {
  return (
    <div className="size-[800px]">
      <h5 className="text-center text-2xl font-bold h-10">{motionSpecTitle}</h5>
      <div className="border-l-2 border-b-2 border-black size-full py-4 relative">
        {animations.map((animation) => (
          <Animation animation={animation} totalTime={totalTime} />
        ))}
        <TimeIncrements totalTime={totalTime} timeIncrements={timeIncrements} />
      </div>
    </div>
  );
};

export default App;

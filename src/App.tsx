import { useState } from "react";
import "./App.css";
import Graph from "./components/Graph";
import SideBar from "./components/SideBar";

export type ArrayElementType<T extends readonly unknown[]> =
  T extends readonly (infer ElementType)[] ? ElementType : never;

export type AppState = {
  timeColumn: {
    totalTime: number;
    timeIncrements: number;
  };
  animations: Array<{
    name: string;
    startTime: number;
    endTime: number;
    prop: string;
    propTransitionStart: string;
    propTransitionEnd: string;
  }>;
};

function App() {
  const [motionSpecTitle, setMotionSpecTitle] = useState("");
  const [timeColumn, setTimeColumns] = useState<AppState["timeColumn"]>({
    totalTime: 0,
    timeIncrements: 0,
  });
  const [animations, setAnimations] = useState<AppState["animations"]>([]);

  return (
    <main className="h-[100vh] w-[80vw]">
      <h5 className="text-center text-2xl font-bold h-[10%] w-full">
        {motionSpecTitle}
      </h5>
      <div className="flex size-full">
        <SideBar
          setMotionSpecTitle={setMotionSpecTitle}
          setAnimations={setAnimations}
          setTimeColumns={setTimeColumns}
        />
        <Graph timeColumn={timeColumn} animations={animations} />
      </div>
    </main>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Graph from "./components/Graph";
import SideBar from "./components/SideBar";

export type ArrayElementType<T extends readonly unknown[]> =
  T extends readonly (infer ElementType)[] ? ElementType : never;

export type AppState = {
  motionSpecTitle: string;
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
  const [isModalOpen, toggleModalOpen] = useState(false);

  return (
    <main className="flex">
      <SideBar
        setMotionSpecTitle={setMotionSpecTitle}
        setAnimations={setAnimations}
        setTimeColumns={setTimeColumns}
        toggleModalOpen={toggleModalOpen}
        isModalOpen={isModalOpen}
      />
      <Graph
        motionSpecTitle={motionSpecTitle}
        timeColumn={timeColumn}
        animations={animations}
      />
    </main>
  );
}

export default App;

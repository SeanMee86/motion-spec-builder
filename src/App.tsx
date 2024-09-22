import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./App.css";

type ArrayElementType<T extends readonly unknown[]> =
  T extends readonly (infer ElementType)[] ? ElementType : never;

type AppState = {
  timeMetric: {
    totalTime: number;
    timeIncrements: number;
  };
  animations: Array<{
    name: string;
    startTime: number;
    endtime: number;
    prop: string;
    propTransitionStart: string;
    propTransitionEnd: string;
  }>;
};

function App() {
  const [timeColumn, setTimeColumns] = useState<AppState["timeMetric"]>({
    totalTime: 0,
    timeIncrements: 0,
  });
  const [animations, setAnimations] = useState<AppState["animations"]>([
    {
      name: "SideDrawer Slide In",
      startTime: 0,
      endtime: 300,
      prop: "transform",
      propTransitionStart: "translateX(100%)",
      propTransitionEnd: "translateX(0)",
    },
    {
      name: "Text Move Up",
      startTime: 200,
      endtime: 700,
      prop: "transform",
      propTransitionStart: "transitionY(-10px)",
      propTransitionEnd: "transitionY(0)",
    },
  ]);

  const onAddAnimation = (
    animationData: ArrayElementType<AppState["animations"]>
  ) => {
    setAnimations((prevState) => [...prevState, animationData]);
  };

  return (
    <main className="flex">
      <div className="flex flex-col gap-5 p-4">
        <div className="flex flex-col gap-3">
          <label className="text-left" htmlFor="totalTime">
            Total Animation Time - in ms
          </label>
          <input
            className="border-solid border-gray-400 border-2 rounded-md"
            type="number"
            name="totalTime"
            step="100"
            id="totalTime"
            min={0}
            onChange={(e) =>
              setTimeColumns((prevState) => ({
                ...prevState,
                totalTime: parseInt(e.target.value),
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-left" htmlFor="timeIncrements">
            Time Increments - in ms
          </label>
          <input
            className="border-solid border-gray-400 border-2 rounded-md"
            type="number"
            name="timeIncrements"
            step="100"
            id="timeIncrements"
            min={0}
            onChange={(e) =>
              setTimeColumns((prevState) => ({
                ...prevState,
                timeIncrements: parseInt(e.target.value),
              }))
            }
          />
        </div>
        <div className="flex justify-center p-4">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Add Animation</button>
            </Dialog.Trigger>
            <Dialog.Overlay className="bg-[rgb(20,20,20)]/50 fixed animate-[overlayShow_150ms_cubic-bezier(0.16,1,0.3,1)] inset-0" />
            <Dialog.Content className="fixed top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] p-8 flex flex-col items-start z-10">
              <Dialog.Title className="font-bold text-2xl">Add Animation</Dialog.Title>
              <Dialog.Description className="text-left">Enter your animation details to see it added to your choreography specs.</Dialog.Description>
              <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" />
              </fieldset>
              <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" />
              </fieldset>
              <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" />
              </fieldset>
              <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" />
              </fieldset>
              <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" />
              </fieldset>
              <fieldset>
                <label htmlFor=""></label>
                <input type="text" name="" id="" />
              </fieldset>
              <button onClick={onAddAnimation}>Add Animation</button>
              <Dialog.Close asChild>
                <button className="absolute top-[10px] right-[10px] size-[25px] rounded-full p-0 border-solid flex justify-center items-center" aria-label="Close">
                  <Cross2Icon/>
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </div>
      <div className="size-[800px]">
        <div className="border-l-2 border-b-2 border-black size-full py-4 relative">
          {animations.map((animation) => {
            const left = `${
              (animation.startTime / timeColumn.totalTime) * 100
            }%`;
            const width = `${
              ((animation.endtime - animation.startTime) /
                timeColumn.totalTime) *
              100
            }%`;
            const rgb = `${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}`;
            return (
              <div className="my-4 relative" style={{ left }}>
                <p className="font-bold text-2xl text-left">{animation.name}</p>
                <code className="text-left block">
                  {animation.prop}: {animation.propTransitionStart} -{" "}
                  {animation.propTransitionEnd}
                </code>
                <div
                  style={{
                    backgroundColor: `rgba(${rgb}, 0.5)`,
                    width,
                  }}
                  className="rounded-full h-4 flex justify-end"
                >
                  <div
                    style={{
                      backgroundColor: `rgb(${rgb})`,
                    }}
                    className="size-4 rounded-full"
                  ></div>
                </div>
              </div>
            );
          })}
          <div className="absolute bottom-0 translate-y-[50%] w-full flex">
            {timeColumn.totalTime &&
              timeColumn.timeIncrements &&
              Array.from(
                Array(
                  Math.floor(timeColumn.totalTime / timeColumn.timeIncrements)
                ).keys()
              ).map((n) => (
                <>
                  <div
                    className="border-r-2 border-green-500 h-10 relative"
                    style={{
                      width: `${
                        (timeColumn.timeIncrements / timeColumn.totalTime) * 100
                      }%`,
                    }}
                  >
                    <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[100%]">
                      {timeColumn.timeIncrements * (n + 1)}ms
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

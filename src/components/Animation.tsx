import * as React from "react";
import { AppState, ArrayElementType } from "../App";
import { useRef } from "react";

interface IAnimationProps {
  animation: ArrayElementType<AppState["animations"]>;
  totalTime: number;
}

const Animation: React.FunctionComponent<IAnimationProps> = ({
  animation: {
    startTime,
    endTime,
    prop,
    name,
    propTransitionEnd,
    propTransitionStart,
  },
  totalTime,
}) => {
  const left = `${(startTime / totalTime) * 100}%`;
  const width = `${((endTime - startTime) / totalTime) * 100}%`;
  const rgb = useRef<string>();
  if (!rgb.current) {
    rgb.current = `${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}`;
  }
  return (
    <div className="my-4 z-10 relative" style={{ left }}>
      <p className="font-bold text-2xl text-left">{name}</p>
      <code className="text-left block">
        {prop}: {propTransitionStart} - {propTransitionEnd}
      </code>
      <div
        style={{
          backgroundColor: `rgba(${rgb.current}, 0.5)`,
          width,
        }}
        className="rounded-full h-4 flex justify-end"
      >
        <div
          style={{
            backgroundColor: `rgb(${rgb.current})`,
          }}
          className="size-4 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default Animation;

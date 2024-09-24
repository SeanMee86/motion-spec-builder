import * as React from "react";

interface ITimeIncrementsProps {
  totalTime: number;
  timeIncrements: number;
}

const TimeIncrements: React.FunctionComponent<ITimeIncrementsProps> = ({
  timeIncrements,
  totalTime,
}) => (
  <div className="absolute bottom-0 w-full h-full flex">
    {totalTime !== 0 &&
      timeIncrements !== 0 &&
      Array.from(Array(Math.floor(totalTime / timeIncrements)).keys()).map(
        (n) => (
          <>
            <div
              className="border-r-2 border-[rgb(20,20,20)]/10 h-full relative"
              style={{
                width: `${(timeIncrements / totalTime) * 100}%`,
              }}
            >
              <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[120%]">
                {timeIncrements * (n + 1)}ms
              </div>
            </div>
          </>
        )
      )}
  </div>
);

export default TimeIncrements;

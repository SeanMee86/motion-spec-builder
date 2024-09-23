import * as React from "react";

interface ITimeIncrementsProps {
  totalTime: number;
  timeIncrements: number;
}

const TimeIncrements: React.FunctionComponent<ITimeIncrementsProps> = ({
  timeIncrements,
  totalTime,
}) => (
  <div className="absolute bottom-0 translate-y-[50%] w-full flex">
    {totalTime &&
      timeIncrements &&
      Array.from(Array(Math.floor(totalTime / timeIncrements)).keys()).map(
        (n) => (
          <>
            <div
              className="border-r-2 border-green-500 h-10 relative"
              style={{
                width: `${(timeIncrements / totalTime) * 100}%`,
              }}
            >
              <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[100%]">
                {timeIncrements * (n + 1)}ms
              </div>
            </div>
          </>
        )
      )}
  </div>
);

export default TimeIncrements;

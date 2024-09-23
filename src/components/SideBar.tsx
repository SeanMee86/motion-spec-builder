import * as React from "react";
import Modal from "./Modal";
import { Dispatch, SetStateAction } from "react";
import { AppState } from "../App";

interface ISideBarProps {
  setMotionSpecTitle: Dispatch<SetStateAction<string>>;
  setAnimations: Dispatch<SetStateAction<AppState["animations"]>>;
  setTimeColumns: Dispatch<SetStateAction<AppState["timeColumn"]>>;
  toggleModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}

const SideBar: React.FunctionComponent<ISideBarProps> = ({
  setMotionSpecTitle,
  setAnimations,
  setTimeColumns,
  toggleModalOpen,
  isModalOpen,
}) => {
  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="flex flex-col gap-3">
        <label className="text-left" htmlFor="motionSpecTitle">
          Motion Spec Name
        </label>
        <input
          className="border-solid border-gray-400 border-2 rounded-md"
          type="text"
          name="motionSpecTitle"
          id="motionSpecTitle"
          onChange={(e) => setMotionSpecTitle(e.target.value)}
        />
      </div>
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
      <Modal
        setAnimations={setAnimations}
        isModalOpen={isModalOpen}
        toggleModalOpen={toggleModalOpen}
      />
    </div>
  );
};

export default SideBar;

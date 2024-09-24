import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Form from "./Form";
import { Dispatch, SetStateAction } from "react";
import { AppState } from "../App";

interface IModalProps {
  setAnimations: Dispatch<SetStateAction<AppState["animations"]>>;
  toggleModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  toggleModalOpen,
  isModalOpen,
  setAnimations,
}) => {
  return (
    <div className="flex justify-center p-4">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            onClick={() => {
              toggleModalOpen(true);
            }}
          >
            Add Animation
          </button>
        </Dialog.Trigger>
        {isModalOpen && (
          <Dialog.Overlay
            forceMount
            onClick={() => toggleModalOpen(false)}
            className="bg-[rgb(20,20,20)]/50 fixed animate-[overlayShow_150ms_cubic-bezier(0.16,1,0.3,1)] inset-0"
          />
        )}
        {isModalOpen && (
          <Dialog.Content
            forceMount
            className="fixed top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] p-8 flex flex-col items-start z-20"
          >
            <Dialog.Title className="font-bold text-2xl">
              Add Animation
            </Dialog.Title>
            <Dialog.Description className="text-left">
              Enter your animation details to see it added to your choreography
              specs.
            </Dialog.Description>
            <Form
              toggleModalOpen={toggleModalOpen}
              setAnimationState={setAnimations}
            />
            <Dialog.Close asChild>
              <button
                onClick={() => {
                  toggleModalOpen(false);
                }}
                className="absolute top-[10px] right-[10px] size-[25px] rounded-full p-0 border-solid flex justify-center items-center"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        )}
      </Dialog.Root>
    </div>
  );
};

export default Modal;

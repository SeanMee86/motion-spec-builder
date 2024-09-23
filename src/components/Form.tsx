import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppState, ArrayElementType } from "../App";
import { Dispatch, SetStateAction } from "react";

type Inputs = ArrayElementType<AppState["animations"]>;

interface IFormProps {
  setAnimationState: Dispatch<SetStateAction<AppState["animations"]>>;
  toggleModalOpen: Dispatch<SetStateAction<boolean>>;
}
const Form: React.FunctionComponent<IFormProps> = ({
  setAnimationState,
  toggleModalOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmitHandler: SubmitHandler<Inputs> = ({
    name,
    startTime,
    endTime,
    prop,
    propTransitionEnd,
    propTransitionStart,
  }) => {
    const newAnimation: Inputs = {
      name,
      startTime,
      endTime,
      prop,
      propTransitionStart,
      propTransitionEnd,
    };
    setAnimationState((prevState) => [...prevState, newAnimation]);
    toggleModalOpen(false);
  };
  return (
    <form
      className="flex justify-center items-center flex-col gap-3 w-full"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <label htmlFor="name">Animation Name:</label>
      <input
        className="w-full border-solid border-2 rounded-md"
        type="text"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}
      <label htmlFor="startTime">Animation Start Time:</label>
      <input
        className="w-full border-solid border-2 rounded-md"
        type="number"
        {...register("startTime", { required: true })}
      />
      {errors.startTime && <span>This field is required</span>}
      <label htmlFor="endTime">Animation End Time:</label>
      <input
        className="w-full border-solid border-2 rounded-md"
        type="number"
        {...register("endTime", { required: true })}
      />
      {errors.endTime && <span>This field is required</span>}
      <label htmlFor="prop">Css Property:</label>
      <input
        className="w-full border-solid border-2 rounded-md"
        type="text"
        {...register("prop", { required: true })}
      />
      {errors.prop && <span>This field is required</span>}
      <label htmlFor="propTransitionStart">Initial Css Prop Value:</label>
      <input
        className="w-full border-solid border-2 rounded-md"
        type="text"
        {...register("propTransitionStart", { required: true })}
      />
      {errors.propTransitionStart && <span>This field is required</span>}
      <label htmlFor="propTransitionEnd">Ending Css Prop Value:</label>
      <input
        className="w-full border-solid border-2 rounded-md"
        type="text"
        {...register("propTransitionEnd", { required: true })}
      />
      {errors.propTransitionEnd && <span>This field is required</span>}
      <input type="submit" value={"Submit Animation"} />
    </form>
  );
};

export default Form;

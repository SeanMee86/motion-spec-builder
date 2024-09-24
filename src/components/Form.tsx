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
      className="flex justify-center items-center flex-col gap-3 w-full my-4"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="text-left w-full">
        <label className="self-start font-bold" htmlFor="name">
          Animation Name:
        </label>
        <input
          className="w-full border-solid p-2 border-2 rounded-md"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-600 text-sm underline">This field is required</span>}
      </div>
      <div className="text-left w-full">
        <label className="self-start font-bold" htmlFor="startTime">
          Animation Start Time:
        </label>
        <input
          className="w-full border-solid p-2 border-2 rounded-md"
          type="number"
          {...register("startTime", { required: true })}
        />
        {errors.startTime && <span className="text-red-600 text-sm underline">This field is required</span>}
      </div>
      <div className="text-left w-full">
        <label className="self-start font-bold" htmlFor="endTime">
          Animation End Time:
        </label>
        <input
          className="w-full border-solid p-2 border-2 rounded-md"
          type="number"
          {...register("endTime", { required: true })}
        />
        {errors.endTime && <span className="text-red-600 text-sm underline">This field is required</span>}
      </div>
      <div className="text-left w-full">
        <label className="self-start font-bold" htmlFor="prop">
          Css Property:
        </label>
        <input
          className="w-full border-solid p-2 border-2 rounded-md"
          type="text"
          {...register("prop", { required: true })}
        />
        {errors.prop && <span className="text-red-600 text-sm underline">This field is required</span>}
      </div>
      <div className="text-left w-full">
        <label className="self-start font-bold" htmlFor="propTransitionStart">
          Initial Css Prop Value:
        </label>
        <input
          className="w-full border-solid p-2 border-2 rounded-md"
          type="text"
          {...register("propTransitionStart", { required: true })}
        />
        {errors.propTransitionStart && <span className="text-red-600 text-sm underline">This field is required</span>}
      </div>
      <div className="text-left w-full">
        <label className="self-start font-bold" htmlFor="propTransitionEnd">
          Ending Css Prop Value:
        </label>
        <input
          className="w-full border-solid p-2 border-2 rounded-md"
          type="text"
          {...register("propTransitionEnd", { required: true })}
        />
        {errors.propTransitionEnd && <span className="text-red-600 text-sm underline">This field is required</span>}
      </div>
      <input className="p-2 mt-2 transition-colors rounded-md cursor-pointer border-2 hover:border-blue-400" type="submit" value={"Submit Animation"} />
    </form>
  );
};

export default Form;

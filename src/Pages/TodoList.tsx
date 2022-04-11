import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IToDo {
  ToDo: string;
}

const TodoList = () => {
  const { register, handleSubmit, setValue } = useForm<IToDo>();
  const [toDo, setToDos] = useState<string[]>([]);
  const onVaild: SubmitHandler<IToDo> = (data) => {
    setValue("ToDo", "");
    setToDos([data.ToDo, ...toDo]);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onVaild)}>
        <input {...register("ToDo", { required: true })} />
        <input type="submit" value="보내" />
      </form>
      {toDo.map((data, index) => {
        return <div key={index}>{data}</div>;
      })}
    </React.Fragment>
  );
};

export default TodoList;

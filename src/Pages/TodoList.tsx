import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

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
        <TextField
          label="Outlined secondary"
          color="secondary"
          placeholder="write ToDo..."
          required
          autoFocus
          {...register("ToDo", { required: "please write ToDo" })}
        />
        <input type="submit" value="보내" />
      </form>
      {toDo.map((data, index) => {
        return <div key={index}>{data}</div>;
      })}
    </React.Fragment>
  );
};

export default TodoList;

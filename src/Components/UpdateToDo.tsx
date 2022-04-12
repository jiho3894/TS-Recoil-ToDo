import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../Recoil/Atoms";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface IFormUp {
  ToDoUpdate: string;
}

const UpdateToDo = ({ text, category, id }: IToDo) => {
  const [upClear, setUpClear] = useState(true);
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IFormUp>();
  const onVaild: SubmitHandler<IFormUp> = ({ ToDoUpdate }: IFormUp) => {
    setToDos((old) => {
      const target = old.findIndex((toDo) => toDo.id === id);
      const newToDo = { text: ToDoUpdate, id, category };
      return [...old.slice(0, target), newToDo, ...old.slice(target + 1)];
    });
    setValue("ToDoUpdate", "");
    setUpClear((prev) => !prev);
  };
  return (
    <React.Fragment>
      {upClear && (
        <form onSubmit={handleSubmit(onVaild)}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue={text}
            variant="filled"
            size="small"
            autoFocus
            type="text"
            {...register("ToDoUpdate", { required: true })}
          />
          <Button
            size="small"
            type="submit"
            variant="contained"
            color="secondary"
          >
            <CheckIcon />
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};
export default UpdateToDo;

import React from "react";
import { TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, themeState, toDoState } from "../Recoil/Atoms";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import Switch from "@mui/material/Switch";

interface IForm {
  ToDoList: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onVaild: SubmitHandler<IForm> = ({ ToDoList }: IForm) => {
    const Cate = category === 0 ? category + 1 : category;
    setToDos((old) => [
      { text: ToDoList, id: Date.now(), category: Cate },
      ...old,
    ]);
    setValue("ToDoList", "");
  };
  const [theme, setTheme] = useRecoilState(themeState);
  const onClick = () => {
    return theme === 0 ? setTheme(1) : setTheme(0);
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onVaild)}>
        <TextField
          label="오늘 할 일"
          variant="filled"
          color="secondary"
          placeholder="write ToDo..."
          required
          autoFocus
          size="small"
          {...register("ToDoList", { required: "please write ToDo" })}
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
      <Switch
        onClick={onClick}
        {...label}
        defaultChecked={theme === 0 ? true : false}
      />
    </React.Fragment>
  );
};

export default CreateToDo;

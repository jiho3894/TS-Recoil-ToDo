import { TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../Recoil/Atoms";

interface IForm {
  ToDoList: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onVaild: SubmitHandler<IForm> = ({ ToDoList }: IForm) => {
    setToDos((old) => [{ text: ToDoList, id: Date.now(), category }, ...old]);
    setValue("ToDoList", "");
  };
  return (
    <form onSubmit={handleSubmit(onVaild)}>
      <TextField
        label="Outlined secondary"
        color="secondary"
        placeholder="write ToDo..."
        required
        autoFocus
        {...register("ToDoList", { required: "please write ToDo" })}
      />
      <input type="submit" value="보내" />
    </form>
  );
};

export default CreateToDo;

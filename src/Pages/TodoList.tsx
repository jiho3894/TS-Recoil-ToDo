import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "../Components/CreateToDo";
import ToDo from "../Components/ToDo";
import { Category, categoryState, toDoSelector } from "../Recoil/Atoms";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const TodoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as any);
  };
  return (
    <React.Fragment>
      <h1>ToDo</h1>
      <hr />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">TODO</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={String(category)}
          onChange={handleChange}
        >
          <MenuItem value={Category.TO_DO}>TO_DO</MenuItem>
          <MenuItem value={Category.DOING}>DOING</MenuItem>
          <MenuItem value={Category.DONE}>DONE</MenuItem>
        </Select>
      </FormControl>
      <CreateToDo />
      <ul>
        {toDos.map((data) => {
          return <ToDo key={data.id} {...data} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;

import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "../Components/CreateToDo";
import ToDo from "../Components/ToDo";
import {
  Category,
  categoryState,
  toDoSelector,
  toDoState,
} from "../Recoil/Atoms";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled, { keyframes } from "styled-components";

const ToDoContainer = styled.ul`
  width: 100%;
  display: grid;
  gap: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2ee500;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 180px;
  }
`;

const BoxShow = keyframes`
0%{
  top: 10px
} 50%{
  top: 0
}100%{
  top: 10px
}
`;

const InfinityBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${BoxShow} infinite 1s;
  margin-bottom: 15px;
  svg {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    color: white;
    position: absolute;

    cursor: pointer;
  }
`;

const TodoList = () => {
  const [load, setLoad] = useState(12);
  const toDos = useRecoilValue(toDoSelector);
  const toDoDefault = useRecoilValue(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as any);
  };
  const onClick = () => {
    setLoad(load + 4);
  };
  return (
    <React.Fragment>
      <InputContainer>
        <FormControl size="small">
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={String(category)}
            onChange={handleChange}
          >
            <MenuItem value={Category.ALL}>ALL</MenuItem>
            <MenuItem value={Category.TO_DO}>TO_DO</MenuItem>
            <MenuItem value={Category.DOING}>DOING</MenuItem>
            <MenuItem value={Category.DONE}>DONE</MenuItem>
          </Select>
        </FormControl>
        <CreateToDo />
      </InputContainer>
      <ToDoContainer>
        {category === 0
          ? toDoDefault.slice(0, load).map((data) => {
              return <ToDo key={data.id} {...data} />;
            })
          : toDos.map((data) => {
              return <ToDo key={data.id} {...data} />;
            })}
      </ToDoContainer>
      {load < toDoDefault.length && (
        <InfinityBox>
          <Fab color="primary" aria-label="add">
            <AddIcon onClick={onClick} />
          </Fab>
        </InfinityBox>
      )}
    </React.Fragment>
  );
};

export default TodoList;

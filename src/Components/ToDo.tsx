import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Category, IToDo, toDoState } from "../Recoil/Atoms";
import UpdateToDo from "./UpdateToDo";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styled from "styled-components";

export interface IProps {
  update: boolean;
}

const Container = styled.li`
  width: 280px;
  height: 280px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  overflow-x: hidden;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
    cursor: pointer;
  }
`;

const Header = styled.div<{ bgColor: () => "yellow" | "green" | "red" }>`
  width: 100%;
  height: 50px;
  background-color: ${(prop) => prop.bgColor};
  text-align: center;
  line-height: 50px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  span {
    font-size: 14px;
    font-weight: 600;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 70px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ToDo = ({ text, category, id }: IToDo) => {
  const [update, SetUpdate] = useState<IProps["update"]>(false);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (category: IToDo["category"]) => {
    setToDos((old) => {
      const target = old.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category };
      return [...old.slice(0, target), newToDo, ...old.slice(target + 1)];
    });
  };
  const onDelete = () => {
    setToDos((old) => {
      const newToDo = old.filter((toDo) => toDo.id !== id);
      return newToDo;
    });
  };
  const bgColor = () => {
    if (Category[category] === "DOING") {
      return "yellow";
    } else if (Category[category] === "DONE") {
      return "green";
    } else {
      return "red";
    }
  };
  return (
    <Container>
      <Header bgColor={bgColor}>
        <p>{Category[category]}</p>
      </Header>
      <Wrapper>
        <span>{text}</span>
        {update && <UpdateToDo id={id} category={category} text={text} />}
      </Wrapper>
      <Footer>
        <ButtonContainer>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            {category !== Category.TO_DO && (
              <Button size="small" onClick={() => onClick(Category.TO_DO)}>
                TO DO
              </Button>
            )}
            {category !== Category.DOING && (
              <Button size="small" onClick={() => onClick(Category.DOING)}>
                DOING
              </Button>
            )}
            {category !== Category.DONE && (
              <Button size="small" onClick={() => onClick(Category.DONE)}>
                DONE
              </Button>
            )}
          </ButtonGroup>
          <Button
            size="small"
            onClick={() => SetUpdate((prev) => !prev)}
            variant="contained"
            color="success"
          >
            Update
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={onDelete}
          >
            Delete
          </Button>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};

export default ToDo;

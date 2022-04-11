import { useSetRecoilState } from "recoil";
import { Category, IToDo, toDoState } from "../Recoil/Atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (category: IToDo["category"]) => {
    setToDos((old) => {
      const target = old.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category };
      return [...old.slice(0, target), newToDo, ...old.slice(target + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Category.TO_DO && (
        <button onClick={() => onClick(Category.TO_DO)}>TO DO</button>
      )}
      {category !== Category.DOING && (
        <button onClick={() => onClick(Category.DOING)}>DOING</button>
      )}
      {category !== Category.DONE && (
        <button onClick={() => onClick(Category.DONE)}>DONE</button>
      )}
    </li>
  );
};

export default ToDo;

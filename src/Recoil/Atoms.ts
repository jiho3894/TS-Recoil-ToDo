import { atom, selector } from "recoil";

export enum Category {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Category;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<IToDo["category"]>({
  key: "category",
  default: Category.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoOption",
  get: ({ get }) => {
    const toDo = get(toDoState);
    const category = get(categoryState);
    return toDo.filter((data) => data.category === category);
  },
});

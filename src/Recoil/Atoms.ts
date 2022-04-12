import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export enum Category {
  "ALL",
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
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<IToDo["category"]>({
  key: "category",
  default: Category.ALL,
});

export const toDoSelector = selector({
  key: "toDoOption",
  get: ({ get }) => {
    const toDo = get(toDoState);
    const category = get(categoryState);
    return toDo.filter((data) => data.category === category);
  },
});
/* login */

export const gitID = atom({
  key: "GIT",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

/* darkmode */

export enum ThemeEnums {
  "LIGHT",
  "DARK",
}

const { LIGHT, DARK } = ThemeEnums;

export const getTheme = (): ThemeEnums => {
  return LIGHT ? DARK : LIGHT;
};

export const themeState = atom<ThemeEnums>({
  key: "themeMode",
  default: getTheme(),
  effects_UNSTABLE: [persistAtom],
});

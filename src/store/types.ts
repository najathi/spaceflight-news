import { Article } from "../pages";

interface State {
    counter: number;
    favorites: Article[];
}

export type RootState = State;
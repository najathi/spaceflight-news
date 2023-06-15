import { Article } from "../shared/types/article";

interface State {
    counter: number;
    favorites: Article[];
}

export type RootState = State;
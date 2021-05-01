import { Reducer } from "redux";
import { ICartState } from "./types";

const INICIAL_STATE: ICartState = {
  items: []
}

const cart: Reducer<ICartState> = () => {
  return INICIAL_STATE;
}

export default cart;

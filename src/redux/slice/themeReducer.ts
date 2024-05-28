import { PayloadAction } from "@reduxjs/toolkit";
import { types } from "../types/types";
import type { Dict } from "@chakra-ui/utils";

type ThemeState = Dict;

const initialState: ThemeState = {};

export const themeReducer = (
  state = initialState,
  action: PayloadAction<Dict>
) => {
  switch (action.type) {
    case types.theme:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

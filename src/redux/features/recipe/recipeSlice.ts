import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TRecipe = {
  _id: string;
  task: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  recipes: TRecipe[];
};

const initialState: TInitialState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<TRecipe>) => {
      state.recipes.push({ ...action.payload });
    },
    removeRecipe: (state, action: PayloadAction<string>) => {
      state.recipes = state.recipes.filter(
        (item) => item._id !== action.payload
      );
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const status = state.recipes.find((item) => item._id === action.payload);
      if (status) {
        status.isCompleted = !status.isCompleted;
        state.recipes.sort(
          (a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0)
        );
      }
    },
  },
});

export const { addRecipe, removeRecipe, toggleStatus } = recipeSlice.actions;

export default recipeSlice.reducer;

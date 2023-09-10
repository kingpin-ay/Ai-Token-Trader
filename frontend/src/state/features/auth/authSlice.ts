import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authInitialState {
  username: string;
  password: string;
}

const initialState: authInitialState = {
  username: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      (state.password = ""), (state.username = "");
    },
    saveCredential: (
      state,
      actions: PayloadAction<{ username: string; password: string }>
    ) => {
      state.password = actions.payload.password;
      state.username = actions.payload.username;
    },
  },
});

export const { logout, saveCredential } = authSlice.actions;

export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: null,
  isAuthenticated: false,
};

export const checkAuthentication = createAsyncThunk(
  "auth/checkAuthentication",
  async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/auth/is-authenticated"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [checkAuthentication.pending](state, payload) {
      state.loading = true;
      state.isAuthenticated = false;
    },
    [checkAuthentication.fulfilled](state, payload) {
      state.loading = false;
      console.log({ "fulfilled payload": payload });
    },
    [checkAuthentication.rejected](state, payload) {
      console.log({ "rejected payload": payload });
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

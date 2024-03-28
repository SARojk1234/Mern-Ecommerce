import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signinFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteStart: (state) => {
      state.loading = true;
    },
    deleteSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
  },
  signOutStart: (state) => {
    state.loading = true;
  },
  signOutSuccess: (state) => {
    state.currentUser = null;
    state.loading = false;
    state.error = null;
  },
  signOutFailure: (state, action) => {
    state.error = action.payload;
    state.loading = false;
},
}
});


export const { signinFailure,signOutFailure,signOutStart,signOutSuccess, signinStart, signinSuccess,updateUserFailure, updateUserStart, updateUserSuccess,deleteFailure,deleteStart,deleteSuccess } = userSlice.actions;
export default userSlice.reducer;

// loginSlice.js

import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(localStorage.getItem('user'));
    } else {
        return null; 
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
}


const initialState = {
  user: fetchFromLocalStorage(),
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      storeInLocalStorage(state.user);
    },
    logoutUser: (state) => {
      state.user = null;
      storeInLocalStorage(state.user);
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;
export const selectUser = (state) => state.login.user;

export default loginSlice.reducer;

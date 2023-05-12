import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      Cookies.set("user", JSON.stringify(action.payload));
    },

    logout(state, action) {
      localStorage.clear();
      Cookies.remove();
      state = null;
    },
  },
});

export const { addUser, logout } = UserSlice.actions;
export default UserSlice.reducer;

// const { createSlice } = require('@reduxjs/toolkit');

// const cartSlice = createSlice({
//     name: 'user',
//     initialState: ["Ammar"],
//     reducers: {
//         addUser(state,action){
//                         state.User.push= action.payload;
//                         localStorage.setItem('user',JSON.stringify(action.payload));
//                     },
//         remove(state, action) {
//             return state.filter((item) => item.id !== action.payload);
//         },
//     },
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;

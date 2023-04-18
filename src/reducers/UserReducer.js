
import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

const initialState ={};


const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers : {
        addUser(state,action){
            state.user= action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload));
            Cookies.set("user",JSON.stringify(action.payload));
        },

        logout(state,action){
            localStorage.clear();
            Cookies.remove();
            state.user = {}
        }





    }
})

export const {addUser,logout} = UserSlice.actions;
export default UserSlice;
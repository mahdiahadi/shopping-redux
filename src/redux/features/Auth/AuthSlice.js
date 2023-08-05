import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null
const initialState ={
    loggedIn:false,
    userInfo:  {},
    userToken:  null,
    error:null,
    success: false
}
const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
       login(state,action){
        state.loggedIn= true;
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.userToken;
       },
       logout(state,action){
        state.loggedIn =false;
        state.userInfo = null;
        state.userToken = null;
       }
    },
    extraReducers:{} 
})
export const selectedAllAuth = (state) => state.auth
export const {login,logout} = AuthSlice.actions;
export default AuthSlice.reducer;
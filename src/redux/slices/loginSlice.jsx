import { createSlice } from "@reduxjs/toolkit";

const initialState = {
email:"",
password:""
}

const loginSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.email = action.payload.email;
            state.password = action.payload.password;
            return state;
        }
    }
})

export const {login} = loginSlice.actions;
export default loginSlice.reducer;
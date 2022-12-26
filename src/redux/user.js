import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username : 'John Doe',
    email:'johndoe@gmail.com',
    password:'johndoe123',
    profile:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    addres:'Jl.Jaya No.65, Batu Bara',
    isLogin : false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        changeUsername:(state,action)=>{
            state.username = action.payload
        },
        changePassword:(state,action)=>{
            state.password = action.payload
        },
        changeAddres:(state,action)=>{
            state.addres = action.payload
        },
        userLogin : (state)=>{
            state.isLogin = true
        },
        userLogout:(state)=>{
            state.isLogin = false
        }
    }
})


export const {changeAddres,changePassword,changeUsername,userLogin,userLogout} = userSlice.actions
export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    history:[]
}

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistory : (state,action)=>{
            state.history.push(action.payload)
            console.log(action.payload);
        }
    }
})

export const { addHistory} = historySlice.actions
export default historySlice.reducer
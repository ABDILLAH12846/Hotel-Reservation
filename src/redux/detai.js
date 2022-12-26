import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    checkin: '',
    checkout: '',
    room: ''
}

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        checkinDate: (state, action) => {
            state.checkin = action.payload.split('-')[2]
            console.log('aaa');
        },
        checkoutDate: (state, action) => {
            state.checkout = action.payload.split('-')[2]
            console.log('aaa');
        },
        roomQty: (state, action) => {
            state.room = action.payload
        }
    }
})

export const { checkinDate, checkoutDate, roomQty } = detailSlice.actions
export default detailSlice.reducer
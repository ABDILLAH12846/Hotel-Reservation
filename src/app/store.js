import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from '../redux/hotel.js'
import userreduc from '../redux/user.js'
import dataReducer from '../redux/user_redux.js'
import loginReducer from '../redux/user_login.js'
import cityReducer from '../redux/city_redux.js'
import likereducer from '../redux/wish.js'
import detailReducer from '../redux/detai.js'
import userReducer from '../redux/user.js'
import hisReducer from '../redux/history.js'

export const store = configureStore({
    reducer : {
        hotel : hotelReducer,
        user : userreduc,
        data : dataReducer,
        login: loginReducer,
        city: cityReducer,
        like:likereducer,
        detail: detailReducer,
        user2:userReducer,
        history:hisReducer
    }
})
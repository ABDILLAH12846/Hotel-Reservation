import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../redux/user";

export const useLogin = () => {
    const navi = useNavigation()
    const dispach = useDispatch()
    const { email, password,isLogin } = useSelector((state) => state.user2)
    const [color, setColor] = useState('#fff')
    const [passcolor, setPasscolor] = useState('#fff')
    const [mail, setMail] = useState('')
    const [passw, setPassw] = useState('')

    const loginSystem = () => {
        if (mail === '' || mail !== email) {
            setColor('#F9DEDC')
        }
        else if (passw === '' || passw !== password) {
            setPasscolor('#f9dedc')
        }
        else {
            dispach(userLogin())
            navi.goBack()
        }

    }

    const logoutSystem =()=>{
        dispach(userLogout)
    }
    return{
        mail,
        setMail,
        passw,
        setPassw,
        color,
        setColor,
        passcolor,
        setPasscolor,
        email,password,
        loginSystem,
        logoutSystem,
        isLogin
    }
}
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeAddres, changePassword, changeUsername, userLogout } from "../redux/user"


export const useProfile = ()=>{
    const dispach = useDispatch()
    const {email,password,addres,profile,username,isLogin} = useSelector((state)=>state.user2)

    const [mail,setMail] = useState(email)
    const [passw,setPassw] = useState(password)
    const [addr,setAddr] = useState(addres)
    const [user,setUser] = useState(username)

    const logout = ()=>{
        dispach(userLogout())
    }
    const saveChanges = ()=>{
        dispach(changeUsername(user))
        dispach(changeAddres(addr))
        dispach(changePassword(passw))
    }
    return {
        mail,setMail,
        passw,setPassw,
        addr,setAddr,
        logout,profile,
        user,setUser,
        saveChanges,isLogin
    }
}
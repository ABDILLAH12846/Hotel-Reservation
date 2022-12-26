import React from 'react'
import { View,TextInput,Text,Image,Pressable } from 'react-native'
import { styles } from '../../style/style'
import { useLogin } from '../../hook/useLogin'

export const Login = () => {
  const {setMail,setPassw,setColor,setPasscolor,color,passcolor,email,isLogin,password,loginSystem} = useLogin()
  console.log(email,password,isLogin);
  return (
    <View style={styles.container}>
      <View style={styles.loginImage}>
        <Image style={styles.img} source={require('../../data/undraw_Login_re_4vu2.png')} />
      </View>
      <View style={styles.login}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Book and Find</Text>
          <Text style={styles.title}>Your Happines</Text>
        </View>
        <TextInput style={[styles.input, { backgroundColor: color }]} placeholder='email' onChangeText={(val) => {
          setColor('#fff')
          setMail(val)
        }}></TextInput>
        <TextInput style={[styles.input, { backgroundColor: passcolor }]} placeholder='password' onChangeText={(val) => {
          setPasscolor('#fff')
          setPassw(val)
        }}></TextInput>
        <Pressable style={styles.primaryButton} onPress={loginSystem} ><Text style={styles.textbutton}>Login</Text></Pressable>
      </View>
    </View>
  )
}

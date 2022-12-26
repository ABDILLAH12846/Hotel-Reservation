import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Image, Pressable, Text, ScrollView, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BookList } from '../component/bookList'
import { Input } from '../component/input'
import { userHistory } from '../redux/user_login'
import { styles } from '../style/style'

export const Book = () => {

  const { checkin, checkout, room } = useSelector((state) => state.detail)
  const [price, setPrice] = useState(1)
  console.log(checkin, checkout);
  const date = () => {
    if (checkin > checkout) {
      setPrice((checkout + 30) - checkin)
      console.log(price);
    } else {
      setPrice(checkout - checkin)
      
    }
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('')
  const navigation = useNavigation()
  const dispach = useDispatch()
  const route = useRoute()
  const data = route.params.description
  const checkoutData = {
    name,
    email,
    phone: `${phone1}${phone2}`,
    data
  }
  const checkoutTiket = () => {
    dispach(userHistory(checkoutData))
    navigation.navigate('history')
  }
  useEffect(()=>{
    date
  },[])

  return (
    <View style={[styles.container, { padding: 24 }]}>
      <View style={styles.profileTitle}>Contact Information</View>
      {/* <Input placeholder={'name'} />
      <Input placeholder={'email'} /> */}
      <View style={[styles.inputBook,]}>
        <TextInput placeholder='name' style={styles.inputChild}></TextInput>
      </View>
      <View style={[styles.inputBook,]}>
        <TextInput placeholder='email' style={styles.inputChild}></TextInput>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[styles.inputBook, { width: '27%' }]}>
          <TextInput placeholder='+62' style={styles.inputChild}></TextInput>
        </View>
        <View style={[styles.inputBook, { width: '70%' }]}>
          <TextInput placeholder='phone number' style={styles.inputChild}></TextInput>
        </View>
        {/* <Input placeholder={'+62'} width={'27%'} />
        <Input placeholder={'phone number'} width={'70%'} /> */}
      </View>
      <View style={[styles.profileTitle, { marginTop: 24 }]}>Price Summary</View>
      <View style={styles.struct}>
        <Text>{price} days | {room} rooms</Text>
        <View style={styles.structChild}>
          <Text>Total</Text>
          <Text>${data.min_total_price * price * room}</Text>
        </View>
        <View style={styles.structChild}>
          <Text>Payable Now</Text>
          <Text>$1000</Text>
        </View>
      </View>
      <View style={[styles.checkinBox, { position: 'absolute', bottom: 0, left: 0 }]}>
        <Pressable style={styles.checkinBtn} onPress={checkoutTiket}>Booking</Pressable>
      </View>
    </View>
  )
}

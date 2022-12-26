import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Pressable, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { BookList } from '../component/bookList'
import { Exept } from '../component/exept'
import { ListHotel } from '../component/listHotel'
import { Null } from '../component/null'
import { styles } from '../style/style'

export const Wishlist = () => {
  const {like} = useSelector((state)=>state.like)
  const navigatin = useNavigation()
  return (
    <View style={[styles.container, {  padding: 24 }]}>
      <ScrollView>
        {like.length === 0
        ?
        <Image source={require('../data/undraw_void_3ggu.png')} style={{width:'100%',height:300}}></Image>
        :
        like.map((val)=>(
          <ListHotel data={val}/>
          // <Text>{JSON.stringify(val)}</Text>
        ))
        }
      </ScrollView>
    </View>
  )
}

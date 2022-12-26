import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Pressable, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { BookList } from '../component/bookList'
import { Exept } from '../component/exept'
import { Null } from '../component/null'
import { useProfile } from '../hook/useProfile'
import { styles } from '../style/style'

export const History = () => {
  const {history} = useSelector((state)=>state.history)
  const {isLogin} = useProfile()
  const {login}= useSelector((state)=>state.login)
  const navigatin = useNavigation()
  if (!isLogin) {
    return <Exept/>
  }
  return (
    <View style={[styles.container, {  padding: 24 }]}>
      <ScrollView>
        {history.length === 0
        ?
        <Image source={require('../data/undraw_void_3ggu.png')} style={{width:'100%',height:300}}></Image>
        :
        history.map((val)=>(
          <BookList data={val}/>
          // <Text>{JSON.stringify(val)}</Text>
        ))
        }
      </ScrollView>
    </View>
  )
}

import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useLogin } from '../hook/useLogin'
import { userHistory } from '../redux/user_login'
import { styles } from '../style/style'

export const Detail = () => {
    const {login}= useSelector((state)=>state.login)
    const {isLogin} = useLogin()
    const {checkinDate,checkoutDate,roomQty} = useSelector((state)=>state.detail)
    const dispach = useDispatch()
    const route = useRoute()
    const data = route.params.description
    const navigation = useNavigation()
    const checkout = ()=>{
        if(!isLogin){

            navigation.push('login')
        }else{
            // dispach(userHistory())
            navigation.navigate('book',{description:data})
        }
        
    }
    return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.imageBox}>

                        <Image
                            style={styles.detailImg}
                            source={{
                                uri: data.main_photo_url,
                            }}
                        />
                        <View style={styles.label}> ${data.min_total_price}</View>
                    </View>
                    <View style={styles.boxLabel}>
                        <Text style={styles.textLabel}>{data.hotel_name}</Text>
                        <Text style={styles.subText}>{data.address_trans}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={[styles.searchImg, { marginRight: 6 }]}
                                source={{
                                    uri: 'https://img.icons8.com/ios-filled/50/FAB005/christmas-star.png',
                                }}
                            />
                            <Text style={styles.rate}>{data.class}</Text>
                        </View>
                        <Text style={styles.description}>Description</Text>
                        <View style={styles.descriptionBox}>
                            <Text>Review Score</Text>
                            <Text>{data.review_score}</Text>
                            <Text>District</Text>
                            <Text>{data.district}</Text>
                            <Text>Distance from Destination</Text>
                            <Text>{data.distance} KM</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.checkinBox}>
                    <Pressable style={styles.checkinBtn} onPress={checkout}>Booking</Pressable>
                </View>
            </SafeAreaView>
    )
}

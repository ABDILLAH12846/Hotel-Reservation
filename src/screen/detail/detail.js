import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, Linking, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { userHistory } from '../../redux/user_login'
import { styles } from '../../style/style'
import { useLogin } from '../../hook/useLogin';
import { useProfile } from '../../hook/useProfile';
import { addHistory } from '../../redux/history';

export const Detail = () => {
    const { login } = useSelector((state) => state.login)
    const {isLogin}= useProfile()
    const { checkinDate, checkoutDate, roomQty } = useSelector((state) => state.detail)
    const dispach = useDispatch()
    const route = useRoute()
    const data = route.params.description
    const navigation = useNavigation()
    const checkout = () => {
        if (!isLogin) {

            navigation.push('login')
        } else {
            // dispach(userHistory(data))
            // console.log(data);
            dispach(addHistory(data))
            navigation.navigate('history')
            // Linking.openURL(data.url)
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
                    {/* <View style={styles.label}> $2765486</View> */}
                </View>
                <View style={styles.boxLabel}>
                    <Text style={styles.textLabel}>{data.hotel_name}</Text>
                    <Text style={styles.harga}>{data.min_total_price} | {data.currencycode}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <FontAwesome5 name="map-marker-alt" size={14} color="#FEE402"  />
                        <Text style={[styles.subText,{marginLeft:6}]}>{data.city_name_en},{data.country_trans}</Text>
                    </View>
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
                        <Text style={styles.key}>Review Score</Text>
                        <Text style={styles.value}>{data.review_score}</Text>
                        <Text style={styles.key}>Addres</Text>
                        <Text style={styles.value}>{data.address}</Text>
                        <Text style={styles.key}>Distance from Destination</Text>
                        <Text style={styles.value}>{data.distance} KM</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.checkinBox}>
                <Pressable style={styles.checkinBtn} onPress={checkout}>Booking</Pressable>
            </View>
        </SafeAreaView>
    )
}

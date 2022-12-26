import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Image, Pressable, Text, TextInput, Touchable, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from '../style/style'
import { Feather } from '@expo/vector-icons';
import { fetchCity } from '../redux/city_redux'
import { ListCity } from '../component/listCity'
import { popular, top_destination } from '../data/top'
import { reset } from '../redux/city_redux'
import { ListHotel } from '../component/listHotel'

import { fetchHotel } from '../redux/hotel.js'
import { Loading } from '../component/loading'
import { checkinDate, checkoutDate, roomQty } from '../redux/detai'
import { useLogin } from '../hook/useLogin'

export const HomePage = () => {
    const { isLogin } = useLogin()
    const navigation = useNavigation()
    const dispach = useDispatch()
    const { city, loading } = useSelector((state) => state.city)
    const { login, history } = useSelector((state) => state.login)
    // console.log(login);
    // console.log(history);
    const [color1, setColor1] = useState('#f4f4f4')
    const [color2, setColor2] = useState('#f4f4f4')
    const [kota, setTown] = useState('')
    const [checkin, setCheckin] = useState('')
    const [checkout, setCheckout] = useState('')
    const [room, setRoom] = useState('1')
    const ress = () => {
        console.log('kamu');
        dispach(reset('miliku'))
    }
    const search = (kota) => {

        const options = {
            method: 'GET',
            url: 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete',
            params: { text: kota, languagecode: 'en-us' },
            headers: {
                'X-RapidAPI-Key': 'a1d5ef1a50mshcef0daca678daf0p1998dajsn646e270f5eb2',
                'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
            }
        };
        if (checkin === '') {
            if (checkout === '') {

                setColor1('#f9dedc')
                setColor2('#f9dedc')
            }
            setColor1('#f9dedc')
        }
        else if (checkout === '') {
            setColor2('#f9dedc')
        }
        else {
            dispach(checkinDate(checkin))
            dispach(checkoutDate(checkout))
            dispach(roomQty(room))
            dispach(fetchCity(options))
        }
    }
    // useEffect(() => {

    //     dispach(fetchHotel("20088325"))
    // }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                {/* <Image
                    style={styles.drawerImage}
                    source={{
                        uri: 'https://img.icons8.com/material-outlined/24/null/menu--v1.png',
                    }}
                /> */}
                <Pressable onPress={ress}>

                    <Text style={{ fontSize: 18 }}>TURU</Text>
                </Pressable>
                {!isLogin ?
                    <Pressable style={styles.loginButton} onPress={() => navigation.push('login')}><Text>Login</Text></Pressable>
                    :
                    <Pressable onPress={() => navigation.navigate('wishlist')}>
                        <Feather name="heart" size={24} color="black" />
                    </Pressable>
                }
            </View>


            <ScrollView style={{ paddingHorizontal: 24, width: '100%' }}>
                <View style={styles.searchBox}>
                    <Pressable style={styles.searchBtn} onPress={() => search(kota)} >
                        <Image
                            style={styles.searchImg}
                            source={{
                                uri: 'https://img.icons8.com/ios-glyphs/30/null/search--v1.png',
                            }}
                        />
                    </Pressable>
                    <TextInput placeholderTextColor='gray' placeholder='find your destination' style={styles.input} onChangeText={(val) => setTown(val)}></TextInput>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text style={{ marginLeft: 12 }}>Check In</Text>
                        <TextInput onChangeText={(val) => {
                            setCheckin(val)
                            setColor1('#f4f4f4')
                        }} placeholderTextColor='gray' placeholder='yyyy-mm-dd' style={[styles.input, { backgroundColor: color1 }]}></TextInput>
                    </View>
                    <View style={{ width: '45%' }}>
                        <Text style={{ marginLeft: 12 }}>Check Out</Text>
                        <TextInput onChangeText={(val) => {
                            setCheckout(val)
                            setColor2('#f4f4f4')
                        }} placeholderTextColor='gray' placeholder='yyyy-mm-dd' style={[styles.input, { backgroundColor: color2 }]}></TextInput>
                    </View>

                </View>
                <View style={styles.searchBox}>
                    <TextInput placeholderTextColor='gray' placeholder='room quantity | 1 - 20' style={styles.input} onChangeText={(val) => setRoom(val)}></TextInput>
                </View>
                {
                    loading
                        ?
                        <Loading />
                        :

                        city.length > 0
                            ? city.map((val, ind) => (

                                <ListCity key={ind} data={val} checkin={checkin} checkout={checkout} room_qty={room} />
                            ))
                            :
                            // <Text>Kamu</Text>
                            <>
                                <Text style={{ fontWeight: '600', fontSize: 18, marginVertical: 12 }}>Top Destination</Text>
                                <View style={{ height: 120, marginBottom: 24 }}>
                                    <ScrollView horizontal={true} >
                                        {top_destination.map((val, ind) => (

                                            <Pressable key={ind} style={styles.slider1} onPress={() => search(val.name)}>
                                                <Image
                                                    style={{ width: 120, height: 120, borderRadius: 12 }}
                                                    source={{
                                                        uri: val.img_uri,
                                                    }}
                                                />
                                                <Text style={{ position: 'absolute', bottom: 12, left: 10, fontSize: 16, fontWeight: '600', color: '#fff' }}>{val.name}</Text>
                                            </Pressable>
                                        ))}
                                    </ScrollView>
                                </View>
                                <Text style={{ fontWeight: '600', fontSize: 18, marginVertical: 12 }}>Top Destination</Text>
                                <View style={{ height: 120, marginBottom: 24 }}>
                                    <ScrollView horizontal={true} >
                                        {popular.map((val, ind) => (

                                            <Pressable key={ind} style={styles.slider1} onPress={() => search(val.name)}>
                                                <Image
                                                    style={{ width: 120, height: 120, borderRadius: 12 }}
                                                    source={{
                                                        uri: val.img_uri,
                                                    }}
                                                />
                                                <Text style={{ position: 'absolute', bottom: 12, left: 10, fontSize: 16, fontWeight: '600', color: '#fff' }}>{val.name}</Text>
                                            </Pressable>
                                        ))}
                                    </ScrollView>
                                </View>
                                {/* <Text style={{ fontWeight: '600', fontSize: 18, marginVertical: 12 }}>Recently</Text> */}
                                {/* {hotel.map((data, ind) => (
                            <ListHotel key={ind} data={data} />
                            // <Text>{JSON.stringify(data)}</Text>
                        ))} */}
                            </>
                }
            </ScrollView>
            {/* <ScrollView style={{ paddingHorizontal: 24 }}>

                <View style={styles.list}>
                    <Image
                        style={styles.listImg}
                        source={{
                            uri: 'https://media.istockphoto.com/id/1016547708/photo/medan-great-mosque-indonesia.jpg?b=1&s=170667a&w=0&k=20&c=1zdBTlr4meOuq6UAJjLl93TX93sN-0NSP4J1rwE5-vk=',
                        }}
                    />
                    <View style={styles.listLabel}>
                        <Text style={styles.textKecil}>Masjid Raya Al-Mahsun</Text>
                    </View>
                    <Pressable style={styles.love}></Pressable>
                </View>
            </ScrollView> */}
            <View style={{height:60}}></View>
        </View>
    )
}

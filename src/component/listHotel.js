import React, { useState } from 'react'
import { View, Pressable, Text, Image } from 'react-native'
import { styles } from '../style/style'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { userLike, userUnlike } from '../redux/user_login';
import { liking, unliking } from '../redux/wish';
import { useProfile } from '../hook/useProfile';

export const ListHotel = ({ data }) => {
    const {isLogin} = useProfile()
    const { login } = useSelector((state) => state.login)
    const { like } = useSelector((state) => state.like)
    const [color, setColor] = useState('gray')
    const navigation = useNavigation()
    const dispach = useDispatch()
    const isSaved = () => {
        like === 0
            ?
            console.log('kosong')
            :
            like.find((val) => {
                if (val.hotel_name === data.hotel_name) {
                    // dispach(userUnlike(data))
                    console.log('dah ada');
                } else {
                    // dispach(userLike(data))
                    console.log('beom ada');
                }
            })
    }
    // console.log(like);
    const ngelike = () => {
        if (!isLogin) {
            navigation.push('login')
        } else {


            if (like.length > 0) {
                const isYou = like.find((val) => val.hotel_name === data.hotel_name)
                if (isYou) {
                    setColor('gray')
                    dispach(unliking(data.hotel_name))
                }
                else {
                    setColor('red')
                    dispach(liking(data))
                }
            } else {
                setColor('red')
                dispach(liking(data))
                console.log('kosog');
                console.log(like.length);

            }
        }
    }
    const detail = () => {
        navigation.navigate('detail', { description: data })
    }
    return (
        <View style={[styles.listCity, { backgroundColor: '#fff', zIndex: 1 }]}>
            <Pressable style={[styles.love, { alignItems: 'center', justifyContent: 'center' }]} onPress={ngelike}>
                <AntDesign name="heart" size={16} color={color} />
            </Pressable>
            <Image
                style={[styles.detailImg, { height: 160, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}
                source={{
                    uri: data.main_photo_url,
                }}
            />
            <View style={[styles.wrapper, { height: 90 }]}>
                <View style={{ justifyContent: 'space-around', height: '100%', width: '70%' }}>
                    <Text style={{ fontSize: 16 }}>{data.hotel_name}</Text>

                    <Pressable style={[styles.price]} onPress={detail}>
                        <Text>

                            ${data.min_total_price}
                        </Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="star" size={18} color='#FEE402' />
                    <Text style={{ marginLeft: 6 }}>{data.class}</Text>
                </View>
            </View>
        </View>
    )
}

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Pressable, Text } from 'react-native'
import { styles } from '../style/style'

export const ListCity = ({ data, checkin, checkout,room_qty }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.listCity}>
            <Image
                style={[styles.detailImg, { height: 180, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}
                source={{
                    uri: data.image_url,
                }}
            />
            <View style={styles.wrapper}>
                <Text style={{ fontSize: 16 }}>{data.name}</Text>
                <Pressable style={[styles.viewMore]} onPress={() => navigation.navigate('hotel', { destination: data.dest_id, checkin, checkout,room_qty })}>
                    <Text>

                        View More
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

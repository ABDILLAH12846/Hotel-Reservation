import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, ScrollView, Image, Text, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ListHotel } from '../component/listHotel'
import { Loading } from '../component/loading'
import { Null } from '../component/null'
import { fetchHotel } from '../redux/hotel'
import { styles } from '../style/style'


export const Hotel = () => {
    const { hotel, loading } = useSelector((state) => state.hotel)
    const dispach = useDispatch()
    const route = useRoute()
    const listing = () => {
        dispach(fetchHotel(route.params))
    }
    useEffect(() => {
        listing()
    }, [])
    // console.log(hotel);
    if (loading) {
        return <Loading />
    }
    return (
        <>
            {hotel.length === 0
                ?
                <Null />
                :
                <ScrollView style={styles.hotel}>
                    {hotel.map((data, ind) => (
                        <ListHotel key={ind} data={data} />
                    ))
                    }
                </ScrollView>
            }
        </>
    )
}

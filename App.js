import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/app/store';
import { styles } from './src/style/style';
import { List } from './src/component/list';
import kamu from './src/data/undraw_Login_re_4vu2.png'
import axios from 'axios';
// import Login from './src/screen/login';
import { Login } from './src/screen/login/login';
import { HomePage } from './src/screen/homepage';
import { Detail } from './src/screen/detail/detail';
import { Book } from './src/screen/book';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from './src/screen/profile';
import { History } from './src/screen/history';
import { Home } from './src/screen/home';
import { Hotel } from './src/screen/hotel';
import { Wishlist } from './src/screen/wishlist';
// import { fetchHotel } from './src/redux/hotel';

export default function App() {
  const Stack = createNativeStackNavigator()
  const [titel, setTitel] = useState('hay')
  const fetch = async () => {

    const options = {method: 'GET', url: 'https://hotelapi6.p.rapidapi.com/%7BPATH%7D'};
    const response = await axios.request(options);
    console.log(response.data);
    setTitel(JSON.stringify(response.data))

  }
  // const hotel = useSelector((state)=>state.hotel)
  // const dispach = useDispatch()

  // const fetching =()=>{
  //   dispach(fetchHotel())
  // }
  // useEffect(() => {
  //   fetch()
  // },[])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='login' component={Login} options={{headerTitle:'',headerShadowVisible:false}}></Stack.Screen>
          <Stack.Screen name='hotel' component={Hotel} options={{headerTitle:'Result',headerShadowVisible:false,headerStyle:{backgroundColor:'#FEE402'}}}></Stack.Screen>
          <Stack.Screen name='detail' component={Detail} options={{headerTitleAlign:'center',headerTitle:'Detail',headerShadowVisible:false}}></Stack.Screen>
          <Stack.Screen name='wishlist' component={Wishlist} options={{headerTitleAlign:'center',headerTitle:'Wishlist',headerShadowVisible:false}}></Stack.Screen>
          <Stack.Screen name='book' component={Book} options={{headerTitleAlign:'center',headerTitle:'Booking',headerShadowVisible:false}}></Stack.Screen>
          {/* <Stack.Screen name='profile' component={Profile} options={{headerTitleAlign:'center',headerTitle:'Profile',headerShadowVisible:false}}></Stack.Screen>
          <Stack.Screen name='history' component={History} options={{headerTitleAlign:'center',headerTitle:'History',headerShadowVisible:false}}></Stack.Screen> */}
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Login/> */}
      {/* <HomePage/> */}
      {/* <Detail/> */}
      {/* <Book/> */}
    {/* <Text>{titel}</Text> */}
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     width: '100%',
//     padding: '15px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 48,
//     border: 'none',
//     marginVertical: 12,
//     color:'#121212'
//   },
//   img: {
//     width: '100%',
//     height: 200
//   },
//   login: {
//     height: '60%',
//     width: '100%',
//     backgroundColor: '#FEE402',
//     // backgroundColor: '#fff',
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     alignItems: 'center',
//     justifyContent:'center',
//     padding: '24px'
//   },
//   loginImage: {
//     height: '40%',
//     width: '100%',
//     justifyContent:'center'
//     // backgroundColor:'#000'
//   },
//   container: {
//     // padding: '24px',
//     flex: 1,
//     // backgroundColor: '#FEE402',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     height: '100%'
//     // justifyContent: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#1C1C1C',
//     width: '100%',
//     padding: '16px',
//     borderRadius: '48px',
//     alignItems: 'center',
//     marginVertical:12
//     // bottom: '24px',
//     // position: 'absolute'
//   },
//   textbutton: {
//     color: '#fff'
//   },
//   title: {
//     fontSize: 30,
//     marginVertical:6,
//     fontWeight:'500',
//     color:'#1C1C1C'
//   },titleBox:{
//     width:'100%',
//     alignItems:'flex-start',
//     marginVertical:24
//   }
// });

import React from 'react'
import { Pressable, Text, TextInput, View, Image } from 'react-native'
import { useProfile } from '../../hook/useProfile'
import { styles } from '../../style/style'
import { MaterialIcons } from '@expo/vector-icons';
import { Exept } from '../../component/exept';

export const Profile = () => {
  const { mail, setMail, passw, setPassw, addr, setAddr, profile, user, setUser, saveChanges, logout, isLogin } = useProfile()
  return (
    <>
      {
        isLogin
          ?

          <View style={[styles.container, { backgroundColor: '#FEE402', alignItems: 'center' }]}>
            <MaterialIcons style={{ position: 'absolute', right: 12, top: 12 }} name="logout" size={24} color="black" onPress={logout} />
            <View style={{ height: '30%', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={[styles.profilePhoto, { borderColor: 'white', borderWidth: 5 }]}
                source={{
                  uri: profile,
                }}
              />
              <Text style={{ fontSize: 16, marginVertical: 18 }}>{mail}</Text>
              {/* <View style={styles.profilePhoto}></View> */}
            </View>
            {/* <Text>Kamu</Text> */}
            <View style={styles.profileBottom}>
              <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 20 }}>My Profile</Text>
              <Text style={{ marginTop: 10 }}>Username</Text>
              <TextInput style={[styles.input, { backgroundColor: '#f2f2f2' }]} value={user} onChangeText={(val) => setUser(val)} placeholder='username'></TextInput>
              <Text style={{ marginTop: 10 }}>Password</Text>
              <TextInput style={[styles.input, { backgroundColor: '#f2f2f2' }]} value={passw} onChangeText={(val) => setPassw(val)} placeholder='password'></TextInput>
              <Text style={{ marginTop: 10 }}>Addres</Text>
              <TextInput style={[styles.input, { backgroundColor: '#f2f2f2' }]} value={addr} onChangeText={(val) => setAddr(val)} placeholder='username'></TextInput>
              <Pressable style={{ paddingHorizontal: 12, borderWidth: 2, borderColor: '#FEE402', borderRadius: 12, width: 60, paddingVertical: 6, marginTop: 16 }} onPress={saveChanges}><Text>Save</Text></Pressable>
            </View>
          </View>
          :
          <Exept />
      }
    </>
  )
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#f4f4f4',
        borderRadius: 48,
        border: 'none',
        marginVertical: 12,
        color: '#121212',
        fontSize: 16
    },
    img: {
        width: '100%',
        height: 200
    },
    login: {
        height: '60%',
        width: '100%',
        backgroundColor: '#FEE402',
        // backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
    },
    loginImage: {
        height: '40%',
        width: '100%',
        justifyContent: 'center'
        // backgroundColor:'#000'
    },
    container: {
        // padding: '24px',
        flex: 1,
        // backgroundColor: '#FEE402',
        backgroundColor: '#fff',
        //   alignItems: 'center',
        // height: '100%'
        position: 'relative',
        // justifyContent: 'center',
    },
    containerScroll: {
        // padding: '24px',
        // flex: 1,
        width: '100%',
        // backgroundColor: '#FEE402',
        backgroundColor: '#fff',
        //   alignItems: 'center',
        height: '100%',
        padding: '24px'
        // justifyContent: 'center',
    },
    primaryButton: {
        backgroundColor: '#1C1C1C',
        width: '100%',
        padding: '16px',
        borderRadius: '48px',
        alignItems: 'center',
        marginVertical: 12
        // bottom: '24px',
        // position: 'absolute'
    },
    textbutton: {
        color: '#fff'
    },
    title: {
        fontSize: 30,
        marginVertical: 6,
        fontWeight: '500',
        color: '#1C1C1C'
    },
    titleBox: {
        width: '100%',
        alignItems: 'flex-start',
        marginVertical: 24
    },
    drawerImage: {
        width: 24,
        height: 24
    },
    header: {
        width: '100%',
        padding: 24,
        flexDirection: 'row',
        // alignContent:'space-between',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor:'#121212'
    },
    loginButton: {
        backgroundColor: '#FEE402',
        padding: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 24
    },
    greeting: {
        width: '100%',
        paddingHorizontal: 24,
    },
    textWhite: {
        fontSize: 24,
        color: '#1c1c1c'
    },
    textYellow: {
        fontSize: 24,
        color: '#FEE402'
    },
    searchImg: {
        width: 16,
        height: 16
    },
    searchBtn: {
        backgroundColor: '#FEE402',
        padding: 15,
        width: 46,
        height: 46,
        borderRadius: 23,
        position: 'absolute'
    },
    searchBox: {
        width: '100%',
        // paddingHorizontal: 24,
        flexDirection: 'row-reverse',
        alignItems: 'center',

    },
    detailImg: {
        width: '100%',
        height: 220,
        borderRadius: 12
    },
    imageBox: {
        padding: 24
    },
    label: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: '#FEE402',
        position: 'absolute',
        right: 24,
        bottom: 48,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        fontSize: 18,
        fontWeight: '500'
    },
    boxLabel: {
        width: '100%',
        paddingHorizontal: 24
    },
    textLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: '#121212'
    },
    subText: {
        fontSize: 14,
        color: '#212121',
        marginVertical: 10
    },
    rate: {
        fontSize: 16,
        fontWeight: '500'
    },
    description: {
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 12
    },
    descriptionBox: {
        padding: 12,
        backgroundColor: '#f5f3f4',
        width: '100%',
        maxHeight: 200,
        borderRadius: 12,
        overflow: 'scroll'
    },
    checkinBox: {
        width: '100%',
        padding: 24,
        // position:'absolute',
        // top:'100%',
        // left:0,
        backgroundColor: '#fff'
    },
    checkinBtn: {
        width: '100%',
        paddingVertical: 12,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.7,
        backgroundColor: '#FEE402',
        borderRadius: 12,
        alignItems: 'center'
    },
    list: {
        width: '100%',
        minHeight: 100,
        // backgroundColor:'#121212',
        alignItems: 'center',
        elevation: true
        // paddingHorizontal:24,
        // borderRadius:12
    },
    listImg: {
        borderRadius: 12,
        width: '100%',
        height: 180
    },
    listLabel: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        // opacity: 0.5,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    love: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#fff',
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1,

    },
    textKecil: {
        fontWeight: '600',
        color: '#FEE402',
        fontSize: 14
    },
    profileTitle: {
        fontSize: 18,
        fontWeight: '600'
    },
    profileList: {
        width: '100%',
        // backgroundColor:'#121212',
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        // borderBottomWidth:1,
        // borderBottomColor:'#f5f5f5'
    },
    profileValue: {
        width: '40%',
        fontSize: 15
    },
    profileInput: {
        paddingTop: 5,
        justifyContent: 'center',
        padding: 0,
        fontSize: 16,
        borderWidth: 0,
        borderColor: 'transparent',
        width: '60%',
        textAlign: 'right'

    },
    profilePhoto: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: '50%'
    },
    profileBottom: {
        height: '70%',
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24
    },
    bookList: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
        flexDirection: 'row',
        marginBottom: 12

    },
    bookImg: {
        height: '100%',
        width: 80,
        borderRadius: 12
    },
    textBook: {
        fontSize: 14
    },
    bookChild: {
        marginLeft: 12,
        justifyContent: 'space-between'
    },
    subTextBook: {
        fontSize: 12,
        marginVertical: 6,
        color: '#adb5bd'
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FEE402'
    },
    inputBook: {
        width: '100%',
        height: 40,
        // backgroundColor:'#FEE402',
        padding: 12,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#f4f4f4',
        marginVertical: 12
    },
    inputChild: {
        width: '110%',
        height: 100,
        paddingVertical: 11,
        paddingHorizontal: 12,
        fontSize: 16
    },
    struct: {
        width: '100%',
        borderColor: '#FEE402',
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        marginTop: 12
    },
    structChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding:12,
        marginTop: 12,
        fontSize: 16
    },
    listCity: {
        width: '100%',
        height: 250,
        borderRadius: 12,
        backgroundColor: '#FEE402',
        marginBottom: 24
    },
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: '#121212',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    viewMore: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 24,
        width: 110,
        // marginLeft: 12,
        // marginTop: 12,
        color: '#121212',
        fontSize: 14
    },
    hotel: {
        padding: 24,
        width: '100%'
    },
    slider1: {
        width: 120,
        height: 120,
        // backgroundColor:'black',
        marginRight: 24,
        borderRadius: 12
    },
    harga: {
        fontSize: 18,
        padding: 6,
        borderRadius: 24,
        marginVertical: 6,
        backgroundColor: '#F6F3DC',
        maxWidth: '50%',
        textAlign: 'center',
        color: '#FEE402',
        fontWeight:'600'
    },
    key:{
        fontWeight:'600',
        color: '#FEE402',
    },
    value:{
        marginBottom:8,
        fontSize:14,
        marginTop:4
    }
});

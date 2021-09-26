
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,

    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform

} from 'react-native';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Settings extends Component {



    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    LogoutUser = () => {
        try {
            auth().signOut()
                .then((navigation) => {
                    this.props.navigation.navigate('Welcome')
                })

        } catch (error) {
            console.log(error.toString())

        }

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >

                <View style={styles.container}>

                    <TouchableHighlight style={{ height: 51, width: 312, position: 'absolute', top: 50, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "#FBF7F7", alignSelf: "center" }} >
                        <View style={{ height: 51, width: 312, alignSelf: 'center' }}>

                            <Text style={{ position: "absolute", alignSelf: "center", top: 10, fontWeight: "800", color: "black", fontSize: 14, }}>OSAMAA</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{ height: 146, width: 312, position: 'absolute', top: 120, alignSelf: 'center', borderRadius: 23, borderBottomEndRadius: 2, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "#FBF7F7" }} source={require('../assets/Group1071.png')} >
                        <View style={{ height: 336, width: 312, position: 'absolute', justifyContent: 'center' }}>

                            <Text style={{ position: "absolute", alignSelf: 'flex-start', top: 10, left: 10, fontWeight: "800", color: "black", fontSize: 14, }}>Chat Settings</Text>
                            <Text style={{ position: "absolute", alignSelf: 'flex-start', top: 20, fontWeight: "800", color: "black", fontSize: 14, }}>_____________________________________________</Text>
                            <Image style={{ height: 4, width: 16, top: 60, position: 'absolute', left: 250 }} source={require('../assets/option.png')} />
                            <Text style={{ position: "absolute", alignSelf: 'flex-start', top: 55, left: 10, fontWeight: "800", color: "black", fontSize: 14, }}>Theme</Text>
                            <Image style={{ height: 4, width: 16, top: 85, position: 'absolute', left: 250 }} source={require('../assets/option.png')} />

                            <Text style={{ position: "absolute", alignSelf: "auto", top: 80, fontWeight: "800", left: '3%', color: "black", fontSize: 14, }}>Notifications</Text>
                            <Image style={{ height: 4, width: 16, top: 110, position: 'absolute', left: 250 }} source={require('../assets/option.png')} />
                            <Text style={{ position: "absolute", alignSelf: "auto", top: 105, fontWeight: "800", left: '3%', color: "black", fontSize: 14, }}>Groups</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ height: 206, width: 312, position: 'absolute', top: 300, alignSelf: "center", borderRadius: 23, borderBottomEndRadius: 2, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "#FBF7F7" }} source={require('../assets/Group1071.png')} >
                        <View style={{ height: 336, width: 312, position: 'absolute', justifyContent: 'center' }}>

                            <Text style={{ position: "absolute", alignSelf: "auto", top: 10, fontWeight: "800", left: 10, color: "black", fontSize: 14, }}>Settings</Text>
                            <Text style={{ position: "absolute", alignSelf: "auto", top: 20, fontWeight: "800", color: "black", fontSize: 14, }}>______________________________________________</Text>
                            <Text style={{ position: "absolute", alignSelf: "auto", top: 50, fontWeight: "800", left: 10, color: "black", fontSize: 14, }}>Notification</Text>
                            <Text style={{ position: "absolute", alignSelf: "auto", top: 75, fontWeight: "800", left: 10, color: "black", fontSize: 14, }}>Themes</Text>

                            <Text style={{ position: "absolute", alignSelf: "auto", top: 100, fontWeight: "800", left: 10, color: "black", fontSize: 14, }}>Privacy</Text>
                            <Text style={{ position: "absolute", alignSelf: "auto", top: 125, fontWeight: "800", left: 10, color: "black", fontSize: 14, }}>Contact Us</Text>
                            <Text style={{ position: "absolute", alignSelf: "auto", top: 150, fontWeight: "800", left: 10, color: "black", fontSize: 14, }}>Privacy</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ height: 51, width: 312, position: 'absolute', top: 520, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "lightgreen", alignSelf: "center" }} onPress={() => this.LogoutUser()} >
                        <View style={{ height: 51, width: 312, alignSelf: 'center' }}>

                            <Text style={{ position: "absolute", alignSelf: "center", top: 10, fontWeight: "800", color: "black", fontSize: 14, }}>LOGOUT</Text>
                        </View>
                    </TouchableHighlight>

                    {/* <Image style={{ height: 88, width: 312, position: 'absolute', top: '53%', left: "7%", }} source={require('../assets/Group1074.png')} />

                    <Image style={{ height: 88, width: 312, position: 'absolute', top: '66%', left: "7%", }} source={require('../assets/Group1075.png')} />


                    <Image style={{ height: 88, width: 312, position: 'absolute', top: '79%', left: "7%", }} source={require('../assets/Group1076.png')} /> */}
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: '#FAFAFA',
    },


    buttonContainer1: {
        height: 92,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        width: 150,
        top: -50,
        borderRadius: 20,
    },



    buttonContainer: {
        height: 92,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        width: 160,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#E0D8D8"

    },



    loginButton: {
        backgroundColor: "#F2F2F2",
        top: -140,
        left: -110,
        height: 111,
        width: 160
    },
    loginButton1: {
        backgroundColor: "#F2F2F2",
        top: -267,
        left: 70,
        height: 111,
        width: 160

    },
    loginButton2: {
        backgroundColor: "#F2F2F2",
        top: -270,
        left: -110,
        height: 111,
        width: 160

    },
    loginButton3: {
        backgroundColor: "#F2F2F2",
        top: -396,
        left: 70,
        height: 111,
        width: 160

    },
    loginButton4: {
        backgroundColor: "#F2F2F2",
        top: -398,
        left: -110,
        height: 111,
        width: 160


    },
    loginButton5: {
        backgroundColor: "#F2F2F2",
        top: -523,
        left: 70,
        height: 111,
        width: 160

    },
    loginButton6: {
        backgroundColor: "#F2F2F2",
        top: -185,
        left: -14,
        height: 81,
        width: 340,


    },
    loginButton7: {
        backgroundColor: "#F2F2F2",
        top: -185,
        left: -14,
        height: 81,
        width: 340

    },

    loginText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '900',
        opacity: 1,
        alignSelf: "auto",

        left: -15,
        top: 10

    },


    inputs: {
        height: 62,
        marginLeft: 16,
        borderBottomColor: 'white',
        color: "black",

        flex: 1,
    },
    image: {
        height: 160,
        width: 410,
        top: 90,
        justifyContent: "flex-start",
        marginBottom: 260


    },
    image2: {

        height: 16,
        width: 18,
        top: -110,

    }

    , Text: {
        fontFamily: 'Roboto',
        fontSize: 28,
        fontWeight: 'bold',
        left: "6%",
        color: "#000000",
        alignSelf: "flex-start",
        justifyContent: 'flex-start',
        top: "10%",

        position: "absolute",
        display: 'flex'
    },
    textInputStyle: {
        height: 40,
        width: 340,
        borderWidth: 1,
        paddingLeft: 20,
        top: -200,
        left: -14,
        margin: 5,
        borderColor: '#009688',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
    },

});

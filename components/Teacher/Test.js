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
    Platform, FlatList,
    Touchable

} from 'react-native';
import Teacher2 from './Teacher2';
import Teacher3 from "./Teacher3";
import RNFetchBlob from 'rn-fetch-blob';

import DocumentPicker from 'react-native-document-picker';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Test extends Component {


    render() {

        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >

                <View style={styles.container}>

                    <Text style={styles.Text}>{" "
                    }TBD </Text>





                    {/* <TouchableHighlight style={{ height: 70, width: 311, position: 'absolute', top: 450, alignSelf: "center", borderBottomWidth: 0.5, borderRadius: 15, borderBottomColor: "#E7D7D7", backgroundColor: "#E1D7D7" }} >
                                <View style={{ height: 70, width: 311, }}>
                                    <Image style={{ height: 21, width: 23, top: 20, left: 265, position: 'absolute' }} source={require('../../assets/g1064.png')} />

                                    <View style={{ height: 53, width: 241, backgroundColor: "white", top: "10%", left: "5%", borderRadius: 10 }}>
                                        <Image style={{ height: 22, width: 69, top: 17, left: 115, position: 'absolute' }} source={require('../../assets/g1063.png')} />
                                        <Text style={{ fontSize: 10, position: "absolute", alignSelf: "center", top: 10, fontWeight: "normal", left: 20, color: "black" }}>Assignment # 3</Text>
                                    </View>

                                </View>
                            </TouchableHighlight> */}
                </View>

            </KeyboardAvoidingView >
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

        color: "#000000",
        alignSelf: "flex-start",
        justifyContent: 'flex-start',
        top: 50,
        left: 25,

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

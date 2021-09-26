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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export default class SendNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cid: '',
            message: '',
        }
    }


    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    // createUserInDb = (uid) => {
    //     return db.collection('users').doc(uid).set(
    //         {
    //             uid
    //         }
    //     )
    // }


    createUserInDb = (message) => {
        return firestore().collection('Notifications').add(

            {

                message

            }

        )

            .then(alert('Notification Sent'))

    }



    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >
                <ScrollView style={{ minHeight: '100%', minWidth: "100%" }}
                    contentContainerStyle={{ flex: 1 }} bounces={false}>
                    <View style={styles.container}>

                        <View style={{ minHeight: 140, minWidth: '100%', position: 'absolute', top: 0, }}>
                            <Image style={styles.image} source={require('../assets/bluebg.png')} />
                            <Image style={{ height: 50, width: 52, left: "80%", top: 55, position: "absolute" }} source={require('../assets/bell.png')} />
                            <Text style={styles.Text}>Hey Osama! {'\n'}Good Evening </Text>
                        </View>


                        <View style={{ height: 529, width: '100%', position: 'absolute', top: 120, flex: 1, alignItems: "center", }}>

                            <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: "600", left: 50, top: 50, position: 'absolute' }}> Notification</Text>
                            <View style={styles.inputContainer}>



                                <TextInput style={styles.inputs}
                                    placeholder="Notifications"

                                    placeholderTextColor="#C4C4C4"
                                    keyboardType='visible-password'
                                    underlineColorAndroid='transparent'
                                    textContentType="password"
                                    onChangeText={(message) => this.setState({ message })} />
                            </View>



                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.createUserInDb(this.state.message)}>
                                <Text style={styles.loginText}>ADD</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
    },


    buttonContainer: {
        height: 62,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        width: 300,
        top: 160,
        borderRadius: 20,
    },

    loginButton: {
        backgroundColor: "#68A9F2",

    },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 1,
        fontFamily: "Roboto",
    },

    image: {
        height: 140,
        width: '100%',
        position: 'absolute'


    },
    inputContainer1: {
        borderBottomColor: '#C4C4C4',
        backgroundColor: 'transparent',
        borderRadius: 15,
        top: 150,

        borderWidth: 1,
        borderColor: '#C4C4C4',
        width: 300,
        height: 52,

        marginBottom: 20,
        color: "#C4C4C4",
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer2: {
        borderBottomColor: '#C4C4C4',
        backgroundColor: 'transparent',
        borderRadius: 15,

        top: 170,

        borderWidth: 1,
        borderColor: '#C4C4C4',
        width: 300,
        height: 52,

        marginBottom: 20,
        color: "#C4C4C4",
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        borderBottomColor: '#C4C4C4',
        backgroundColor: 'transparent',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        width: 300,
        height: 52,
        top: 110,
        marginBottom: 35,
        color: "#C4C4C4",
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 62,
        marginLeft: 16,
        borderBottomColor: 'white',
        color: "black",

        flex: 1,
    }
    , Text: {
        fontFamily: 'Roboto',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',

        top: 50,
        left: 20,
        display: 'flex'
    }

});

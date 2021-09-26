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
export default class AddSa extends Component {


    constructor(props) {
        super(props);
        this.state = {
            uid: '',
            fullName: '',
            qualification: '',
            email: '',
            password: '',
            key: 0
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

    signUp = (key, fullName, qualification, email, password) => {
        key = this.state.key++;
        if (!email || !password) {
            Alert.alert('Error', 'Please enter all fields')
        }

        return auth().createUserWithEmailAndPassword(email, password)
            .then(cred => {
                const { uid } = cred.user;

                auth().currentUser.updateProfile({
                    displayName: fullName
                })

                return uid
            })
            .then(uid => this.createUserInDb(uid, key, fullName, qualification, email, password))
            .catch(
                err => Alert.alert(err.code, err.message)
            )
    }

    createUserInDb = (uid, key, fullName, qualification, email, password) => {
        return firestore().collection('users').doc(uid).set(
            {
                uid,
                key,
                fullName,
                qualification,
                email,
                password
            }

        ).then(alert('Student Advisor Added'))

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


                        <View style={{ height: 529, width: '100%', position: 'absolute', top: 140, flex: 1, alignItems: "center", }}>
                            <Text style={{ fontSize: 18, fontFamily: 'serif', fontWeight: "700", left: 50, top: 40, position: 'absolute' }}> PERSONAL INFORMATION</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: "600", left: 50, top: 80, position: 'absolute' }}> Full Name</Text>
                            <View style={styles.inputContainer}>



                                <TextInput style={styles.inputs}
                                    placeholder="Full Name"
                                    placeholderTextColor="#C4C4C4"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(fullName) => this.setState({ fullName })} />
                            </View>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: "600", top: 167, left: 50, position: 'absolute' }}> Qualification</Text>
                            <View style={styles.inputContainer}>

                                <TextInput style={styles.inputs}
                                    placeholder="Qualifcation"
                                    placeholderTextColor="#C4C4C4"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(qualification) => this.setState({ qualification })} />
                            </View>

                            <Text style={{ fontSize: 18, fontFamily: 'serif', fontWeight: "700", left: 53, top: 260, position: 'absolute' }}>SECURITY</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: "600", left: 50, top: 290, position: 'absolute' }}> Email</Text>

                            <View style={styles.inputContainer1}>
                                <TextInput style={styles.inputs}
                                    placeholder="Email"
                                    placeholderTextColor="#C4C4C4"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(email) => this.setState({ email })} />
                            </View>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: "600", left: 50, top: 383, position: 'absolute' }}> Password</Text>

                            <View style={styles.inputContainer2}>
                                <TextInput style={styles.inputs}
                                    placeholder="password"
                                    placeholderTextColor="#C4C4C4"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(password) => this.setState({ password })} />
                            </View>



                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.signUp(this.state.key, this.state.fullName, this.state.qualification, this.state.email, this.state.password)}>
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

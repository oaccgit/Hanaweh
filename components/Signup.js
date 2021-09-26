import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Keyboard,

    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import auth from '@react-native-firebase/auth';
export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }



    userSignup = async (email, password) => {
        if (!email || !password) {
            Alert.alert("please all all the fields")
            return
        }
        try {
            await auth().createUserWithEmailAndPassword(email, password)
            alert('Signup successfull')


        } catch (err) {
            console.log(err)
            Alert.alert("something went wrong please try different password")
        }

    }




    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >
                <ScrollView style={{ minHeight: '100%', minWidth: "100%" }}
                    contentContainerStyle={{ flex: 1 }} bounces={false}>
                    <View style={styles.container}>

                        <View style={{ height: 200, minWidth: '100%', position: 'absolute', top: 0, flex: 1 }}>

                            <Image style={styles.image} source={require('../assets/design.png')} />
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#F07D7D', alignSelf: "flex-start", top: 70, left: 20 }} >Hello,{'\n'}SIGNUP !</Text>



                        </View>



                        <View style={{ height: 360, width: '100%', position: 'absolute', top: 260, alignItems: "center", }}>

                            {/* <Text style={{ fontSize: 18, color: 'white', position: 'absolute', left: 0, top: 1, fontWeight: 'bold' }}>LOGIN</Text> */}

                            <View style={styles.inputContainer}>

                                <TextInput style={styles.inputs}
                                    placeholder="Username"
                                    placeholderTextColor="white"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(userName) => this.setState({ userName })} />
                            </View>

                            <View style={styles.inputContainer}>



                                <TextInput style={styles.inputs}
                                    placeholder="Email"
                                    placeholderTextColor="white"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(email) => this.setState({ email })} />
                            </View>


                            <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="password"
                                    placeholderTextColor="white"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(password) => this.setState({ password })} />
                            </View>



                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.userSignup(this.state.email, this.state.password)}>
                                <Text style={styles.loginText}>SIGNUP</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.linkContainer} onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={{ color: 'white', left: 40, }}>Already have account? LOGIN</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </ScrollView>

            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F07D7D',
    },


    buttonContainer: {
        height: 62,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        width: 300,
        borderRadius: 20,


    },
    linkContainer: {
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        width: 300,
        borderRadius: 20,


    },


    loginButton: {
        backgroundColor: "white",
    },
    loginText: {
        color: '#F07D7D',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 1,
        fontFamily: "Roboto",
    },

    image: {
        height: 230,
        width: '100%',
        position: 'absolute'


    },
    inputContainer: {
        borderBottomColor: 'white',
        backgroundColor: 'transparent',
        borderRadius: 15,
        alignSelf: 'center',

        justifyContent: 'center',


        borderWidth: 1,
        borderColor: 'white',
        width: 300,
        height: 52,
        marginBottom: 20,
        color: "white",
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 52,
        marginLeft: 10,
        borderBottomColor: 'white',
        color: "white",


        alignSelf: 'center',
        alignItems: 'center'
    }
    , Text: {
        fontFamily: 'Roboto',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F07D7D',

        top: -230,
        left: -60,
        display: 'flex'
    }

});

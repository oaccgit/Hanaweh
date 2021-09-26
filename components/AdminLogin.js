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

export default class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    userLogin = async (email, password) => {
        if (!email || !password) {
            Alert.alert("please all all the fields")
            return
        }
        try {
            const result = await auth().signInWithEmailAndPassword(email, password).then((navigation) => {
                this.props.navigation.navigate('AdminMain')

            })
            console.log(result.user)

        } catch (err) {
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

                        <View style={{ minHeight: 239, minWidth: '100%', position: 'absolute', top: 0, flex: 1 }}>

                            <Image style={styles.image} source={require('../assets/design.png')} />
                            <Image style={{ height: 45, width: 140, alignSelf: "center", top: 70 }} source={require('../assets/hanaweh.png')} />
                            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>LOGIN</Text>



                        </View>



                        <View style={{ height: 229, width: '100%', position: 'absolute', top: 310, flex: 1, alignItems: "center", }}>
                            <View style={styles.inputContainer}>



                                <TextInput style={styles.inputs}
                                    placeholder="Username"
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



                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.userLogin(this.state.email, this.state.password)}>
                                <Text style={styles.loginText}>LOGIN</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.linkContainer} onPress={() => this.onClickListener('restore_password')}>
                                <Text style={{ color: 'white', left: 70, }}>Forgot Password</Text>
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

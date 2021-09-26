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

export default class StudentMain extends Component {

    constructor(props) {
        super(props);
        state = {
            fullName: '',
            qualification: '',
            email: '',
            password: '',
        }
    }


    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >
                <ScrollView
                    contentContainerStyle={{ flex: 1 }} bounces={false}>
                    <View style={styles.container}>

                        <Image style={styles.image} source={require('../assets/bluebg.png')} />
                        <Text style={styles.Text}>Add new Student  </Text>



                        <Text style={{ fontSize: 18, fontFamily: 'serif', fontWeight: "700", left: -32, top: -100 }}> PERSONAL INFORMATION</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: "600", left: -115, top: -80 }}> Full Name</Text>
                        <View style={styles.inputContainer}>



                            <TextInput style={styles.inputs}
                                placeholder="Full Name"
                                placeholderTextColor="#C4C4C4"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                onChangeText={(fullName) => this.setState({ fullName })} />
                        </View>
                        <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: "600", left: -104, top: -87 }}> Qualification</Text>
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                placeholder="Qualifcation"
                                placeholderTextColor="#C4C4C4"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                onChangeText={(qualification) => this.setState({ qualification })} />
                        </View>

                        <Text style={{ fontSize: 18, fontFamily: 'serif', fontWeight: "700", left: -103, top: -80 }}>SECURITY</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: "600", left: -129, top: -60 }}> Email</Text>

                        <View style={styles.inputContainer1}>
                            <TextInput style={styles.inputs}
                                placeholder="Email"
                                placeholderTextColor="#C4C4C4"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: "600", left: -115, top: -57 }}> Password</Text>

                        <View style={styles.inputContainer2}>
                            <TextInput style={styles.inputs}
                                placeholder="password"
                                placeholderTextColor="#C4C4C4"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>



                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                            <Text style={styles.loginText}>ADD</Text>
                        </TouchableHighlight>


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

        backgroundColor: 'white',
    },


    buttonContainer: {
        height: 62,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        width: 300,
        borderRadius: 20,
    },

    loginButton: {
        backgroundColor: "#68A9F2",
        top: -30
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 1,
        fontFamily: "Roboto",
    },

    image: {
        height: 200,
        width: 410,
        top: -90,
        justifyContent: "flex-start"


    },
    inputContainer1: {
        borderBottomColor: '#C4C4C4',
        backgroundColor: 'transparent',
        borderRadius: 15,


        borderWidth: 1,
        borderColor: '#C4C4C4',
        width: 300,
        height: 52,
        top: -50,
        marginBottom: 20,
        color: "#C4C4C4",
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer2: {
        borderBottomColor: '#C4C4C4',
        backgroundColor: 'transparent',
        borderRadius: 15,


        borderWidth: 1,
        borderColor: '#C4C4C4',
        width: 300,
        height: 52,
        top: -48,
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
        top: -75,
        marginBottom: 20,
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

        top: -160,
        left: -50,
        display: 'flex'
    }

});

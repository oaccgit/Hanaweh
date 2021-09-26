import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Welcome extends Component {



    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <View style={{ height: 239, width: '100%', position: 'absolute', top: 0, flex: 1 }}>
                        <Image style={styles.image} source={require('../assets/design.png')} />

                        <Image style={{ height: 45, width: 140, alignSelf: "center", top: '40%' }} source={require('../assets/hanaweh1.png')} />
                    </View>


                    <View style={{ height: 229, width: '100%', position: 'absolute', top: 310, flex: 1, alignItems: "center", }}>
                        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('AdminLogin')}>
                            <Text style={styles.loginText}>ADMIN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('TeacherLogin')}>
                            <Text style={styles.loginText}>TEACHER</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={styles.loginText}>STUDENT</Text>
                        </TouchableOpacity>

                    </View>


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
        backgroundColor: '#F7B749',
    },


    buttonContainer: {
        height: 62,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',



        marginBottom: 15,
        width: 300,
        borderRadius: 10,
    },

    loginButton: {
        backgroundColor: "white",
    },
    loginText: {
        color: '#F7B749',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 1,

        fontFamily: "Roboto",


    },
    image: {
        height: 230,
        width: '100%',
        position: 'absolute'



    }
    , Text: {
        fontFamily: 'Roboto',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#F7B749',

        top: -260,
        left: -55,
        display: 'flex'
    }

});

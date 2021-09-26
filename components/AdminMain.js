import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform

} from 'react-native';

export default class AddTeacher extends Component {



    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >
                <ScrollView style={{ minHeight: '100%', minWidth: "100%" }}
                    contentContainerStyle={{ flex: 1 }} bounces={false}>
                    <View style={styles.container}>


                        <Image style={styles.image} source={require('../assets/bluebg.png')} />
                        <TouchableHighlight style={{ height: 50, width: 60, top: "1%", position: 'absolute', top: 50, left: 290 }} onPress={() => this.props.navigation.navigate('SendNotification')}>
                            <Image style={{ height: 50, width: 60, top: "1%", position: 'absolute' }} source={require('../assets/bell.png')} />
                        </TouchableHighlight>


                        <Text style={styles.Text}>Good Evening </Text>




                        <View style={{ height: 529, width: '100%', position: 'absolute', top: 140, flex: 1, alignItems: "center" }}>


                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('AddStudent')}>



                                <View style={{
                                    height: 92,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                    width: 160,
                                    borderRadius: 20,
                                }}>
                                    <Text style={styles.loginText}>Create Student {'\n'}
                            Profile</Text>
                                    <Image style={{ height: 24, width: 24, left: '80%', top: '80%', position: 'absolute' }} source={require('../assets/icon2.png')} />
                                </View>

                            </TouchableHighlight>


                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton1]} onPress={() => this.props.navigation.navigate('ViewStudent')}>
                                <View style={{
                                    height: 92,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                    width: 160,
                                    borderRadius: 20,
                                }}>
                                    <Image style={{ height: 24, width: 24, left: '80%', top: '80%', position: 'absolute' }} source={require('../assets/iconn.png')} />
                                    <Text style={styles.loginText}>View Student {'\n'}Profile</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton2]} onPress={() => this.props.navigation.navigate('AddTeacher')}>
                                <View style={{
                                    height: 92,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                    width: 160,
                                    borderRadius: 20,
                                }}>
                                    <Image style={{ height: 24, width: 24, left: '78%', top: '80%', position: 'absolute' }} source={require('../assets/icon1.png')} />
                                    <Text style={styles.loginText}>Create Teacher {'\n'}
                            Profile</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton3]} onPress={() => this.props.navigation.navigate('ViewTeacher')}>
                                <View style={{
                                    height: 92,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                    width: 160,
                                    borderRadius: 20,
                                }}>
                                    <Image style={{ height: 24, width: 24, left: '80%', top: '80%', position: 'absolute' }} source={require('../assets/icon3.png')} />
                                    <Text style={styles.loginText}>View Teacher {'\n'}Profile</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton4]} onPress={() => this.props.navigation.navigate('AddSa')}>
                                <View style={{
                                    height: 92,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                    width: 160,
                                    borderRadius: 20,
                                }}>

                                    <Image style={{ height: 24, width: 24, left: '78%', top: '80%', position: 'absolute' }} source={require('../assets/icon4.png')} />
                                    <Text style={styles.loginText}>Create SA {'\n'}
                            Profile</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton5]} onPress={() => this.props.navigation.navigate('ViewSa')}>
                                <View style={{
                                    height: 92,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                    width: 160,
                                    borderRadius: 20,
                                }}>
                                    <Image style={{ height: 24, width: 24, left: '80%', top: '80%', position: 'absolute' }} source={require('../assets/icon5.png')} />
                                    <Text style={styles.loginText}>View SA {'\n'}Profile</Text>
                                </View>
                            </TouchableHighlight>


                            <TouchableHighlight style={[styles.container1, styles.loginButton6]} onPress={() => this.props.navigation.navigate('AddCourse')}>
                                <View style={{
                                    height: 71,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                    width: 340,
                                    borderRadius: 20,
                                }}>
                                    <Image style={{ height: 24, width: 24, left: '5%', top: '30%', position: 'absolute' }} source={require('../assets/icon6.png')} />
                                    <Image style={{ height: 24, width: 24, left: '80%', top: '30%', position: 'absolute' }} source={require('../assets/icon8.png')} />
                                    <Text style={styles.loginText1}>Add New Course</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.container1, styles.loginButton7]} onPress={() => this.props.navigation.navigate('AttendanceSchedule')}>
                                <View style={{
                                    height: 71,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                    width: 340,
                                    borderRadius: 20,
                                }}>
                                    <Image style={{ height: 24, width: 24, left: '5%', top: '30%', position: 'absolute' }} source={require('../assets/icon6.png')} />
                                    <Image style={{ height: 24, width: 24, left: '80%', top: '30%', position: 'absolute' }} source={require('../assets/icon8.png')} />
                                    <Text style={styles.loginText1}>Attendance Schedule</Text>
                                </View>
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

        backgroundColor: 'white',
    },

    container1: {
        height: 71,
        width: 340,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,

        borderRadius: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#E0D8D8"

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
        borderBottomWidth: 2,
        borderBottomColor: "#E0D8D8"

    },



    loginButton: {
        backgroundColor: "#F2F2F2",
        top: 5,
        left: 18,
        height: 111,
        width: 160,
        position: 'absolute'
    },
    loginButton1: {
        backgroundColor: "#F2F2F2",
        top: 5,
        left: 195,
        height: 111,
        width: 160,
        position: 'absolute'

    },
    loginButton2: {
        backgroundColor: "#F2F2F2",
        top: 125,
        left: 18,
        height: 111,
        width: 160,
        position: 'absolute'

    },
    loginButton3: {
        backgroundColor: "#F2F2F2",
        top: 125,
        left: 195,
        height: 111,
        width: 160,
        position: 'absolute'

    },
    loginButton4: {
        backgroundColor: "#F2F2F2",
        top: 245,
        left: 18,
        height: 111,
        width: 160,
        position: 'absolute'


    },
    loginButton5: {
        backgroundColor: "#F2F2F2",
        top: 245,
        left: 195,
        height: 111,
        width: 160,
        position: 'absolute'

    },
    loginButton6: {
        backgroundColor: "#F2F2F2",
        top: 362,
        left: 18,
        height: 71,
        width: 340,
        position: 'absolute'


    },
    loginButton7: {
        backgroundColor: "#F2F2F2",
        top: 440,
        left: 18,
        height: 71,
        width: 340,
        position: 'absolute'

    },

    loginText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        opacity: 1,
        alignSelf: 'flex-start',

        top: 10,
        left: 1

    },
    loginText1: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        opacity: 1,
        alignSelf: 'center',



    },
    image: {
        height: 140,
        width: '100%',
        position: 'absolute',
        top: 0


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

        top: 30,
        left: 20,
        display: 'flex',
        position: "absolute"
    }

});

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,

    TouchableHighlight,
    Dimensions,
    Image,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform

} from 'react-native';

// Get the screen height
const { height } = Dimensions.get('window');


export default class Student3 extends Component {
    state = {
        screenHeight: 0,
    };



    screen1 = () => {

        this.props.stateChange();
    };
    screen2 = e => {
        e.preventDefault();
        this.props.stateChange1();
    };
    screen3 = e => {
        e.preventDefault();
        this.props.stateChange2();
    };
    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };

    render() {

        const scrollEnabled = this.state.screenHeight > height;

        return (

            <ScrollView
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
                contentContainerStyle={{ flex: 1 }} bounces={false}>
                <KeyboardAvoidingView style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                >


                    <View style={styles.container}>

                        <Text style={styles.Text}>{" "
                        }Hey Osama! {"\n"} Good Evening </Text>

                        <TouchableHighlight style={{ height: 50, width: 60, top: "1%", position: 'absolute', top: 50, left: 290 }} onPress={() => this.props.navigation.navigate('Messages')} >
                            <Image style={{ height: 50, width: 60, top: "1%", position: 'absolute' }} source={require('../assets/message.png')} />
                        </TouchableHighlight>
                        <TouchableHighlight style={{ height: 50, width: 352, position: 'absolute', top: 150, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white", alignSelf: "center", position: 'absolute' }}>
                            <View style={{ height: 50, width: 352, }}>
                                <TouchableHighlight style={{ height: 40, width: 100, position: 'absolute', top: 3, left: 12, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white" }} onPress={this.screen1} >
                                    <Text style={{ top: 9, left: 6 }}>Assingment</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={{ height: 40, width: 100, position: 'absolute', top: 3, left: 125, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white" }} onPress={this.screen2}>
                                    <Text style={{ top: 9, left: 16 }}>Quiz</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={{ height: 40, width: 100, position: 'absolute', top: 3, left: 240, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "#F07D7D" }} onPress={this.screen3}>
                                    <Text style={{ top: 9, left: 6, }}>Attendance</Text>
                                </TouchableHighlight>

                            </View>
                        </TouchableHighlight>




                        {/* 
                        <TouchableHighlight style={{ height: 80, width: 165, position: 'absolute', top: '40%', left: "7%", borderRadius: 33, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "#FFFFFF" }} >
                            <View style={{ height: 80, width: 165, }}>
                                <Text style={{ position: "absolute", alignSelf: "center", top: '20%', fontWeight: "normal", fontSize: 12, left: '10%' }}>Due Today</Text>
                                <Text style={{ position: "absolute", alignSelf: "center", top: '40%', fontWeight: "bold", left: '10%' }}>SQE Assingment</Text>
                            </View>
                        </TouchableHighlight>
    
    
                        <TouchableHighlight style={{ height: 80, width: 165, position: 'absolute', top: '40%', left: "50%", borderRadius: 33, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "#FFFFFF" }} >
                            <View style={{ height: 80, width: 165, }}>
                                <Text style={{ position: "absolute", alignSelf: "center", top: '20%', fontSize: 12, fontWeight: "normal", left: "10%" }}>Due Tommorrow</Text>
                                <Text style={{ position: "absolute", alignSelf: "center", top: '40%', fontWeight: "bold", left: "10%" }}>NA Assingment</Text>
                            </View>
                        </TouchableHighlight> */}

                        {/* <Text style={{ position: "absolute", left: '10%', top: "55%", fontSize: 16, fontWeight: 'bold', }}> COMPLETED</Text> */}




                        <View style={{ height: 600, width: '100%', justifyContent: 'center', alignSelf: 'center', position: 'absolute', top: 200, }}>

                            <TouchableHighlight style={{ height: 84, width: 311, position: 'absolute', top: 30, alignSelf: "center", borderBottomWidth: 0.5, borderRadius: 15, borderBottomColor: "#E7D7D7", backgroundColor: "#E1D7D7" }} onPress={() => this.props.navigation.navigate('Attendance')} >
                                <View style={{ height: 84, width: 311, }}>
                                    <Image style={{ height: 21, width: 23, top: 20, left: 265, position: 'absolute' }} source={require('../assets/g1064.png')} />



                                    <Text style={{ fontSize: 15, position: "absolute", alignSelf: "center", top: 20, fontWeight: "normal", left: 20, color: "black" }}>Object Oriented Programming</Text>


                                </View>
                            </TouchableHighlight>

                            {/* <Text style={{ position: "absolute", left: 25, top: 20, fontSize: 16, fontWeight: 'bold', }}> ATTENDANCE</Text>
                            <View style={{ position: "absolute", height: 32, width: 305, borderRadius: 15, top: 60, justifyContent: 'center', alignSelf: 'center' }} >
                                <TextInput
                                    style={{ position: "absolute", height: 32, width: 305, borderRadius: 15, alignSelf: 'center', borderWidth: 0.7, borderColor: 'black' }}

                                    value="5/9/2021"

                                    underlineColorAndroid="transparent"
                                    placeholder="Select Date"


                                />

                                <Image style={{ height: 13, width: 14, left: 230 }} source={require('../assets/p1.png')} />
                            </View>


                            <TouchableHighlight style={{ height: 80, width: 312, position: 'absolute', top: 120, alignSelf: "center", borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white" }} onPress={() => console.log(this.props.navigation)}>

                                <View style={{ height: 80, width: 312, }}>
                                    <Image style={{ height: 15, width: 39, top: "35%", position: 'absolute', left: "73%" }} source={require('../assets/Group1092.png')} />
                                    <Image style={{ height: 40, width: 40, top: "21%", position: 'absolute', left: "3%" }} source={require('../assets/Group1094.png')} />
                                    <Text style={{ position: "absolute", alignSelf: "center", top: '33%', left: "20%", fontWeight: "bold", color: "black" }}>Numerical Analysis </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{ height: 80, width: 312, position: 'absolute', top: 220, alignSelf: "center", borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white" }} >
                                <View style={{ height: 80, width: 312, }}>
                                    <Image style={{ height: 15, width: 39, top: "35%", position: 'absolute', left: "73%" }} source={require('../assets/Group1092.png')} />
                                    <Image style={{ height: 40, width: 40, top: "21%", position: 'absolute', left: "3%" }} source={require('../assets/Group1095.png')} />
                                    <Text style={{ position: "absolute", alignSelf: "center", top: '33%', left: "20%", fontWeight: "bold", color: "black" }}>Information Security</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{ height: 80, width: 312, position: 'absolute', top: 320, alignSelf: "center", borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white" }} >
                                <View style={{ height: 80, width: 312, }}>
                                    <Image style={{ height: 15, width: 39, top: "35%", position: 'absolute', left: "73%" }} source={require('../assets/Group1092.png')} />
                                    <Image style={{ height: 40, width: 40, top: "21%", position: 'absolute', left: "3%" }} source={require('../assets/Group1096.png')} />
                                    <Text style={{ position: "absolute", alignSelf: "center", top: '33%', left: "20%", fontWeight: "bold", color: "black" }}>Object Oriented</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{ height: 80, width: 312, position: 'absolute', top: 420, alignSelf: "center", borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white" }} >
                                <View style={{ height: 80, width: 312, }}>
                                    <Image style={{ height: 15, width: 39, top: "35%", position: 'absolute', left: "73%" }} source={require('../assets/Group1092.png')} />
                                    <Image style={{ height: 40, width: 40, top: "21%", position: 'absolute', left: "3%" }} source={require('../assets/Group1097.png')} />
                                    <Text style={{ position: "absolute", alignSelf: "center", top: '33%', left: "20%", fontWeight: "bold", color: "black" }}>Software Analysis</Text>
                                </View>
                            </TouchableHighlight> */}
                            {/* <Image style={{ height: 88, width: 312, position: 'absolute', top: '53%', left: "7%", }} source={require('../assets/Group1074.png')} />
    
                        <Image style={{ height: 88, width: 312, position: 'absolute', top: '66%', left: "7%", }} source={require('../assets/Group1075.png')} />
    
    
                        <Image style={{ height: 88, width: 312, position: 'absolute', top: '79%', left: "7%", }} source={require('../assets/Group1076.png')} /> */}
                        </View>

                    </View>

                </KeyboardAvoidingView>
            </ScrollView >

        );
        //     case 'two':
        //         return (
        //             <Student1 />
        //         );
        //     case 'three':
        //         return (
        //             <Student2 />
        //         );

        //     default:
        //         (console.log('This is a multi-step form built with React.'))
        // }

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

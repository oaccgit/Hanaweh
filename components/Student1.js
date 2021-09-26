import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Dimensions,
    TouchableHighlight,
    Image,
    Alert,
    FlatList,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Touchable

} from 'react-native';
import Student2 from './Student2';
import Student3 from "./Student3";
import firestore from '@react-native-firebase/firestore';

import { TouchableOpacity } from 'react-native-gesture-handler';

// Get the screen height
const { height } = Dimensions.get('window');

export default class Student1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'one',

            data: [],

        };
    }
    componentDidMount() {
        this.callfunctiontopopulateFlatList();
    }


    callfunctiontopopulateFlatList = () => {

        var newArray = [];

        firestore()
            .collection('courses')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    newArray.push(documentSnapshot.data());
                });

            }).then(testing => {
                console.log('New Array Push is =', newArray);
                this.setState({ data: newArray });
            });


        // this.setState({data:[]});


    }

    stateChange = () => {
        const { page } = this.state;
        this.setState({
            page: 'one',
            screenHeight: 0,
        });
    };
    stateChange1 = () => {
        const { page } = this.state;
        this.setState({
            page: 'two'
        });
    };
    stateChange2 = () => {
        const { page } = this.state;
        this.setState({
            page: 'three'
        });
    };
    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };

    render() {
        const scrollEnabled = this.state.screenHeight > height;
        const { page } = this.state;

        switch (page) {
            case 'one':
                return (

                    <KeyboardAvoidingView style={styles.container}
                        behavior={Platform.OS === 'ios' ? 'padding' : ''}
                    >

                        <View style={styles.container}>

                            <Text style={styles.Text}>{" "
                            }Hey Osama! {"\n"} Good Evening </Text>

                            <TouchableHighlight style={{ height: 50, width: 60, top: "1%", position: 'absolute', top: 50, left: 290 }} onPress={() => this.props.navigation.navigate('Messages')}>
                                <Image style={{ height: 50, width: 60, top: "1%", position: 'absolute' }} source={require('../assets/message.png')} />
                            </TouchableHighlight>



                            <TouchableHighlight style={{ height: 50, width: 352, position: 'absolute', top: 150, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white", alignSelf: "center", position: "absolute" }}>
                                <View style={{ height: 50, width: 352, }}>
                                    <TouchableHighlight style={{ height: 40, width: 100, position: 'absolute', top: 3, left: 12, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "#F07D7D" }}   >
                                        <Text style={{ top: 9, left: 6 }}>Assingment</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={{ height: 40, width: 100, position: 'absolute', top: 3, left: 125, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white" }} onPress={this.stateChange1}>
                                        <Text style={{ top: 9, left: 16 }}>Quiz</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={{ height: 40, width: 100, position: 'absolute', top: 3, left: 240, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white" }} onPress={this.stateChange2}>
                                        <Text style={{ top: 9, left: 6 }}>Attendance</Text>
                                    </TouchableHighlight>

                                </View>

                            </TouchableHighlight>


                            <View style={{ height: 600, width: '100%', justifyContent: 'center', alignSelf: 'center', position: 'absolute', top: 200, }}>





                                <FlatList style={{ height: 341, width: 350, position: 'absolute', alignSelf: 'center', top: 50, borderBottomWidth: 0.5, borderBottomColor: "#E7D7D7", backgroundColor: "white" }}
                                    data={this.state.data}
                                    renderItem={({ item }) => (
                                        <View style={{ height: 70, width: 340, alignSelf: 'center', marginBottom: 12, borderRadius: 23, borderWidth: 1.5, borderColor: "#E7D7D7", backgroundColor: "white" }}>

                                            <Text style={{ position: 'absolute', fontSize: 16, top: 23, marginBottom: 12, alignSelf: "center", alignContent: "center", fontWeight: 'bold' }}> {item.course} </Text>


                                        </View>
                                    )}
                                />
                            </View>
                        </View>

                    </KeyboardAvoidingView>

                );
            case 'two':
                return (
                    <Student2
                        navigation={this.props.navigation}
                        stateChange={this.stateChange}
                        stateChange1={this.stateChange1}
                        stateChange2={this.stateChange2}
                    />
                );
            case 'three':
                return (
                    <Student3
                        navigation={this.props.navigation}
                        stateChange={this.stateChange}
                        stateChange1={this.stateChange1}
                        stateChange2={this.stateChange2}
                    />
                );

            default:
                (console.log('hello'))
        }

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

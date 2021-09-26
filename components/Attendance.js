import React, { Component } from 'react';


import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,

    TouchableHighlight,
    FlatList,
    Image,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform

} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';


export default class TeacherAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickerValue: '',

            data: [],
        }
    }
    componentDidMount() {
        this.callfunctiontopopulateFlatList();
    }


    callfunctiontopopulateFlatList = () => {

        var newArray = [];

        firestore()
            .collection('ObjectOrientedProgramming')
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




    render() {

        return (

            <ScrollView
                contentContainerStyle={{ flex: 1 }} bounces={false}>
                <KeyboardAvoidingView style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                >


                    <View style={styles.container}>
                        <Text style={{ fontSize: 20, position: 'absolute', top: 50, alignSelf: 'center', }}>Attendance</Text>
                    </View>
                    <View style={{
                        height: 700, width: '100%', position: 'absolute', backgroundColor: '#d8e6df', top: 110, alignSelf: "center", justifyContent: "center"
                    }}>
                        <Picker style={{
                            height: 50, width: 150, position: 'absolute', top: 2, borderColor: 'black', borderWidth: 1, alignSelf: 'center', color: 'black'
                        }}
                            selectedValue={this.state.pickerValue}
                            onValueChange={(pickerValue) => this.setState({ pickerValue })}
                        >

                            <Picker.Item label="lecture1" value="lecture1" />
                        </Picker>


                        <FlatList style={{ height: 300, width: 390, position: 'absolute', top: 70, alignSelf: "center", borderBottomWidth: 0.5, borderBottomColor: "#E7D7D7", backgroundColor: "white" }}
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <View style={{ height: 71, width: 390, borderBottomWidth: 0.5, }}>
                                    <Image style={{ height: 37, width: 37, top: 12, position: 'absolute' }} source={require('../assets/Group1098.png')} />
                                    <Text style={{ position: 'absolute', fontSize: 14, left: 45, top: 33 }}> {item.email} </Text>
                                    <Text style={{ position: "absolute", alignSelf: "center", top: '20%', fontWeight: "bold", left: 45, color: "black" }}>Lecture 01:</Text>
                                    <Text style={{
                                        height: 50, width: 140, position: 'absolute', top: 10, left: 265,
                                    }}

                                    >{item.pickerValue1}

                                    </Text>

                                </View>
                            )}
                        />


                    </View>



                </KeyboardAvoidingView>
            </ScrollView >

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

    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 1,
        fontFamily: "Roboto",
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
        left: "6%",
        color: "#000000",
        alignSelf: "flex-start",
        justifyContent: 'flex-start',
        top: "10%",

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

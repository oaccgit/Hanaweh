import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Picker,


    TouchableHighlight,
    FlatList,
    Image,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform

} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export default class MarkAttendance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uid: '',
            Attendance: "",
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: ''
        }
    }
    componentDidMount() {
        this.callfunctiontopopulateFlatList();
    }

    callfunctiontopopulateFlatList = () => {

        var newArray = [];

        firestore()
            .collection('users')
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




    // createUserInDb = (uid) => {
    //     return db.collection('users').doc(uid).set(
    //         {
    //             uid
    //         }
    //     )
    // }



    createUserInDb = (uid, Attendance) => {
        return firestore().collection('Attendance').doc({ uid }).set(
            {
                uid,
                Attendance,

            }

        ).then(alert('Teacher Added'))

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
                            <Image style={styles.image} source={require('../../assets/bluebg.png')} />

                            <Text style={styles.Text}>Good Evening </Text>
                        </View>


                        <View style={{ height: 529, width: '100%', position: 'absolute', top: 140, flex: 1, alignItems: "center", }}>


                            <View style={styles.inputContainer2}>
                                <TextInput style={styles.inputs}
                                    placeholder="password"
                                    placeholderTextColor="#C4C4C4"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(password) => this.setState({ password })} />
                            </View>


                            <FlatList style={{ height: 741, width: 350, position: 'absolute', top: 10, alignSelf: "center", borderBottomWidth: 0.5, borderBottomColor: "#E7D7D7", backgroundColor: "white" }}
                                data={this.state.data}
                                renderItem={({ item }) => (
                                    <View style={{ height: 71, width: 350, borderBottomWidth: 0.5, }}>
                                        <Image style={{ height: 37, width: 37, top: 12, position: 'absolute' }} source={require('../../assets/Group1098.png')} />

                                        <Text style={{ position: "absolute", alignSelf: "center", top: '20%', fontWeight: "bold", left: 45, color: "black" }}>{item.fullName}</Text>

                                    </View>
                                )}
                            />



                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.createUserInDb(this.state.uid, this.state.Attendance)}>
                                <Text style={styles.loginText}>Submit</Text>
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

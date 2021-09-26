import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,

    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform

} from 'react-native';
import firestore from '@react-native-firebase/firestore';
export default class ViewTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: [],
        }
    }
    componentDidMount() {
        this.callfunctiontopopulateFlatList();
    }


    callfunctiontopopulateFlatList = () => {

        var newArray = [];

        firestore()
            .collection('teachers')
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
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >

                <View style={styles.container}>

                    <View style={{ height: 190, width: '100%', top: 1, flex: 1, position: 'absolute', }}>
                        <Image style={styles.image} source={require('../assets/bluebg.png')} />
                        {/* <Image style={{
                                height: 50, width: 52, left:
                                    "80%", top: 55, position: "absolute"
                            }} source={require('../assets/bell.png')} /> */}


                        <Text style={styles.Text}>Teachers Profile! </Text>
                    </View>


                    <View style={{
                        height: 500, width: '100%', position: 'absolute', backgroundColor: 'white', top: 150, alignSelf: "center", justifyContent: "center"
                    }}>


                        <FlatList style={{ height: 741, width: 350, position: 'absolute', top: 10, alignSelf: "center", borderBottomWidth: 0.5, borderBottomColor: "#E7D7D7", backgroundColor: "white" }}
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <View style={{ height: 71, width: 350, borderBottomWidth: 0.5, }}>
                                    <Image style={{ height: 37, width: 37, top: 12, position: 'absolute' }} source={require('../assets/Group1098.png')} />
                                    <Text style={{ position: 'absolute', fontSize: 14, left: 45, top: 33 }}> {item.email} </Text>
                                    <Text style={{ position: "absolute", alignSelf: "center", top: '20%', fontWeight: "bold", left: 45, color: "black" }}>{item.fullName}</Text>

                                </View>
                            )}
                        />

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

        backgroundColor: 'white',
        minHeight: '100%',
        minWidth: "100%"
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
        height: 84,
        width: 323,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 15,

        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#E0D8D8"

    },



    loginButton: {
        backgroundColor: "#F2F2F2",
        top: 3,

        height: 84,
        width: 323
    },
    loginButton1: {
        backgroundColor: "#F2F2F2",
        top: 3,

        height: 111,
        width: 160

    },
    loginButton2: {
        backgroundColor: "#F2F2F2",
        top: 3,

        height: 84,
        width: 323

    },
    loginButton3: {
        backgroundColor: "#F2F2F2",
        top: 3,

        height: 84,
        width: 323

    },
    loginButton4: {
        backgroundColor: "#F2F2F2",
        top: 3,

        height: 84,
        width: 323


    },
    loginButton5: {
        backgroundColor: "#F2F2F2",
        top: 3,

        height: 84,
        width: 323

    },
    loginButton6: {
        backgroundColor: "#F2F2F2",
        top: 3,

        height: 84,
        width: 323


    },
    loginButton7: {
        backgroundColor: "#F2F2F2",
        top: 3,

        height: 84,
        width: 323

    },

    loginText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '900',
        opacity: 1,
        alignSelf: "auto",

        left: -15,
        top: 30

    },
    loginText1: {
        color: 'blue',
        fontSize: 16,
        fontWeight: '900',
        opacity: 1,
        alignSelf: "auto",

        left: '80%',
        top: 30

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
        top: '0%',
        justifyContent: "flex-start",



    },
    image2: {

        height: 16,
        width: 18,
        left: "90%",
        top: '40%'

    }

    , Text: {
        fontFamily: 'Roboto',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        top: 60,

        left: 40,
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

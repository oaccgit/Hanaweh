import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,

    TouchableHighlight,

    Image, FlatList,

    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Platform

} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import CourseManagement1 from "./CourseManagement1";

import DocumentPicker from 'react-native-document-picker';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
export default class CourseManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {

            count: 'one',
            files: []

        };
    }

    componentDidMount() {
        this.getFiles();
    }

    change = () => {
        const { count } = this.state;
        this.setState({
            count: 'one'
        });
    };
    change1 = () => {
        const { count } = this.state;
        this.setState({
            count: 'two'
        });
    };

    chooseFile = async () => {

        try {
            const file = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            // console.log(
            //     res.uri,
            //     res.type, // mime type
            //     res.name,
            //     res.size
            // );
            // const path = await this.normalizePath(file.uri);

            const result = await RNFetchBlob.fs.readFile(file.uri, 'base64');
            console.log(result);
            this.uploadFileToFirebaseStorage(result, file)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }

        }


    }

    uploadFileToFirebaseStorage = async (result, file) => {
        const uploadTask = storage().ref(`allFiles/${file.name}`).putString(result, 'base64', { contentType: file.type });

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    this.saveFileToRealtimeDatabase(downloadURL, file);
                });
            }
        );
    }

    saveFileToRealtimeDatabase(downloadURL, file) {
        const uniqueKey = database().ref().push().key;
        database().ref(`allFiles/${uniqueKey}`).update({
            fileName: file.name,
            fileType: file.type,
            fileURL: downloadURL,
        })
    }

    // we have to remove fileprefix from path url

    getFiles() {

        const onChildAdded = database()
            .ref(`allFiles`)
            .on('child_added', (snapshot) => {
                let helperArr = [];
                helperArr.push(snapshot.val());
                this.setState({ files: helperArr });
                console.log(snapshot.val());
            });
        return () => database().ref(`allFiles`).off('child_added', onChildAdded);
    }


    async normalizePath(path) {

        if (Platform.OS === 'ios' || Platform.OS === 'android') {
            const filePrefix = 'file://';
            if (path.startsWith(filePrefix)) {
                path = path.substring(filePrefix.length);

                try {
                    path = decodeURI(path);

                } catch (e) { }
            }
        }
        return path;
    }


    render() {
        const { count } = this.state;

        switch (count) {
            case 'one':
                return (

                    <ScrollView
                        contentContainerStyle={{ flex: 1 }} bounces={false}>
                        <KeyboardAvoidingView style={styles.container}
                            behavior={Platform.OS === 'ios' ? 'padding' : ''}
                        >


                            <View style={styles.container}>
                                <Text style={{ fontSize: 18, position: 'absolute', top: 40 }}>Course Management</Text>
                            </View>
                            <View style={{
                                height: 133, width: 312, position: 'absolute', top: 90, backgroundColor: "#FFD5D5", borderRadius: 18
                            }} >
                                <Text style={{ position: "absolute", alignSelf: "center", top: '15%', fontWeight: "normal", fontSize: 14, left: '10%', color: "black" }}>Course Name {"       "} Object Oriented </Text>
                                <Text style={{ position: "absolute", alignSelf: "center", top: '40%', fontWeight: "normal", fontSize: 14, left: '10%', color: "black" }}>Semester {"               "} Spring-2021</Text>
                                <Text style={{ position: "absolute", alignSelf: "center", top: '65%', fontWeight: "normal", fontSize: 14, left: '10%', color: "black" }}>_______________________________________</Text>

                            </View>

                            <TouchableHighlight style={{ height: 50, width: 300, alignSelf: 'center', position: 'absolute', top: 240, borderRadius: 23, borderColor: "#E7D7D7", backgroundColor: "#FAFAFA" }}  >
                                <View style={{ height: 50, width: 300, }}>
                                    <TouchableHighlight style={{ height: 40, width: 90, position: 'absolute', top: 2, borderBottomWidth: 2.5, borderBottomColor: "#E7D7D7", backgroundColor: "#FAFAFA" }} >
                                        <Text style={{ top: 10, left: 6 }}>Lectures</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={{ height: 40, width: 90, position: 'absolute', top: 2, left: 100, borderBottomWidth: 2.5, borderBottomColor: "#FAFAFA", backgroundColor: "FAFAFA" }} onPress={this.change1}>
                                        <Text style={{ top: 10 }}>Assignments</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={{ height: 40, width: 90, position: 'absolute', top: 2, left: 210, borderBottomWidth: 2.5, borderBottomColor: "#FAFAFA", backgroundColor: "#FAFAFA" }}>
                                        <Text style={{ top: 10, left: 8 }}>Quizes</Text>
                                    </TouchableHighlight>

                                </View>
                            </TouchableHighlight>


                            <Text style={{ fontSize: 16, position: "absolute", alignSelf: "center", top: 310, fontWeight: "bold", left: 60, color: "black" }}>NEW LECTURE</Text>

                            <TouchableHighlight style={{ height: 130, width: 290, top: 350, alignSelf: "center", position: 'absolute' }} onPress={this.chooseFile}>
                                <Image style={{ height: 130, width: 290 }} source={require('../assets/Group964.png')} />
                            </TouchableHighlight>
                            <Text style={{ fontSize: 16, position: "absolute", alignSelf: "center", top: 485, fontWeight: "bold", left: 60, color: "black" }}>UPLOADED</Text>

                            <FlatList style={{ height: 441, width: 350, position: 'absolute', top: 485, borderRadius: 13, alignSelf: "center", borderBottomWidth: 0.5, borderBottomColor: "#E7D7D7", backgroundColor: "lightgrey" }}
                                data={this.state.files}


                                renderItem={({ item }) => (
                                    <TouchableHighlight style={{ height: 71, width: 350, borderBottomWidth: 0.5, }} onPress={() => {
                                        this.props.navigation.navigate('FilePreview', {
                                            fileData: item
                                        })
                                    }}>
                                        <View style={{ height: 71, width: 350, borderBottomWidth: 0.5, }}>

                                            <Text style={{ position: "absolute", alignSelf: "center", top: 30, fontWeight: "bold", left: 5, color: "black" }}>{item.fileName}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )}
                            />





                            {/* <TouchableHighlight style={{ height: 70, width: 283, position: 'absolute', top: 515, alignSelf: "center", borderBottomWidth: 0.5, borderRadius: 15, borderBottomColor: "#E7D7D7", backgroundColor: "#F0E5E5" }} >
                                <View style={{ height: 70, width: 283, }}>
                                    <Image style={{ height: 22, width: 52, top: 25, left: 190, position: 'absolute' }} source={require('../../assets/Group1068.png')} />
                                    <Image style={{ height: 16, width: 16, top: 25, left: 250, position: 'absolute' }} source={require('../../assets/cancel.png')} />
                                    <View style={{ height: 53, width: 155, backgroundColor: "white", top: 9, left: 10, borderRadius: 10 }}>
                                        <Text style={{ fontSize: 10, position: "absolute", alignSelf: "center", top: 20, fontWeight: "normal", left: 30, color: "black" }}>Lecture Name</Text>
                                    </View>

                                </View>
                            </TouchableHighlight> */}


                        </KeyboardAvoidingView>
                    </ScrollView >

                );


            case 'two':
                return (
                    <CourseManagement1
                        change={this.change}
                        change1={this.change1}
                        change2={this.change2}

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









// import React, { Component } from 'react';
// import Student1 from "./Student1";
// import Student2 from "./Student2";
// import Student3 from "./Student3";

// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     Button,

//     TouchableHighlight,

//     Image,
//     Alert,
//     ScrollView,
//     KeyboardAvoidingView,
//     Platform

// } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import CourseManagement1 from './CourseManagement1';

// export default class CourseManagement extends Component {
//     state = {

//         count: 'one',

//     };


//     change = () => {
//         const { count } = this.state;
//         this.setState({
//             count: 'one'
//         });
//     };
//     change1 = () => {
//         const { count } = this.state;
//         this.setState({
//             count: 'two'
//         });
//     };



//     render() {
//         const { count } = this.state;

//         switch (count) {
//             case 'one':
//                 return (

//                     <ScrollView
//                         contentContainerStyle={{ flex: 1 }} bounces={false}>
//                         <KeyboardAvoidingView style={styles.container}
//                             behavior={Platform.OS === 'ios' ? 'padding' : ''}
//                         >


//                             <View style={styles.container}>
//                                 <Text style={{ fontSize: 18, position: 'absolute', top: '5%' }}>Course Management</Text>
//                             </View>
//                             <View style={{
//                                 height: 133, width: 312, position: 'absolute', top: '15%', backgroundColor: "#FFD5D5", borderRadius: 18
//                             }} >
//                                 <Text style={{ position: "absolute", alignSelf: "center", top: '15%', fontWeight: "normal", fontSize: 14, left: '10%', color: "black" }}>Course Name {"       "} Object Oriented</Text>
//                                 <Text style={{ position: "absolute", alignSelf: "center", top: '40%', fontWeight: "normal", fontSize: 14, left: '10%', color: "black" }}>Semester {"               "} Spring-2021</Text>
//                                 <Text style={{ position: "absolute", alignSelf: "center", top: '65%', fontWeight: "normal", fontSize: 14, left: '10%', color: "black" }}>Teacher Name {"       "}Dr. Shagufta</Text>

//                             </View>

//                             <TouchableHighlight style={{ height: 50, width: 300, alignSelf: 'center', position: 'absolute', top: 250, borderRadius: 23, borderColor: "#E7D7D7", backgroundColor: "#FAFAFA" }}  >
//                                 <View style={{ height: 50, width: 300, }}>
//                                     <TouchableHighlight style={{ height: 40, width: 90, position: 'absolute', top: '6%', borderBottomWidth: 2.5, borderBottomColor: "#E7D7D7", backgroundColor: "#FAFAFA" }} onPress={this.change}>
//                                         <Text style={{ top: "20%", left: "7%" }}>Lectures</Text>
//                                     </TouchableHighlight>

//                                     <TouchableHighlight style={{ height: 40, width: 90, position: 'absolute', top: '6%', left: "33%", borderBottomWidth: 2.5, borderBottomColor: "#FAFAFA", backgroundColor: "FAFAFA" }} onPress={this.change1}>
//                                         <Text style={{ top: "20%" }}>Assignments</Text>
//                                     </TouchableHighlight>

//                                     <TouchableHighlight style={{ height: 40, width: 90, position: 'absolute', top: '6%', left: "66%", borderBottomWidth: 2.5, borderBottomColor: "#FAFAFA", backgroundColor: "#FAFAFA" }} >
//                                         <Text style={{ top: "20%", left: "17%" }}>Quizes</Text>
//                                     </TouchableHighlight>

//                                 </View>
//                             </TouchableHighlight>







//                             <TouchableHighlight style={{ height: 70, width: 283, position: 'absolute', top: 300, alignSelf: "center", borderBottomWidth: 0.5, borderRadius: 15, borderBottomColor: "#E7D7D7", backgroundColor: "#E1D7D7" }} >
//                                 <View style={{ height: 70, width: 283, }}>
//                                     <Image style={{ height: 22, width: 52, top: "30%", left: "75%", position: 'absolute' }} source={require('../assets/downloads.png')} />

//                                     <View style={{ height: 53, width: 155, backgroundColor: "white", top: "10%", left: "5%", borderRadius: 10 }}>
//                                         <Text style={{ position: "absolute", alignSelf: "center", top: '20%', fontWeight: "normal", left: '20%', color: "black" }}>Lecture Name</Text>
//                                     </View>
//                                 </View>
//                             </TouchableHighlight>



//                             <TouchableHighlight style={{ height: 70, width: 283, position: 'absolute', top: 380, alignSelf: "center", borderBottomWidth: 0.5, borderRadius: 15, borderBottomColor: "#E7D7D7", backgroundColor: "#E1D7D7" }} >
//                                 <View style={{ height: 70, width: 283, }}>
//                                     <Image style={{ height: 22, width: 52, top: "30%", left: "75%", position: 'absolute' }} source={require('../assets/downloads.png')} />
//                                     <View style={{ height: 53, width: 155, backgroundColor: "white", top: "10%", left: "5%", borderRadius: 10 }}>
//                                         <Text style={{ position: "absolute", alignSelf: "center", top: '20%', fontWeight: "normal", left: '20%', color: "black" }}>Lecture Name</Text>
//                                     </View>

//                                 </View>
//                             </TouchableHighlight>



//                             <TouchableHighlight style={{ height: 70, width: 283, position: 'absolute', top: 460, alignSelf: "center", borderBottomWidth: 0.5, borderRadius: 15, borderBottomColor: "#E7D7D7", backgroundColor: "#E1D7D7" }} >
//                                 <View style={{ height: 70, width: 283, }}>
//                                     <Image style={{ height: 22, width: 52, top: "30%", left: "75%", position: 'absolute' }} source={require('../assets/downloads.png')} />
//                                     <View style={{ height: 53, width: 155, backgroundColor: "white", top: "10%", left: "5%", borderRadius: 10 }}>
//                                         <Text style={{ position: "absolute", alignSelf: "center", top: '20%', fontWeight: "normal", left: '20%', color: "black" }}>Lecture Name</Text>
//                                     </View>
//                                 </View>
//                             </TouchableHighlight>



//                             <TouchableHighlight style={{ height: 70, width: 283, position: 'absolute', top: 540, alignSelf: "center", borderBottomWidth: 0.5, borderRadius: 15, borderBottomColor: "#E7D7D7", backgroundColor: "#E1D7D7" }} >
//                                 <View style={{ height: 70, width: 283, }}>
//                                     <Image style={{ height: 22, width: 52, top: "30%", left: "75%", position: 'absolute' }} source={require('../assets/downloads.png')} />
//                                     <View style={{ height: 53, width: 155, backgroundColor: "white", top: "10%", left: "5%", borderRadius: 10 }}>
//                                         <Text style={{ position: "absolute", alignSelf: "center", top: '20%', fontWeight: "normal", left: '20%', color: "black" }}>Lecture Name</Text>
//                                     </View>

//                                 </View>
//                             </TouchableHighlight>


//                         </KeyboardAvoidingView>
//                     </ScrollView >

//                 );


//             case 'two':
//                 return (
//                     <CourseManagement1
//                         change={this.change}
//                         change1={this.change1}

//                     />
//                 );


//             default:
//                 (console.log('hello'))
//         }

//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',

//         display: "flex",
//         width: "100%",
//         height: "100%",
//         backgroundColor: '#FAFAFA',
//     },


//     buttonContainer1: {
//         height: 92,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 15,
//         width: 150,
//         top: -50,
//         borderRadius: 20,
//     },



//     buttonContainer: {
//         height: 92,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 15,
//         width: 160,
//         borderRadius: 20,
//         borderWidth: 1,
//         borderColor: "#E0D8D8"

//     },



//     loginButton: {
//         backgroundColor: "#F2F2F2",
//         top: -140,
//         left: -110,
//         height: 111,
//         width: 160
//     },
//     loginButton1: {
//         backgroundColor: "#F2F2F2",
//         top: -267,
//         left: 70,
//         height: 111,
//         width: 160

//     },
//     loginButton2: {
//         backgroundColor: "#F2F2F2",
//         top: -270,
//         left: -110,
//         height: 111,
//         width: 160

//     },
//     loginButton3: {
//         backgroundColor: "#F2F2F2",
//         top: -396,
//         left: 70,
//         height: 111,
//         width: 160

//     },
//     loginButton4: {
//         backgroundColor: "#F2F2F2",
//         top: -398,
//         left: -110,
//         height: 111,
//         width: 160


//     },
//     loginButton5: {
//         backgroundColor: "#F2F2F2",
//         top: -523,
//         left: 70,
//         height: 111,
//         width: 160

//     },
//     loginButton6: {
//         backgroundColor: "#F2F2F2",
//         top: -185,
//         left: -14,
//         height: 81,
//         width: 340,


//     },
//     loginButton7: {
//         backgroundColor: "#F2F2F2",
//         top: -185,
//         left: -14,
//         height: 81,
//         width: 340

//     },

//     loginText: {
//         color: 'black',
//         fontSize: 16,
//         fontWeight: '900',
//         opacity: 1,
//         alignSelf: "auto",

//         left: -15,
//         top: 10

//     },


//     inputs: {
//         height: 62,
//         marginLeft: 16,
//         borderBottomColor: 'white',
//         color: "black",

//         flex: 1,
//     },
//     image: {
//         height: 160,
//         width: 410,
//         top: 90,
//         justifyContent: "flex-start",
//         marginBottom: 260


//     },
//     image2: {

//         height: 16,
//         width: 18,
//         top: -110,

//     }

//     , Text: {
//         fontFamily: 'Roboto',
//         fontSize: 28,
//         fontWeight: 'bold',
//         left: "6%",
//         color: "#000000",
//         alignSelf: "flex-start",
//         justifyContent: 'flex-start',
//         top: "10%",

//         position: "absolute",
//         display: 'flex'
//     },
//     textInputStyle: {
//         height: 40,
//         width: 340,
//         borderWidth: 1,
//         paddingLeft: 20,
//         top: -200,
//         left: -14,
//         margin: 5,
//         borderColor: '#009688',
//         borderRadius: 15,
//         backgroundColor: '#FFFFFF',
//     },


// });
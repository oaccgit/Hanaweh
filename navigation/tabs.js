import React from "react";
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Student1 from "../components/Student1";
import Student2 from "../components/Student2";
import Student3 from "../components/Student3";
import Test from "../components/Teacher/Test";
import Settings from "../components/Settings";
import CourseManagement from "../components/CourseManagement";
import StudentMain from "../components/StudentMain";


import { COLORS } from "../constants";
import Attendance from "../components/Attendance";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
    },
};

// const CameraButton = () => {
//     return (
//         <View
//             style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: 50,
//                 height: 50,
//                 borderRadius: 25,
//                 backgroundColor: COLORS.primary,
//             }}
//         >
//             <Image
//                 source={require('../assets/icons/camera.png')}
//                 resizeMode="contain"
//                 style={{
//                     width: 23,
//                     height: 23
//                 }}
//             />
//         </View>
//     );
// };

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            tabBarOptions={{
                style: {
                    height: 45,
                    position: 'absolute',
                    left: 20,
                    right: 20,
                    bottom: 15,
                    borderRadius: 20

                }
            }}


            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={require('../assets/tab1.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "X":
                            return (
                                <Image
                                    source={require('../assets/tab3.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        // case "Camera":
                        //     return (
                        //         <CameraButton />
                        //     );
                        case "CM":
                            return (
                                <Image
                                    source={require('../assets/tab2.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Settings":
                            return (
                                <Image
                                    source={require('../assets/tab4.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                    }
                }
            })}
        >
            <Tab.Screen name='Home' component={Student1} />



            <Tab.Screen
                name="X"

                component={Test}
            />

            <Tab.Screen
                name="CM"
                component={CourseManagement}



            />
            <Tab.Screen
                name="Settings"
                component={Settings}
            />
        </Tab.Navigator>
    );
};

export default Tabs;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import AdminLogin from "../components/AdminLogin";
import AdminMain from "../components/AdminMain";

import ViewStudent from "../components/ViewStudent";
import AddTeacher from "../components/AddTeacher";
import AddStudent from "../components/AddStudent";
import AddSa from "../components/AddSa";
import ViewSa from "../components/ViewSa";
import ViewTeacher from '../components/ViewTeacher'
const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="AddTeacher" component={AddTeacher} options={{

                    headerShown: false

                }} />
                <Stack.Screen name="AddStudent" component={AddStudent} options={{

                    headerShown: false

                }} />
                <Stack.Screen name="AdminLogin" component={AdminLogin} options={{

                    headerShown: false

                }} />

                <Stack.Screen name="AdminMain" component={AdminMain} options={{

                    headerShown: false

                }} />
                <Stack.Screen name="ViewStudent" component={ViewStudent} options={{

                    headerShown: false

                }} />
                <Stack.Screen name="AddSa" component={AddSa} options={{

                    headerShown: false

                }} />
                <Stack.Screen name="ViewSa" component={ViewSa} options={{

                    headerShown: false

                }} />
                <Stack.Screen name="ViewTeacher" component={ViewTeacher} options={{

                    headerShown: false

                }} />



            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthNavigator
// import { StyleSheet, Text, View } from 'react-native';
// import Welcome from "./components/Welcome";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import AddStudent from "./components/AddStudent";
// import AddTeacher from "./components/AddTeacher"

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//     <AddTeacher />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


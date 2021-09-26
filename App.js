
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import AdminLogin from "./components/AdminLogin";
import AdminMain from "./components/AdminMain";
import StudentMain from "./components/StudentMain";
import ViewStudent from "./components/ViewStudent";
import Tabs from "./navigation/tabs";
import Messages from "./components/Mesages";
import Student1 from "./components/Student1";
import Student2 from "./components/Student2";
import Student3 from "./components/Student3";
import CourseManagement from "./components/CourseManagement";
import CourseManagement1 from "./components/CourseManagement1";
import Teacher1 from "./components/Teacher/Teacher1";
import Teacher2 from "./components/Teacher/Teacher2";
import Teacher3 from "./components/Teacher/Teacher3";
import TeacherMessage from "./components/Teacher/TeacherMessage";
import TeacherCM from "./components/Teacher/TeacherCM";
import TeacherCM1 from "./components/Teacher/TeacherCM1";
import TeacherCM2 from "./components/Teacher/TeacherCM2";
import TeacherSettings from './components/Teacher/TeacherSettings';
import TeacherLogin from "./components/Teacher/TeacherLogin";
import Tabs1 from "./navigation/tabs1";
import Attendance from "./components/Attendance";
import Attendance1 from "./components/Attendance1";
import TeacherAttendance from './components/Teacher/TeacherAttendance';
import AddSa from "./components/AddSa";
import ViewSa from "./components/ViewSa";
import ViewTeacher from './components/ViewTeacher'
import AddCourse from './components/AddCourse';
import SendNotification from "./components/SendNotification";
import MarkAttendance from './components/Teacher/MarkAttendance';
import FilePreview from './components/FilePreview';
import Test from './components/Teacher/Test';
import AttendanceSchedule from './components/AttendanceSchedule';
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',

    }
  }

  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"

            component={Welcome}

            options={{

              headerShown: false

            }}
          />
          <Stack.Screen name="Signup" component={Signup} options={{

            headerShown: false

          }} />
          <Stack.Screen name="Login" component={Login} options={{

            headerShown: false

          }} />
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
          <Stack.Screen name="Tabs" component={Tabs} options={{

            headerShown: false,

          }} />

          <Stack.Screen name="ViewStudent" component={ViewStudent} options={{

            headerShown: false

          }} />
          <Stack.Screen name="Messages" component={Messages} options={{

            headerShown: false

          }} />
          <Stack.Screen name="Student1" component={Student1} options={{

            headerShown: false

          }} />
          <Stack.Screen name="Student2" component={Student2} options={{

            headerShown: false

          }} />
          <Stack.Screen name="Student3" component={Student3} options={{

            headerShown: false

          }} />
          <Stack.Screen name="CM" component={CourseManagement} options={{

            headerShown: false

          }} />
          <Stack.Screen name="CM2" component={CourseManagement1} options={{

            headerShown: false

          }} />
          <Stack.Screen name="Teacher1" component={Teacher1} options={{

            headerShown: false

          }} />
          <Stack.Screen name="Teacher2" component={Teacher2} options={{

            headerShown: false

          }} />
          <Stack.Screen name="Teacher3" component={Teacher3} options={{

            headerShown: false

          }} />
          <Stack.Screen name="TeacherCM" component={TeacherCM} options={{

            headerShown: false

          }} />
          <Stack.Screen name="TeacherCM1" component={TeacherCM1} options={{

            headerShown: false

          }} />
          <Stack.Screen name="TeacherCM2" component={TeacherCM2} options={{

            headerShown: false

          }} />
          <Stack.Screen name="TeacherMessage" component={TeacherMessage} options={{

            headerShown: false

          }} />
          <Stack.Screen name="TeacherSettings" component={TeacherSettings} options={{

            headerShown: false

          }} />
          <Stack.Screen name="TeacherLogin" component={TeacherLogin} options={{

            headerShown: false

          }} />


          <Stack.Screen name="Tabs1" component={Tabs1} options={{

            headerShown: false,

          }} />

          <Stack.Screen name="Attendance" component={Attendance} options={{

            headerShown: false


          }} />

          <Stack.Screen name="Attendance1" component={Attendance1} options={{

            headerShown: false


          }} />


          <Stack.Screen name="TeacherAttendance" component={TeacherAttendance} options={{

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
          <Stack.Screen name="AddCourse" component={AddCourse} options={{

            headerShown: false

          }} />
          <Stack.Screen name="SendNotification" component={SendNotification} options={{

            headerShown: false

          }} />
          <Stack.Screen name="MarkAttendance" component={MarkAttendance} options={{

            headerShown: false

          }} />
          <Stack.Screen name="FilePreview" component={FilePreview} options={{

            headerShown: false

          }} />
          <Stack.Screen name="Test" component={Test} options={{

            headerShown: false

          }} />

          <Stack.Screen name="AttendanceSchedule" component={AttendanceSchedule} options={{

            headerShown: false

          }} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

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


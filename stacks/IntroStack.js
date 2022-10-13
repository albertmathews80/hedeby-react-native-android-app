import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import IntroOne from "./../screens/introScreens/IntroOne"
import IntroTwo from "./../screens/introScreens/IntroTwo"

import IntroThree from "./../screens/introScreens/IntroThree"
// import LoginScreen from "../screens/authScreens/LoginScreen";
// import RegisterScreen from "../screens/authScreens/RegisterScreen";
// import ForgotPassword from "../screens/authScreens/ForgotPassword";
// import OtpVerification from "../screens/authScreens/OtpScreen";
// import ResetPassword from "../screens/authScreens/ResetPassword";


const win = Dimensions.get("window");

function IntroStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="intro-one" component={IntroOne} />
            <Stack.Screen name="intro-two" component={IntroTwo} />
            <Stack.Screen name="intro-three" component={IntroThree} />
            {/* <Stack.Screen name="loginscreen" component={LoginScreen} />
            <Stack.Screen name="registerscreen" component={RegisterScreen} />
            <Stack.Screen name="forgotpassword" component={ForgotPassword} />
            <Stack.Screen name="otpverification" component={OtpVerification} />
            <Stack.Screen name="resetpassword" component={ResetPassword} /> */}

        </Stack.Navigator>
    )
}

export default IntroStack
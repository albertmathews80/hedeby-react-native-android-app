import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import HomeScreen from "../screens/appScreens/HomeScreen";


const win = Dimensions.get("window");

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="homescreen" component={HomeScreen} />


        </Stack.Navigator>
    )
}

export default HomeStack
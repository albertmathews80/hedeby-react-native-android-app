import { StyleSheet, Text, View, Dimensions, Image, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useEffect, useState } from "react";
import HomeStack from "./HomeStack"
import NotificationStack from "./NotificationStack"
import MessageStack from "./MessageStack"
import ProfileStack from "./ProfileStack"
import { LinearGradient } from 'expo-linear-gradient';
import MessageScreen from "../screens/appScreens/MessageScreen";
import HomeScreen from "../screens/appScreens/HomeScreen";
import NotificationScreen from "../screens/appScreens/NotificationScreen";
import ProfileScreen from "../screens/appScreens/ProfileScreen";
import SettingScreen from "../screens/appScreens/SettingScreen";
import WalletScreen from "../screens/appScreens/WalletScreen";
import CreateWallet from "../screens/appScreens/CreateWallet";
import TransactionScreen from "../screens/appScreens/TransactionScreen";
import TransactionFilled from "../screens/appScreens/TransactionFilled";
import EditInformation from "../screens/appScreens/EditInformation";
import TransactionsDetail from "../screens/appScreens/TransactionsDetail";
import CreateTransaction from "../screens/appScreens/CreateTransaction";
import CreateTransaction2 from "../screens/appScreens/CreateTransaction2";
import CreateTransaction3 from "../screens/appScreens/CreateTransaction3";
import MessagesScreen from "../screens/appScreens/MessagesScreen";
import ScanQR from "../screens/appScreens/ScanQR";
import ScannedQR from "../screens/appScreens/ScannedQR";
import ScannnedQR2 from "../screens/appScreens/ScannedQR2";


const win = Dimensions.get("window");
const Stack = createNativeStackNavigator();


function BottomStack({ navigation }) {
    const [screenToShow, setScreenToShow] = useState("homescreen")
    const themeColor = "blue"

    return (
        <View>
            {/* <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#181818" }, }}>

                <Tab.Screen

                    options={{

                        headerStyle: {
                            backgroundColor: "#FFF",

                        },



                        tabBarIcon: ({ focused, color, size }) => (

                            <Ionicons name="ios-bar-chart-outline" size={win.width / 17} color={focused ? "#5CE5D5" : "#FFF"} />
                        ),
                        tabBarLabel: ({ focused, color, size }) => (
                            <Text style={{ color: focused ? "#5CE5D5" : color, fontSize: win.width / 42, paddingBottom: win.height / 200 }}>Home</Text>
                        ),

                    }}
                    name="homestack"
                    component={HomeStack}
                />
                <Tab.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: "#FFF",
                        },

                        tabBarIcon: ({ focused, color, size }) => (

                            <Ionicons name="notifications" size={win.width / 17} color={focused ? "#5CE5D5" : "#FFF"} />
                        ),
                        tabBarLabel: ({ focused, color, size }) => (
                            <Text style={{ color: focused ? "#5CE5D5" : color, fontSize: win.width / 42, paddingBottom: win.height / 200 }}>Notification</Text>
                        ),
                    }}
                    name="notificationstack"
                    component={NotificationStack}
                />

                <Tab.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: "#FFF",
                        },

                        tabBarIcon: ({ focused, color, size }) => (

                            <FontAwesome name="send-o" size={win.width / 17} color={focused ? "#5CE5D5" : "#FFF"} />
                        ),
                        tabBarLabel: ({ focused, color, size }) => (
                            <Text style={{ color: focused ? "#5CE5D5" : color, fontSize: win.width / 42, paddingBottom: win.height / 200 }}>Message</Text>
                        ),
                    }}
                    name="messagestack"
                    component={MessageStack}
                />
                <Tab.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: "#FFF",
                        },

                        tabBarIcon: ({ focused, color, size }) => (

                            <FontAwesome name="user-o" size={win.width / 17} color={focused ? "#5CE5D5" : "#FFF"} />
                        ),
                        tabBarLabel: ({ focused, color, size }) => (
                            <Text style={{ color: focused ? "#5CE5D5" : color, fontSize: win.width / 42, paddingBottom: win.height / 200 }}>Profile</Text>
                        ),
                    }}
                    name="profilestack"
                    component={ProfileStack}
                />
            </Tab.Navigator > */}
            <View style={{ backgroundColor: "#001437", height: "100%" }}>
                {screenToShow === "homescreen" && <HomeScreen setScreenToShow={setScreenToShow} />}
                {screenToShow === "notificationscreen" && <NotificationScreen />}
                {screenToShow === "messagescreen" && <MessageScreen setScreenToShow={setScreenToShow} />}
                {screenToShow === "profilescreen" && <ProfileScreen setScreenToShow={setScreenToShow} />}
                {screenToShow === "settingscreen" && <SettingScreen setScreenToShow={setScreenToShow} />}
                {screenToShow === "walletscreen" && <WalletScreen setScreenToShow={setScreenToShow} />}
                {screenToShow === "createwalletscreen" && <CreateWallet setScreenToShow={setScreenToShow} />}
                {screenToShow === "transactionscreen" && <TransactionScreen setScreenToShow={setScreenToShow} />}
                {screenToShow === "transactionfilledscreen" && <TransactionFilled setScreenToShow={setScreenToShow} />}
                {screenToShow === "editinformation" && <EditInformation setScreenToShow={setScreenToShow} />}
                {screenToShow === "transactiondetail" && <TransactionsDetail setScreenToShow={setScreenToShow} />}
                {screenToShow === "createtransaction" && <CreateTransaction setScreenToShow={setScreenToShow} />}
                {screenToShow === "createtransaction2" && <CreateTransaction2 setScreenToShow={setScreenToShow} />}
                {screenToShow === "createtransaction3" && <CreateTransaction3 setScreenToShow={setScreenToShow} />}
                {screenToShow === "messages-screen" && <MessagesScreen setScreenToShow={setScreenToShow} />}
                {screenToShow === "scanqr" && <ScanQR setScreenToShow={setScreenToShow} />}
                {screenToShow === "scannedqr" && <ScannedQR setScreenToShow={setScreenToShow} />}
                {screenToShow === "scannedqr2" && (<ScannnedQR2 setScreenToShow={setScreenToShow} />
                )}
            </View>

            {screenToShow !== "settingscreen" && screenToShow !== "walletscreen" && screenToShow !== "transactionscreen" && screenToShow !== "transactionfilledscreen" &&
                screenToShow !== "createwalletscreen" && screenToShow !== "editinformation" && screenToShow !== "createtransaction" && screenToShow !== "createtransaction2" &&
                screenToShow !== "createtransaction3" && screenToShow !== "transactiondetail" && screenToShow !== "messages-screen" && screenToShow !== "scanqr" &&
                screenToShow !== "scannedqr" && screenToShow !== "scannedqr2" &&
                <View style={{ width: win.width, height: win.width / 5.5, position: "absolute", bottom: 0 }}>
                    <LinearGradient

                        colors={['rgba(14, 46, 64, 1)', 'rgba(14, 46, 64, 1)', 'rgba(0, 20, 55, 1)']}
                        style={styles.background}
                    >
                        <View style={styles.bottomWrap}>
                            <Pressable onPress={() => setScreenToShow("homescreen")} style={styles.iconsBot}>
                                <Ionicons name="ios-bar-chart-outline" size={win.width / 16} color="#5CE5D5" style={styles.iconinner} />
                            </Pressable>
                            <Pressable onPress={() => setScreenToShow("notificationscreen")} style={styles.iconsBot}>
                                <Ionicons name="notifications" size={win.width / 16} color="#5CE5D5" style={styles.iconinner} />
                            </Pressable>
                            <Pressable onPress={() => setScreenToShow("messagescreen")} style={styles.iconsBot}>
                                <FontAwesome name="send-o" size={win.width / 16} color="#5CE5D5" style={styles.iconinner} />
                            </Pressable>
                            <Pressable onPress={() => setScreenToShow("profilescreen")} style={styles.iconsBot}>
                                <FontAwesome name="user-o" size={win.width / 16} color="#5CE5D5" style={styles.iconinner} />
                            </Pressable>
                        </View>
                    </LinearGradient>
                    <View />


                </View>}
        </View>
    )
}


const styles = StyleSheet.create({
    bottomWrap: {
        width: win.width, height: win.width / 5.5, borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    iconsBot: {
        borderBottomColor: "#5CE5D5",
        borderBottomWidth: 2,
        marginBottom: win.width / 40,
        borderRadius: 2
    },
    iconinner: {
        paddingBottom: win.width / 80
    }
})


export default BottomStack
import React from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
} from "react-native";
import logo from "../../assets/images/smallLogo.png";
import { AntDesign } from "@expo/vector-icons";

const win = Dimensions.get("window");

const TransactionFilled = ({ setScreenToShow }) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <Pressable onPress={() => setScreenToShow("transactionscreen")}>
                    <Image source={logo} />
                </Pressable>
                <Text style={styles.heading}>Transactions</Text>
                <View style={{ width: win.width / 15 }}></View>
            </View>
            <View style={styles.wrapcont}>
                <View style={styles.wrapInner}>
                    <View style={styles.date}>
                        <Text style={{ color: "#5CE5D5" }}>10.04.2022</Text>
                        <AntDesign name="caretright" size={10} color="white" />
                    </View>
                    <View style={styles.date}>
                        <Text style={{ color: "#FFFFFF" }}>End Date</Text>
                        <AntDesign name="caretright" size={10} color="white" />
                    </View>
                </View>
                <View style={styles.wrapInner}>
                    <View style={styles.date}>
                        <Text style={{ color: "#FFFFFF" }}>Last week</Text>
                        <AntDesign name="caretright" size={10} color="white" />
                    </View>
                    <View></View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001437",
        // height: win.height,
        width: win.width,
        flex: 1,
    },
    wrap: {
        flexDirection: "row",
        marginTop: win.height / 40,
        height: win.width / 4.5,
        alignItems: "center",
        // marginLeft: win.width / 25,
        justifyContent: "space-between",
        paddingHorizontal: win.width / 25,
    },
    heading: {
        color: "#fff",
        fontSize: win.width / 18,
        fontWeight: "bold",
        // marginLeft: win.width / 5,
    },
    wrapcont: {
        // flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#FBFCFA40",
        height: win.height / 4.4,
        // alignItems: "center",
        paddingVertical: win.height / 40,
        justifyContent: "space-between",
        paddingHorizontal: win.width / 15,
    },
    wrapInner: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    date: {
        flexDirection: "row",
        borderWidth: 1,
        height: win.height / 15,
        width: win.width / 3,
        borderColor: "#FBFCFA42",
        justifyContent: "space-evenly",
        borderRadius: 5,
        alignItems: "center",
        // marginBottom: win.height / 30,
    },
    textcont: {
        height: win.height / 15,
        width: win.width / 1.1,
        backgroundColor: "#FBFCFA1A",
        flexDirection: "row",
        marginLeft: win.width / 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: win.height / 20,
        padding: win.width / 40,
    },
});
export default TransactionFilled;
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
import AddWallet from "../../assets/images/wallet-add.png";

const win = Dimensions.get("window");

function WalletScreen({ setScreenToShow }) {
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <Pressable onPress={() => setScreenToShow("homescreen")}>

                    <Image source={logo} style={{ marginLeft: win.width / 25 }} />
                </Pressable>
                <Text style={styles.heading}>Wallet</Text>
            </View>
            <Pressable style={styles.wrapMain} onPress={() => setScreenToShow("createwalletscreen")}>
                <View style={styles.wrapContianer}>
                    <Image source={AddWallet} />
                    <Text
                        style={{
                            color: "white",
                            fontSize: win.height / 35,

                        }}
                    >
                        Create Wallet
                    </Text>
                    <Text></Text>
                </View>
            </Pressable>
        </View>
    );
}
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

        borderBottomWidth: 1,
        borderColor: "#FBFCFA40",
    },
    heading: {
        color: "#fff",
        fontSize: win.width / 18,
        fontWeight: "bold",
        marginLeft: win.width / 3,
    },
    wrapContianer: {
        flexDirection: "row",
        height: win.height / 10,
        width: win.width / 1.1,
        marginTop: win.height / 20,
        backgroundColor: "#7898FB",
        alignItems: "center",
        borderRadius: 15,
        // marginLeft: win.width / 25,
        justifyContent: "space-between",
        paddingHorizontal: win.width / 20

    },
    wrapMain: {
        alignItems: "center"
    }
});
export default WalletScreen;
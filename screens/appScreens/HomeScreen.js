import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";
const win = Dimensions.get("window");
import HedebyLogo from "./../../assets/images/HedebyLogo.png"
import boxAdd from "./../../assets/images/box-add.png"
import sendSquare from "./../../assets/images/send-sqaure-2.png"
import transactionImg from "./../../assets/images/transactionImg.png"
import walletImg from "./../../assets/images/walletImg.png"
import { MaterialIcons } from '@expo/vector-icons';
import VectorEth from "./../../assets/images/VectorEth.png"


function HomeScreen({ setScreenToShow }) {
    return (
        <View style={styles.container}>
            <Image source={HedebyLogo} style={styles.logoImg} />
            <View style={styles.balanceView}>
                <View style={styles.topCont}>
                    <View style={styles.balanceHeading}>
                        <Text style={styles.balanceText}>Balance</Text>
                        <View style={styles.textStyle}>
                            <Text style={styles.dropText}>Wallet HB 2</Text>
                            <MaterialIcons name="arrow-drop-down" size={win.width / 15} color="white" />
                        </View>
                    </View>
                    <Text style={styles.balanceCurrent}>$ 12.400.00</Text>
                    <View style={styles.currImg}>
                        <Image source={VectorEth} />
                        <Text style={styles.currText}>11.5</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewWrap}>
                <Pressable style={styles.walletView} onPress={() => setScreenToShow("walletscreen")}>
                    <Image source={walletImg} />
                    <Text style={styles.walletText}>Wallets</Text>
                </Pressable>
                <Pressable style={styles.walletView} onPress={() => setScreenToShow("transactionscreen")}>
                    <Image source={transactionImg} />
                    <Text style={styles.walletText}>Transactions</Text>
                </Pressable>
            </View>
            <Pressable style={styles.createWrap1} onPress={() => setScreenToShow("createtransaction")}>
                <Image source={boxAdd} />
                <Text style={styles.createText}>Create transaction</Text>
                <View></View>
            </Pressable>
            <Pressable style={styles.createWrap2} onPress={() => setScreenToShow("scanqr")}>
                <Image source={sendSquare} />
                <Text style={styles.createText}>Scan handshake</Text>
                <View></View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001437",
        height: win.height,
        width: win.width,
        paddingHorizontal: win.width / 30
    },
    logoImg: {
        // width: win.width / 30,
        borderWidth: 1,
        marginTop: win.height / 16

    },
    balanceView: {
        backgroundColor: "#14254a",
        height: win.height / 6,
        marginTop: win.height / 24,
        borderRadius: win.width / 20,

    },
    viewWrap: {
        flexDirection: "row",

        justifyContent: "space-between",
        marginTop: win.height / 24
    },
    walletView: {
        height: win.height / 6,
        width: win.width / 2.3,
        backgroundColor: "#0E2e40",
        borderRadius: win.width / 20,
        alignItems: "center",
        justifyContent: "space-evenly"

    },
    walletText: {
        fontSize: win.width / 24,
        color: "#FFFFFF"
    },
    createWrap1: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        marginTop: win.height / 28,
        paddingVertical: win.height / 60,
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#BBFB3C",
        paddingHorizontal: win.width / 20,
        borderRadius: win.width / 20,

    },
    createWrap2: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        marginTop: win.height / 28,
        paddingVertical: win.height / 60,
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#FFC107",


        paddingHorizontal: win.width / 20,
        borderRadius: win.width / 20
    },
    createText: {
        color: "#fff",
        fontSize: win.width / 20
    },
    balanceHeading: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    balanceText: {
        color: "gray",
        fontSize: win.width / 20
    },
    textStyle: {
        borderWidth: 1,
        borderColor: "gray",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: win.width / 30,
        borderRadius: win.width / 50,
        width: win.width / 2.8,
        justifyContent: "space-between"
    },
    dropText: {
        color: "white"
    },
    currImg: {
        flexDirection: "row",
        alignItems: "center"
    },
    currText: {
        color: '#FFC107',
        fontSize: win.width / 24,
        marginLeft: win.width / 40
    },
    topCont: {
        height: win.height / 6,
        justifyContent: "space-evenly",
        paddingHorizontal: win.width / 20

    },
    balanceCurrent: {
        color: "white",
        fontSize: win.width / 22
    }
})

export default HomeScreen
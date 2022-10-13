import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Flower from "../../assets/images/flower.png";
import { TextInput } from "react-native";
import { ListViewComponent } from "react-native";

const win = Dimensions.get("window");

const DATA = [
    {
        Date: "22 Aug 2022",
        activityText: "Hi there, I am Naz. I have question.",
        type: "sent",
        id: "01",
    },
    {
        Date: "23 Aug 2022",
        activityText: "Hey Naz!",
        id: "02",
        type: "Recieved",
    },
    {
        activityText: "Nice to meet you, you can call me just Pol",
        // minutes: "6d",
        id: "03",
        type: "Recieved",
    },
    {
        activityText: "So, what about question ?",
        type: "Recieved",
        id: "04",
    },
    {
        Date: "Today",
        activityText: "Hi there, I am Naz. I have question.",
        minutes: "2h",
        type: "sent",
        id: "05",
    },
];

function MessagesScreen({ setScreenToShow }) {
    const renderItem = ({ item }) => (
        <View
            style={item.type === "sent" ? styles.messageWrap : styles.messageWrap2}
        >
            <Text style={styles.msgDate}>{item.Date}</Text>
            <View style={styles.sendMsgWrap}>
                <View
                    style={item.type === "sent" ? styles.messageInfo : styles.messageInfo2}
                >
                    <Text style={item.type === "sent" ? styles.message : styles.message2}>
                        {item.activityText}
                    </Text>
                </View>
                <Text style={styles.msgTime}>{item.minutes}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.wrap}>
                    <Pressable onPress={() => setScreenToShow("messagescreen")}>
                        <AntDesign name="left" size={win.width / 20} color="white" style={styles.arrow} />
                    </Pressable>
                    <Image source={Flower} />
                    <Text style={styles.heading}>Polly Johnson</Text>
                </View>

                <View style={{ marginHorizontal: win.width / 40 }}>
                    <FlatList
                        numColumns={1}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
            <View style={styles.bottominput}>
                <TextInput
                    placeholder="Type your message ..."
                    placeholderTextColor="grey"
                    backgroundColor="#FBFCFA21"
                    style={styles.input}
                />
                <FontAwesome
                    name="send"
                    size={win.width / 18}
                    color="#5CE5D5"
                    style={{ marginTop: win.width / 25 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001437",
        height: win.height,
        width: win.width,
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: win.height / 45,

    },
    wrap: {
        flexDirection: "row",
        marginTop: win.height / 20,
        // height: win.width / 4.5,
        alignItems: "center",
    },
    heading: {
        // flex: 1,
        color: "#fff",
        fontSize: win.width / 20,
        fontWeight: "bold",

        marginLeft: win.width / 20,

    },
    messageWrap: {
        justifyContent: "flex-start",


    },
    messageWrap2: {
        justifyContent: "flex-start",
    },
    arrow: {
        marginLeft: win.width / 40,
        marginRight: win.width / 25,
    },
    messageInfo: {
        width: win.width / 1.7,
        borderRadius: win.width / 30,
        justifyContent: "center",
        backgroundColor: "#7898FB",
        marginLeft: win.width / 3,

        padding: win.width / 35,

    },
    messageInfo2: {
        width: win.width / 1.5,

        borderRadius: win.width / 30,
        justifyContent: "center",
        backgroundColor: "white",
        padding: win.width / 35,

    },
    msgDate: {
        color: "grey",
        textAlign: "center",
        marginBottom: win.height / 60,

    },
    message: {
        fontSize: win.width / 22,

        color: "#FFFFFF",

    },
    message2: {
        fontSize: win.width / 22,

        marginLeft: win.width / 30,
    },
    msgTime: {
        color: "grey",
        fontSize: win.width / 30,
        marginLeft: win.width / 3.5,
    },
    input: {
        height: win.height / 15,
        width: win.width / 1.15,
        borderRadius: win.width / 30,
        paddingLeft: win.width / 30,
        marginRight: win.width / 50,
        color: "white",
    },
    bottominput: {
        // marginLeft: win.width / 30,
        flexDirection: "row",
        marginTop: win.height / 50,
        justifyContent: "center",
        // position: "absolute",
        // bottom: win.height / 30
    },
    sendMsgWrap: {
        // flexDirection: "row"


    }
});
export default MessagesScreen;
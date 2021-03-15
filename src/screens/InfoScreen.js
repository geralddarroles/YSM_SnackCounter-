import React from "react";
import { View, Text, StyleSheet } from "react-native";

function InfoScreen({ route }) {

    return (
        <View style={styles.infoSheet}>
            <Text style={styles.prayer} adjustsFontSizeToFit={true}> Peace Prayer {"\n"} St. Francis of Assisi {"\n"} {"\n"} Lord make me an instrument of your peace{"\n"}
                Where there is hatred let me sow love{"\n"}
                Where there is injury, pardon{"\n"}
                Where there is doubt, faith{"\n"}
                Where there is despair, hope{"\n"}
                Where there is darkness, light{"\n"}
                And where there is sadness, joy{"\n"} {"\n"}
                O divine master grant that I may{"\n"}
                Not so much seek to be consoled as to console{"\n"}
                To be understood as to understand{"\n"}
                To be loved as to love{"\n"}
                For it is in giving that we receive{"\n"}
                And it's in pardoning that we are pardoned{"\n"}
                And it's in dying that we are born to eternal life{"\n"}
                Amen
            </Text>
            <View style={styles.personalInfo}>
                <Text style={styles.dedication}> This app was inspired  {"\n"} by the dedicated staff  {"\n"} of Yonge Street Mission  {"\n"} {"\n"} Created by {"\n"} Gerald Darroles </Text>
                <Text></Text>
                <Text style={styles.text} dataDetectorType="email">gerald.darroles@gmail.com</Text>
                <Text style={styles.text} dataDetectorType="email">gdarroles@ysm.ca</Text>

            </View>
        </View>)
};

const styles = StyleSheet.create({
    infoSheet: {
        backgroundColor: "black",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,

    },
    text: {
        color: "white",
        flexWrap: "wrap",

    },
    prayer: {
        textAlign: "center",
        color: "white",
        marginTop: 10,
        fontSize: 14.5
    },

    personalInfo: {
        marginTop: 20,
        alignItems: "center",
        fontSize: 16
    },

    dedication: {
        color: "white",
        textAlign: "center",
        fontSize: 15
    }
});

export default InfoScreen;  
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";


//Unfinsihed screen component
//End Goal, create a context that counts of the main buttons

function InfoScreen() {
    return (
        <View style={styles.buttons}>
            <View style={styles.button1}>
                <Text> Button 1 </Text>
                <View>
                    <Text>Button 1 Label</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Button 1 count</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Button 1 count</Text>
                    <TextInput />
                </View>
            </View>
            <View style={styles.button2}>
                <View>
                    <Text> Button 1 </Text>
                    <Text>Button 1 Label</Text>
                    <TextInput />
                </View>
                <View>
                    <Text> Button 1 </Text>
                    <Text>Button 1 Label</Text>
                    <TextInput />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    infoSheet: {
        backgroundColor: "black",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,

    },

});

export default InfoScreen;  
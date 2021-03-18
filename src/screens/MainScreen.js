import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, TextInput, Button, Share } from "react-native";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import SubButton from "../components/SubButton";
import IconButton from "../components/IconButton";
import DisplayCount from "../components/DisplayCount";
import AsyncStorage from "@react-native-community/async-storage";
import CurrentTime from "../components/CurrentTime";
import moment from "moment";
import { Feather } from '@expo/vector-icons';
import * as Linking from "expo-linking";

export default function ({ navigation }) {

    // 
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("InfoScreen")}>
                    <Feather
                        name="info"
                        size={20}
                        color="white"
                        style={{ marginRight: 20 }}
                    />
                </TouchableOpacity>
            ),

        });
    }, [navigation]);


    // These state below are the main variables being tracked 
    const [snackCount, setSnackCount] = useState({
        visitor: 0,
        peopleServed: 0
    });

    const [time, setTime] = useState()

    // Called by the useEffect section of this screen after first mounting this screen component

    function showTime() {

        setInterval(() => {
            const timeNow = moment().format('hh:mm:ss A')
            setTime(timeNow)
        }, 1000);
    }

    //Called by the MainButton Component 

    function entry({ visitorEntry, peopleServedEntry }) {
        createUndo()
        setSnackCount((prevValue) => {
            return {
                visitor: prevValue.visitor + visitorEntry,
                peopleServed: prevValue.peopleServed + peopleServedEntry
            }
        });
    }

    // Manually adjust Snack Count property using the + and - icons in the SubButton Component

    function manualAdjust({ payload, label }) {
        createUndo()
        setSnackCount(prevValue => {
            return {
                ...prevValue,
                [label]: prevValue[label] + payload
            }
        });
    }

    // Reset dialog  
    // Reset the counter to 0 for all properties 
    function reset() {

        Alert.alert(
            "Reset",
            "Clicking ok will reset the counter",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => resetNow()
                }
            ],
            { cancelable: false }
        );
    }

    // Reset hoisted function 

    function resetNow() {
        setSnackCount(prevValue => {
            return {
                visitor: prevValue.visitor = 0,
                peopleServed: prevValue.peopleServed = 0
            }
        });
    }

    // This is the useState that stores the undo data, 
    //The UNDO_COUNT property is used for conditional rendering of the undo botton
    // UNDO_COUNT: 0 means the undo button has been used 

    const [undoData, setUndoData] = useState({
        visitor: 0,
        peopleServed: 0,
        UNDO_COUNT: 0
    });

    // Stores the value of snackCount whenever setSnackCount is used
    function createUndo() {
        setUndoData(() => {
            return {
                visitor: snackCount.visitor,
                peopleServed: snackCount.peopleServed,
                UNDO_COUNT: 1
            }
        });
    }

    // An alert prompt asking the user if they want to make the Undo
    function undo() {
        Alert.alert(
            "Undo",
            "Clicking undo will revert data to previous entry",
            [{
                text: "cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {
                text: "OK", onPress: () => undoNow()
            }
            ],
            { cancelable: false }
        );
    }

    // Activates the undofunction by using the undoData on the snackCount 
    // This function resets UNDO_COUNT to 0 so that the undo button will disappear
    function undoNow() {
        setSnackCount(() => {
            return {
                visitor: undoData.visitor,
                peopleServed: undoData.peopleServed,
            }
        })
        setUndoData((prevValue) => {
            return {
                ...prevValue,
                UNDO_COUNT: 0
            }
        });

    }

    // Data persistence using Async Storage

    async function storeData() {
        try {
            await AsyncStorage.setItem("currentData", JSON.stringify(snackCount));
        } catch (error) {
            console.log("Did not record Data" + error)
        }
    }

    async function readData() {
        try {
            let savedData = await AsyncStorage.getItem("currentData");
            if (savedData != null) {
                let parsedData = JSON.parse(savedData)
                setSnackCount(() => {
                    return {
                        visitor: parsedData.visitor,
                        peopleServed: parsedData.peopleServed
                    }
                })
            }
        } catch (error) {
            console.log("error retrieving data")
        }
    }

    //UseEffects Sections 
    useEffect(() => { readData(), showTime() }, []) // Reads the data when the Mainscreen component first mounts
    useEffect(() => { storeData() }, [snackCount]) // Stores data for everytime the snackCount object is changed 

    // Conditional rendering for the labels of the Display Count 

    let visitorServedLabel = ""
    snackCount.visitor >= 2 ? visitorServedLabel = "Visitors" : visitorServedLabel = "Visitor"
    let peopleServedLabel = ""
    snackCount.peopleServed >= 2 ? peopleServedLabel = "People Served" : peopleServedLabel = "Person Served"






    return (

        //Header to display the logo of YSM 
        <View style={styles.body}>
            <Header
                image={require("../../assets/logo.png")}
            />
            {/* Displays current time */}
            <CurrentTime
                time={time}
            />
       
            {/* Displays the Visitor section and the manual buttons  */}
            <View style={styles.DisplayCountBlock}>
                <View style={styles.DisplayCount}>
                    <DisplayCount
                        label={visitorServedLabel}
                        count={snackCount.visitor}
                    />
                    <View style={styles.manualButtonsView}>
                        <IconButton
                            iconName='plus-circle'
                            action={() => manualAdjust({ payload: 1, label: 'visitor' })}
                        />

                        <IconButton
                            iconName='minus-circle'
                            action={
                                snackCount.visitor == 0 ? null :
                                    () => manualAdjust({ payload: -1, label: 'visitor' })}
                        />
                    </View>
                </View>
                {/* Displays the people served section and the manual buttons  */}
                <View style={styles.DisplayCount}>
                    <DisplayCount
                        label={peopleServedLabel}
                        count={snackCount.peopleServed}
                    />

                    <View style={styles.manualButtonsView}>
                        <IconButton
                            iconName='plus-circle'
                            action={() => manualAdjust({ payload: 1, label: 'peopleServed' })}
                        />

                        <IconButton
                            iconName='minus-circle'
                            action={
                                snackCount.peopleServed == 0 ? null :
                                    () => manualAdjust({ payload: -1, label: 'peopleServed' })}
                        />
                    </View>
                </View>
            </View>

            {/* Main buttons here  */}
            <View style={styles.buttonSection}>
                <MainButton
                    title='One Person'
                    buttonPressed={() => entry({ visitorEntry: 1, peopleServedEntry: 1 })}
                />

                <MainButton
                    title='Two People'
                    buttonPressed={() => entry({ visitorEntry: 1, peopleServedEntry: 2 })}
                />
            </View>
            {/* Reset Button*/}
            <View style={styles.subButton}>
                <SubButton
                    title='Reset'
                    buttonPressed={() => reset()}
                />
                {/* Ternary operator for conditional rendering of the undo button*/}
                {undoData.UNDO_COUNT === 0 ? null : <SubButton title='Undo' buttonPressed={() => undo()} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "black",
        color: "white",
        flex: 1,
    },


    DisplayCountBlock: {
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 10
    },

    displayCountView: {
        flexDirection: 'column',
    },

    manualButtonsView: {
        flexDirection: "row-reverse",
        justifyContent: "center",
        marginRight: 20
    },

    buttonSection: {
        flexDirection: "row"
    },

    subButton: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },

}); 

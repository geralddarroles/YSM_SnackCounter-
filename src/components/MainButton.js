import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"; 

const MainButton = (props) => {
    return ( 
    <View style={styles.buttonView}>
        <TouchableOpacity on style={styles.button} onPress = {props.buttonPressed} >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity >
    </View>
    )}; 

const styles = StyleSheet.create({
    
    buttonView:{
        flexDirection:"row",
        justifyContent:'space-evenly', 
        marginVertical: 10, 
        margin: 5
    },

    button:{
        borderWidth:1,  
        marginVertical:10,
        backgroundColor: "red",
        borderWidth:1,
        borderRadius:50
    }, 

    buttonText:{
        marginVertical:30,
        marginHorizontal:20,
        fontSize:22,
        color: "white"
    },

}); 

export default MainButton; 
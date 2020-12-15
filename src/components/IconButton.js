import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"; 
import {Feather} from '@expo/vector-icons';


const IconButton = (props) => {
    return (
        <View>
            <TouchableOpacity onPress = {props.action}>
                <Feather name ={props.iconName} style={styles.manualButton} />
            </TouchableOpacity>
        </View> 
        )
}; 

const styles = StyleSheet.create({

    manualButton:{
        fontSize:40 ,
        color:'white', 
        marginHorizontal: 10,
        marginTop: 10
    }
}); 

export default IconButton; 
        
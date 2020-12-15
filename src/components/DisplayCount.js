import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"; 
import {AntDesign} from '@expo/vector-icons';

const DisplayCount = (props) => {
    return (
        <View style={styles.totalView}>   
           <Text style={styles.totalCount}> {props.count}</Text>
           <Text  numberOfLines={2} style={styles.totalLabel}>{props.label}</Text>
        </View> 
        )
}; 

const styles = StyleSheet.create({
    
    totalView:{
        flexDirection: "column",
        alignItems:"center",
        margin:15,
    },

    totalCount:{
        fontSize: 70,
        marginRight:10,
        color: "white"
    }, 

    totalLabel:{
        fontSize:20,
        marginLeft:15,
        color: "white",
        flexWrap: 'wrap'

    },
}); 

export default DisplayCount; 
        
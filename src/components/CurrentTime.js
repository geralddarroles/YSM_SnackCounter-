import React from "react";
import {View, Text, StyleSheet} from "react-native"; 

function CurrentTime(props) {
return <Text style={styles.time}> {props.time} </Text>; }; 

const styles = StyleSheet.create({
    time:{
        color:"white", 
        fontSize:25
    }
}); 

export default CurrentTime;  
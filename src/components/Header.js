import React from "react";
import {View, Image, Text, StyleSheet} from "react-native"; 

function Header (props,{navigation}) {
    return (
        <View style={styles.header}>
            <Image
                source = {props.image} resizeMode={"contain"}style={styles.image}/>  


        </View> )}

const styles = StyleSheet.create({

    header:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:'center',
    },

    image:{
        height:80, 
        flex:10,
    },


}); 

export default Header;  
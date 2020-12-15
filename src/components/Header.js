import React from "react";
import {View, Image, Text, StyleSheet} from "react-native"; 
import {Feather} from '@expo/vector-icons';
function Header (props,{navigation}) {
    return (
        <View style={styles.header}>
            <Image
                source = {props.image} resizeMode={"contain"}style={styles.image}/>  

            <Feather 
                    name ="info" 
                    style={styles.information}
                    onPress={props.navigateToInfo}
                   
                />

        </View> )}

const styles = StyleSheet.create({

    header:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:'center',
    },

    image:{
        height:110, 
        flex:10,
        marginLeft:65
    },

    title:{
        fontSize:22,
        flex:4, 
        color: "white",
        fontWeight: "bold",
        flex:3
    }, 

    information:{
        color:"grey",
        fontSize:30,
        flex:2,
        marginRight:5
    }
}); 

export default Header;  
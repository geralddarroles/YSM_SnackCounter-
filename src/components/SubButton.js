import React from "react";
import {TouchableOpacity,StyleSheet, View, Text,} from "react-native"; 

const subButton = (props) => {
    return (
    <View style= {styles.ButtomButtons}>
        <TouchableOpacity style={styles.buttomButtonText} onPress={props.buttonPressed} >
            <Text style={styles.buttomButtonWhite}>{props.title}</Text>
        </TouchableOpacity >
    </View>
    )
}; 

const styles = StyleSheet.create({

    buttomButtonWhite:{
        color:"white",
        fontSize: 20,
    }, 
    
    ButtomButtons: { 
      margin:20
    },

}); 

export default subButton; 










    
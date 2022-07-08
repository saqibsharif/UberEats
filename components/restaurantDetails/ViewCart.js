import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function ViewCart(){
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", position: "absolute", bottom: 110, zIndex:999,}}>
        <View style={{flexDirection: "row", justifyContent: "center", width: "100%"}}>
        <TouchableOpacity style={{
            marginTop: 20,
            backgroundColor: 'black',
            alignItems: 'center',
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: "absolute",
        }}>
        <Text style={{color: "white", fontSize: 20}}>View Cart</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ViewCart:{
    },
    Text:{
        color: "white",
        fontSize: 20,
    }
});

{/* style={{flex:1, alignItems: "center", flexDirection: "row", position:"absolute", bottom:130, zIndex:999,}}
    style={{flexDirection: "row", justifyContent: "center", width: "100%"}}*/}
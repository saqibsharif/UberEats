import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {Ionicons, AntDesign} from "react-native-vector-icons";

export default function SearchBar(){
    return(
    <View style={styles.GooglePlacesAutocomplete}>
        <GooglePlacesAutocomplete
         placeholder="Search"
         styles={{
            textInput:{
                backgroundColor: "#eee",
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 7,
            },
            textInputContainer:{
                backgroundColor:"#eee",
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
            }
         }} 

            renderLeftButton={() => (
                <View style={styles.renderLeftButton}>
                    <Ionicons 
                    name="location-sharp" 
                    size={24}/>
                </View>
            )}

            renderRightButton={() => (
                <View style={styles.renderRightButton}>
                <AntDesign name="clockcircle" size={11} style={{marginRight:6}}/>
                <Text>Search</Text>
                </View>
            )}
         />
    </View>
    );
}

const styles = StyleSheet.create({
    GooglePlacesAutocomplete:{
        marginTop:15,
        flexDirection: "row",
    },
    renderLeftButton:{
        marginLeft:10
    },
    renderRightButton:{
        flexDirection: "row",
        marginRight: 8,
        backgroundColor: "white",
        padding: 9,
        borderRadius: 10,
        alignItems: "center",
    }
})
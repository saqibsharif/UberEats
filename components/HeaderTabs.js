import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTabs(){

    const [activeTab, setActiveTab] = useState("Delivery");

    return(
        <View style={styles.HeaderButton}>
            <HeaderButton
            text="Delivery"
            buttonColor="black"
            textColor="white"
            activeTab={activeTab}
            setActiveTab={setActiveTab}/>

            <HeaderButton
            text="Pick Up"
            buttonColor="white"
            textColor="black"
            activeTab={activeTab}
            setActiveTab={setActiveTab}/>
        </View>
    );

}

const HeaderButton = (props) => 
    <View>
        <TouchableOpacity 
        onPress={() => props.setActiveTab(props.text)}
        style={[styles.TouchableOpacity, {backgroundColor: props.activeTab === props.text ? "black" : "white"}]}>
            <Text style={[styles.HeaderText, {color: props.activeTab === props.text ? "white" : "black"}]}>{props.text}</Text>
        </TouchableOpacity>
    </View>;

    
const styles = StyleSheet.create({
    HeaderButton:{
        flexDirection: "row",
        alignSelf: "center",
    },

    HeaderText:{
        fontSize : 15,
        fontWeight: "900", 
    },
    
    TouchableOpacity:{
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
});
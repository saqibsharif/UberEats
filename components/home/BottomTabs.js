import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {FontAwesome5} from "react-native-vector-icons";

export default function BottomTabs(props){
    return(
        <View style={styles.BottomTabs}>
            <Icon icon="home" text="Home" activeBottomTab={props.activeBottomTab} setActiveBottomTab={props.setActiveBottomTab}/>
            <Icon icon="search" text="Browse" activeBottomTab={props.activeBottomTab} setActiveBottomTab={props.setActiveBottomTab}/>
            <Icon icon="shopping-bag" text="Grocery" activeBottomTab={props.activeBottomTab} setActiveBottomTab={props.setActiveBottomTab}/>
            <Icon icon="receipt" text="Orders" activeBottomTab={props.activeBottomTab} setActiveBottomTab={props.setActiveBottomTab}/>
            <Icon icon="user" text="Account" activeBottomTab={props.activeBottomTab} setActiveBottomTab={props.setActiveBottomTab}/>
        </View>
    );
}

const Icon = (props) => (
    <View>
    <TouchableOpacity onPress={() => props.setActiveBottomTab(props.text)}>
    <FontAwesome5
        name={props.icon}
        size={25}
        color= {props.color}
        style={[styles.Icon, {color: props.activeBottomTab === props.text ? "black" : "gray"}]}
    />
    <Text style={{color: props.activeBottomTab === props.text ? "black" : "gray"}}>{props.text}</Text>
    </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    BottomTabs:{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
    },
    Icon:{
        marginBottom: 3,
        alignSelf:"center",
    },
});
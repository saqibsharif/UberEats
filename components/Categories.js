 import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks"
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts"
    },

]
 
 export default function Categories(){
    return(
        <View style={styles.scrollView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
        <View key={index} style={styles.category}>
            <Image style={styles.image} source={item.image}/>
            <Text style={styles.text}>{item.text}</Text>
        </View>
        ))}
        </ScrollView>
        </View>
    );
 }

 const styles = StyleSheet.create({
    category:{
        alignItems: "center",
        marginRight: 30,
    },
    image:{
        width: 50,
        height: 40,
        resizeMode: "contain",
    },
    scrollView:{
        backgroundColor: "white",
        marginTop:5,
        paddingVertical: 10,
        paddingLeft: 20
    },
    text:{
        fontSize: 13,
        fontWeight: "900",
    }
 })
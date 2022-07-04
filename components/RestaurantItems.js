import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "react-native-vector-icons";

export const localRestaurants = [
    {
        name: "Beach Bar",
        imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Lahori Gate",
        imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
        categories: ["Desi", "Continental"],
        price: "$$",
        reviews: 656,
        rating: 3.7,
    },
    {
        name: "Chick fil A",
        imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
        categories: ["Fast Food", "Desi"],
        price: "$$$",
        reviews: 780,
        rating: 4.7,
    },
];

export default function RestaurantItems(props){
    return (
        <View style={{marginBottom:15}}>
    
        {props.restaurantData.map((restaurant, index) => (
        <View key={index} style={styles.RestaurantItem}>
        <RestaurantImage image={restaurant.image_url}/>
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
        </View>
        ))}
    </View>
    );
}

const RestaurantImage = (props) => (
    <>
    <TouchableOpacity activeOpacity={0.5}>
    <Image source={{uri:props.image}}
    style={styles.RestaurantImage}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.heartOutline}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white"/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={styles.RestaurantInfo}>
    <View>
    <Text style={styles.RestaurantInfoNameText}>{props.name}</Text>
    <Text style={styles.RestaurantInfoDeliveryTime}>30-45 Mins</Text>
    </View>
    <View style={styles.RestaurantInfoRating}>
    <Text>{props.rating}</Text>
    </View>
    </View>
);

const styles = StyleSheet.create({
    heartOutline:{
        position:"absolute",
        right:20,
        top:20,
    },
    RestaurantItem:{
        marginTop: 10,
        padding: 15,
        backgroundColor: "white",
    },
    RestaurantImage:{
        width: "100%",
        height: 180,
    },
    RestaurantInfo:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    RestaurantInfoNameText:{
        fontSize: 15,
        fontWeight: "bold",
    },
    RestaurantInfoDeliveryTime:{
        fontSize: 13,
        color: "gray",
    },
    RestaurantInfoRating:{
        backgroundColor:"#eee",
        height:30,
        width:30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    }

    
})
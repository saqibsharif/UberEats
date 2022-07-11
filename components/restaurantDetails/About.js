import React from "react";
import {View, Image, StyleSheet, Text} from "react-native";

export default function About(props){

    const {name, image, price, reviews, rating, categories} = props.route.params ;
    const formattedCategories = categories.map((cat) => cat.title).join(' • ');
    const description = `${formattedCategories} ${price ? ' • ' + price : ""} • ${rating}✮ • (${reviews}+)`;

   return(
   <View>
        <RestaurantImage image={image}/>
        <RestaurantName name={name}/>
        <RestaurantDescription description={description}/>
    </View>
    );
}

const RestaurantImage = (props) => (
    <Image style={styles.restaurantImage} source={{uri: props.image}}/>
);

const RestaurantName = (props) => (
    <Text style={styles.titleText}>{props.name}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={styles.descriptionText}>{props.description}</Text>
);

const styles = StyleSheet.create({
    restaurantImage:{
        width: "100%",
        height: 180 ,
    },
    titleText:{
        fontWeight:"600",
        fontSize: 29,
        marginTop: 10,
        marginHorizontal: 15,
    },
    descriptionText:{
        marginHorizontal:15,
        marginTop: 10,
        fontWeight: "500",
        fontSize: 15.5,
    },
})
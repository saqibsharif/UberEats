import React from "react";
import {View, Image, StyleSheet, Text} from "react-native";

const image = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai . Comfort Food . $$ . # . 4# . 2912+";
export default function About(){
   return(
   <View>
        <RestaurantImage image={image}/>
        <RestaurantTitle title={title}/>
        <RestaurantDescription description={description}/>
    </View>
    );
}

const RestaurantImage = (props) => (
    <Image style={styles.restaurantImage} source={{uri: props.image}}/>
);

const RestaurantTitle = (props) => (
    <Text style={styles.titleText}>{props.title}</Text>
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
import React from "react";
import {View, StyleSheet} from "react-native";
import About from "../components/restaurantDetails/About";
import {Divider} from "react-native-elements";
import MenuItems from "../components/restaurantDetails/MenuItems";

export default function RestaurantDetails({route}){
    return(
        <View>
        {/* Getting the restaurant details from route passed from RestaurantItem component in HomeScreen and passing it to About Component */}
        <About route={route}/>
        <Divider width={1.8} style={styles.Divider}/>
        <MenuItems/>
        </View>
    );
}

const styles = StyleSheet.create({
   Divider:{
    marginVertical: 20,
   } 
});
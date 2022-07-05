import React from "react";
import {View, StyleSheet} from "react-native";
import About from "../components/restaurantDetail/About";
import {Divider} from "react-native-elements";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function RestaurantDetail(){
    return(
        <View>
        <About/>
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
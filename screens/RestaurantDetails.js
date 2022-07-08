import React from "react";
import {View, StyleSheet} from "react-native";
import About from "../components/restaurantDetails/About";
import {Divider} from "react-native-elements";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

export default function RestaurantDetails({route, navigation}){
    return(
        <>
        <View>
        {/* Getting the restaurant details from route passed from RestaurantItem component in HomeScreen and passing it to About Component */}
        <About route={route}/>
        <Divider width={1.8} style={styles.Divider}/>
        <MenuItems/>
        </View>
        <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </>
    );
}

const styles = StyleSheet.create({
   Divider:{
    marginVertical: 20,
   },
});
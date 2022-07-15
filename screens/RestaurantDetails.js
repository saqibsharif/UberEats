import React from "react";
import {View, StyleSheet} from "react-native";
import About from "../components/restaurantDetails/About";
import {Divider} from "react-native-elements";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

const foods = [
    {
        title:"Lasagna",
        description:"With butter lettuce, tomato and sauce bechamel",
        price:"$13.50",
        image:"https://www.thespruceeats.com/thmb/-YUYSXc4T2H4P8o2JBApzJ3F5rw=/2069x2069/smart/filters:no_upscale()/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg",
    },
    {
        title:"Tandoori Chicken",
        description:"Amazing Indian dish with tenderloin chicken off the sizzling",
        price:"$19.20",
        image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken-600x600.jpg"
    },
    {
        title:"Biryani",
        description:"Basmati rice with tasty chicken cooked in subcontinental masala",
        price:"$8.9",
        image:"https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg",
    },
    {
        title:"Shawarma",
        description:"Authentic arabian shawarma with bbq chicken and khubus",
        price:"$5.8",
        image:"https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-square-FS-57.jpg",
    },
    {
        title:"Shawarma",
        description:"Authentic arabian shawarma with bbq chicken and khubus",
        price:"$5.8",
        image:"https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-square-FS-57.jpg",
    },
];

export default function RestaurantDetails({route, navigation}){
    return(
        <>
        <View>
        {/* Getting the restaurant details from route passed from RestaurantItem component in HomeScreen and passing it to About Component */}
        <About route={route}/>
        <Divider width={1.8} style={styles.Divider}/>
        <MenuItems restaurantName={route.params.name} foods={foods} />
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
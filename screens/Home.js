import React, {useEffect, useState} from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

export default function Home(){

    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const getRestaurantsFromYelp = async () => {
    const yelpURL = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=NYC'

    const apiOptions = {
        headers: {
            Authorization: 'Bearer ZwlAW8Ye54jk5MDTYrFbu40L-iyWcexD0foYwBz8FPYG5oIkV8EEo4KqdR_uqAzYtrsK8tUYXvEwf0O1bbZD6v4YKrcNpwEUxllMFA5lKAnVPHQeHWDh04XSCvXCYnYx',
        }};

    const res = await fetch(yelpURL, apiOptions);
        const json = await res.json();
        return setRestaurantData(json.businesses);
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [])

    return(
        <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
        <View style={{backgroundColor:"white", padding: 15}}>
        <HeaderTabs/>
        <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData={restaurantData}/>
        </ScrollView>
        </SafeAreaView>
    );

}
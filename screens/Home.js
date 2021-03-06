import React, {useEffect, useState} from "react";
import { View, ScrollView } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

export default function Home({navigation}){

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Pickup");
    const [activeBottomTab , setActiveBottomTab ] = useState("Home");

    const getRestaurantsFromYelp = () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
        headers: {
            Authorization: 'Bearer ZwlAW8Ye54jk5MDTYrFbu40L-iyWcexD0foYwBz8FPYG5oIkV8EEo4KqdR_uqAzYtrsK8tUYXvEwf0O1bbZD6v4YKrcNpwEUxllMFA5lKAnVPHQeHWDh04XSCvXCYnYx',
        }};

    return fetch(yelpURL, apiOptions)
    .then((res) => res.json())
    .then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab, activeBottomTab])

    return(
        <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
        <View style={{backgroundColor:"white", padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
        </ScrollView>
        <BottomTabs activeBottomTab={activeBottomTab} setActiveBottomTab={setActiveBottomTab}/>
        </SafeAreaView>
    );

}
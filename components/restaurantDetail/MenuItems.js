import React from "react";
import { Text, View, Image, StyleSheet, ScrollView} from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import { Divider } from "react-native-elements";

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
]

export default function MenuItems(){
    return(
        <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
        <View key={index} >
        <View style={styles.menuItem}>
            <FoodInfo food={food} />
            <ItemImage food={food}/>
        </View>
        <Divider width={0.5} orientation="vertical" style={{marginHorizontal:20}}/>
        </View>
        ))}
        </ScrollView>
        </SafeAreaView>
    );
}

const FoodInfo = (props) => (
    <View style={styles.itemInfo}>
        <Text style={styles.title}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const ItemImage = (props) => (
    <Image style={styles.itemImage} source={{uri: props.food.image}} />
);


const styles = StyleSheet.create({
    itemImage:{
        borderRadius: 8,
        width: 100,
        height: 100,
    },
    menuItem:{
        flexDirection:"row",
        justifyContent: 'space-between',
        margin: 20,
    },
    itemInfo:{
        width:240,
        justifyContent:'space-evenly',
    },
    title:{
        fontSize:19,
        fontWeight: "600",
    },
    scrollView:{
        backgroundColor: 'transparent',
        paddingLeft:20,
        paddingRight:20
    },
})
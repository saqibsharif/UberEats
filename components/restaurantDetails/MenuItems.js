import React from "react";
import { Text, View, Image, StyleSheet, ScrollView} from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";


export default function MenuItems({restaurantName, foods, hideCheckbox, marginLeft}){

    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => dispatch({
        type: "ADD_TO_CART",
        payload:{ ...item, restaurantName: restaurantName, checkboxValue: checkboxValue}
    });

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => (
        Boolean(cartItems.find((item) => item.title == food.title)));
    

    return(
        <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
        <View key={index} >
        <View style={styles.menuItem}>
            { hideCheckbox ? (<></>) : (<BouncyCheckbox
                iconStyle={{borderColor: "lightGray", borderRadius:0}}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
            />)}
            <FoodInfo food={food} />
            <ItemImage food={food} marginLeft={marginLeft ? marginLeft: 0}/>
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

const ItemImage = ({marginLeft, ...props}) => (
    <Image style={{borderRadius: 8, width: 90, height: 90, marginLeft:marginLeft}} source={{uri: props.food.image}} />
);


const styles = StyleSheet.create({
    itemImage:{
        borderRadius: 8,
        width: 90,
        height: 90,
    },
    menuItem:{
        flexDirection:"row",
        justifyContent: 'space-between',
        margin: 9,
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
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart(){

    const items = useSelector((state) => state.cartReducer.selectedItems.items);
    const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);
    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    console.log(totalUSD);

    return(
        <>
        {total ? (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", position: "absolute", bottom: 110, zIndex:999,}}>
        <View style={{flexDirection: "row", justifyContent: "center", width: "100%"}}>
        <TouchableOpacity style={{
            marginTop: 20,
            backgroundColor: 'black',
            alignItems: 'center',
            padding: 15,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            borderRadius: 30,
            width: 300,
            position: "absolute",
        }}>
        <Text style={{color: "white", fontSize: 20, marginRight: 30}}>View Cart</Text>
        <Text style={{color: "white", fontSize: 20,}}>{totalUSD}</Text>
        </TouchableOpacity>
        </View>
        </View>
        ): (<></>)}
        </>
    );
}

const styles = StyleSheet.create({
    ViewCart:{
    },
    Text:{
        color: "white",
        fontSize: 20,
    }
});

{/* style={{flex:1, alignItems: "center", flexDirection: "row", position:"absolute", bottom:130, zIndex:999,}}
    style={{flexDirection: "row", justifyContent: "center", width: "100%"}}*/}
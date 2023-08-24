import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { themeColors } from "../themes";
import { selectRestaurant } from "../slices/restaurantSlice";
import { selectCartItems, selectCartTotal, removeFromCart } from "../slices/cartSlice";

export default function CartScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState({});

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);
  
  return (
    <View className="flex-1 bg-white">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          className="w-8 p-1 rounded-full shadow z-100 top-14 left-2"
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft
            strokeWidth={3}
            stroke={"white"}
          />
        </TouchableOpacity>
      </View>
      <View className="mt-5">
        <Text className="text-xl font-bold text-center">Your Cart</Text>
        <Text className="text-center text-gray-500 ">{restaurant.name}</Text>
      </View>
      <View
        className="flex-row items-center px-4 mt-3"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text
            className="font-bold"
            style={{ color: themeColors.text }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="pt-5 bg-white"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center px-4 py-2 mx-2 mb-3 space-x-3 bg-white shadow-md rounded-3xl"
            >
              <Text
                className="font-bold"
                style={{ color: themeColors.text }}
              >
                {items.length} x
              </Text>
              <Image
                source={{uri: dish.image}}
                className="w-20 h-20 rounded-full"
              />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="text-base font-semibold">${Number(dish.price)}</Text>
              <TouchableOpacity className="rounded-full" onPress={() => dispatch(removeFromCart({id: dish.id}))} style={{backgroundColor: themeColors.bgColor(1) }}>
                <Icon.Minus
                  className="w-6 h-6"
                  stroke={"white"}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 space-y-4 rounded-t-3xl"
      >
        <View className="flex-row justify-between">
          <Text className="font-bold text-gray-700">Subtotal:</Text>
          <Text className="font-bold text-gray-700">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-bold text-gray-700">Delivery fee:</Text>
          <Text className="font-bold text-gray-700">${cartItems.length > 0 ? restaurant.deliveryFee: 0}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-bold text-gray-700">Order total:</Text>
          <Text className="font-bold text-gray-700">${cartItems.length > 0 ? cartTotal + restaurant.deliveryFee : 0}</Text>
        </View>
        <View>
          <TouchableOpacity
            className="flex-row items-center justify-center py-3 rounded-3xl"
            style={{ backgroundColor: themeColors.bgColor(1) }}
            onPress={() => navigation.navigate("OrderPreparing")}
          >
            <Text
              className="font-bold text-white"
              style={{ fontSize: 18 }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

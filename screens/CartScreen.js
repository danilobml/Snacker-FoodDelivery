import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

import { themeColors } from "../themes";
import { featured } from "../dummyData";

export default function CartScreen() {
  const navigation = useNavigation();
  const restaurant = featured.restaurants[0];
  console.log(restaurant);
  return (
    <View className="flex-1 bg-white">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          className="absolute p-1 rounded-full shadow top-14 left-2"
          style={{ zIndex: 10, backgroundColor: themeColors.bgColor(1) }}
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
        {restaurant.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center px-4 py-2 mx-2 mb-3 space-x-3 bg-white shadow-md rounded-3xl"
            >
              <Text
                className="font-bold"
                style={{ color: themeColors.text }}
              >
                2 x
              </Text>
              <Image
                source={dish.image}
                className="w-20 h-20 rounded-full"
              />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="text-base font-semibold">${dish.price}</Text>
              <TouchableOpacity onPress={() => {}}>
                <Icon.Trash2
                  className="w-6 h-6"
                  stroke={themeColors.text}
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
          <Text className="font-bold text-gray-700">$30</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-bold text-gray-700">Delivery fee:</Text>
          <Text className="font-bold text-gray-700">$2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-bold text-gray-700">Order total:</Text>
          <Text className="font-bold text-gray-700">$32</Text>
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

import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { themeColors } from "../themes";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { setRestaurant } from "../slices/restaurantSlice";

export default function RestaurantScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if(item && item.id) {
      dispatch(setRestaurant({...item}))      
    }
  }, [])

  return (
    <SafeAreaView>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-72"
            source={item.image}
          />
          <TouchableOpacity
            className="absolute rounded-full shadow top-14 left-4 bg-gray-50"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft
              strokeWidth={3}
              stroke={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="pt-6 -mt-12 bg-white"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row my-1 space-x-2 flex-nowrap">
              <View className="flex-row items-center space-x-1">
                {Array.from(Array(item.stars).keys()).map((i) => {
                  return (
                    <Image
                      source={require("../assets/images/fullStar.png")}
                      className="w-4 h-4"
                      key={i}
                    />
                  );
                })}
                <Text className="text-xs">
                  <Text className="text-gray-700">
                    ({item.reviews} reviews) . {""}
                  </Text>
                  <Text className="font-semibold">{item.category}</Text>
                </Text>
              </View>
            </View>
            <View>
              <View className="flex-row space-x-1 item-center">
                <Icon.MapPin
                  color="gray"
                  width="15"
                  height="15"
                ></Icon.MapPin>
                <Text className="text-xs text-gray-700">
                  Nearby . {item.address}
                </Text>
              </View>
              <Text className="mt-2 text-gray-700">{item.description}</Text>
            </View>
          </View>
          <View className="bg-white pb-36">
            <Text className="px-4 py-4 text-2xl font-bold">Menu:</Text>
            {item.dishes.map((dish, index) => {
              return (
                <View key={index}>
                  <DishRow
                    item={{ ...dish }}
                    key={index}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

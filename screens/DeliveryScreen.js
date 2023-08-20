import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Icon from "react-native-feather";

import { featured } from "../dummyData";
import { themeColors } from "../themes";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = featured.restaurants[0];
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.address}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="relative -mt-12 bg-white rounded-t-3xl">
        <View className="flex-row justify-between px-5 pt-8">
          <View>
            <Text className="text-lg font-semibold text-gray-700">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-semibold text-gray-700">
              20-30 minutes
            </Text>
            <Text className="mt-2 mb-2 font-semibold text-gray-700">
              Your order is on its way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>
        <View
          className="flex-row items-center justify-between p-2 mx-2 my-5 rounded-full"
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              className="w-16 h-16 rounded-full"
              source={require("../assets/images/deliveryGuy.png")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-semibold text-white">
              Max Musterdriver
            </Text>
            <Text className="text-sm text-white">Your rider</Text>
          </View>
          <View className="flex-row items-center mr-3 space-x-3">
            <TouchableOpacity className="p-2 bg-white rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-2 bg-white rounded-full"
              onPress={() => navigation.navigate("Home")}
            >
              <Icon.X
                stroke={"red"}
                strokeWidth={5}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

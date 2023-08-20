import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        className="mr-6 bg-white shadow-lg rounded-3xl"
        style={{
          shadowColor: themeColors.bgColor(2),
          shadowRadius: 7,
        }}
      >
        <Image
          className="w-64 h-36 rounded-t-3xl"
          source={item.image}
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="pt-2 text-lg font-bold">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="w-4 h-4"
            />
            <Text className="text-green-700">{item.stars}</Text>
            <Text className="text-gray-700">
              ({item.reviews} reviews) .{" "}
              <Text className="font-semibold">{item.category}</Text>
            </Text>
          </View>
          <View>
            <View className="flex-row space-x-1 item-center">
              <Icon.MapPin
                color="gray"
                width={15}
                height={15}
              ></Icon.MapPin>
              <Text className="text-xs text-gray-700">
                Nearby. {item.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

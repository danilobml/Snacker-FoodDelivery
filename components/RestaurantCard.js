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
        className="mr-6 bg-white rounded-3xl shadow-lg"
        style={{
          shadowColor: themeColors.bgColor(2),
          shadowRadius: 7,
        }}
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={item.image}
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4"
            />
            <Text className="text-green-700">{item.stars}</Text>
            <Text className="text-gray-700">
              ({item.reviews} reviews) .{" "}
              <Text className="font-semibold">{item.category}</Text>
            </Text>
          </View>
          <View>
            <View className="flex-row item-center space-x-1">
              <Icon.MapPin
                color="gray"
                width={15}
                height={15}
              ></Icon.MapPin>
              <Text className="text-gray-700 text-xs">
                Nearby. {item.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

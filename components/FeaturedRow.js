import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { themeColors } from "../themes";
import RestaurantCard from "./RestaurantCard";
import { useSelector } from "react-redux";

import { selectCategory } from "../slices/categorySlice";

export default function FeaturedRow({ title, description, restaurants }) {
  
  const selectedCategory = useSelector(selectCategory);
  
  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{ color: themeColors.text }}
            className="font-semibold"
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="py-5 overflow-visible"
      >
        {restaurants.filter(restaurant => selectedCategory ? selectedCategory === restaurant.categoryId : restaurant).map((restaurant, index) => {
          return (
            <RestaurantCard
              item={restaurant}
              key={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

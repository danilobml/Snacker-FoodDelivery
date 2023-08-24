import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { useState } from "react";

import { useFetchData } from "../hooks/useFetchData";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const { categories } = useFetchData();
  
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.length > 0 && categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <View
              key={index}
              className="flex items-center justify-center mr-6"
            >
              <TouchableOpacity
                className={`p-1 rounded-full shadow bg-gray-200 ${btnClass}`}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image
                  style={{ width: 45, height: 45, borderRadius: 45 }}
                  source={{ uri: category.image }}
                />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

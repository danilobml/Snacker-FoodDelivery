import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { setCategory } from "../slices/categorySlice";

import { useFetchData } from "../hooks/useFetchData";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const dispatch = useDispatch();

  const { categories } = useFetchData();

  function handleClickCategory(categoryId) {
    setActiveCategory(categoryId);
    dispatch(setCategory(categoryId));
  }

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
        <View
          key={"all"}
          className="flex items-center justify-center mr-6"
        >
          <TouchableOpacity
            className={`p-1 rounded-full shadow bg-gray-200`}
            onPress={() => handleClickCategory(null)}
          >
            <Image
              style={{ width: 45, height: 45, borderRadius: 45 }}
              source={{ uri: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}}
            />
          </TouchableOpacity>
          <Text className="text-sm text-gray-500">All</Text>
        </View>
        {categories.length > 0 &&
          categories.map((category, index) => {
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
                  onPress={() => handleClickCategory(category.id)}
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

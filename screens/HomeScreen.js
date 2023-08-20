import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";

import { themeColors } from "../themes";
import Categories from "../components/Categories";
import { featured } from "../dummyData";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
  return (
    <SafeAreaView className="mt-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center px-4 pb-2 space-x-2">
        <View className="flex-row items-center flex-1 p-3 border border-gray-300 rounded-full">
          <Icon.Search
            height={25}
            width={25}
            stroke={"gray"}
          />
          <TextInput
            className="flex-1 ml-2 text-gray-500"
            placeholder="Find your Snack"
          />
          <View className="flex-row items-center pl-2 space-x-1 border-0 border-l-2 border-l-gray-300">
            <Icon.MapPin
              height={20}
              width={20}
              stroke={"gray"}
            />
            <Text className="text-gray-500">Berlin</Text>
          </View>
        </View>
        <View
          className="p-3 rounded-full"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

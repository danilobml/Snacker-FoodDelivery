import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";

import { themeColors } from "../themes";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

import { useFetchData } from "../hooks/useFetchData";
import { useLocation } from "../hooks/useLocation";

export default function HomeScreen() {
  const { restaurants, featured } = useFetchData();
  const { location } = useLocation();
  const city = location ? location.city : "Search";
  const lat = location ? location.lat : null;

  return (
    <SafeAreaView className="mt-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center px-4 pb-2 space-x-2">
        <View className="rounded-full shadow-md">
          <Image source={require('../assets/images/logo.png')} style={{ width: 45, height: 45, borderRadius: '45%'}}/>
        </View>      
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
            <Text className="text-gray-500">{city}</Text>
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
          {(restaurants.length > 0 && featured.length > 0) &&
            featured.map((item, index) => {
              const restaurantsInRow = restaurants.filter(restaurant =>
                item.restaurants.includes(restaurant.id));
              return (
                <FeaturedRow
                  key={`featured-row-${index}`}
                  title={item.title}
                  restaurants={restaurantsInRow}
                  description={item.description}
                />
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

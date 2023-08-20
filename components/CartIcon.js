import { View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  
  if(cartItems.length === 0) return;
  
  return (
    <View className="absolute z-50 w-full bottom-5">
      <TouchableOpacity
        className="flex-row items-center justify-between p-4 py-3 mx-5 rounded-full shadow-lg"
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={() => navigation.navigate("Cart")}
      >
        <View className="p-2 px-4 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
            <Text className="text-lg font-extrabold text-white">{cartItems.length}</Text>
        </View>
       <Text className="flex-1 text-lg font-extrabold text-center text-white">View Cart</Text>
       <Text className="text-lg font-extrabold text-white">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}

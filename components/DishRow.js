import { View, Text, Image, TouchableOpacity } from 'react-native'
import { themeColors } from '../themes'
import * as Icon from 'react-native-feather'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice'

export default function DishRow({ item }) {
    const dispatch = useDispatch()

    const totalItems = useSelector(state => selectCartItemsById(state, item.id))
    
    const handleIncrease = (item) => {
        dispatch(addToCart({...item}))
    }
    
    const handleDecrease = (item) => {
        dispatch(removeFromCart({id: item.id}))
    }
    
  return (
    <View className="flex-row items-center p-3 mx-2 mb-3 bg-white shadow-2xl rounded-3xl" >
        <Image className="rounded-3xl" style={{ height: 100, width: 100}} source={{uri: item.image}} />
        <View className="flex flex-1 space-y-3">
            <View className="pl-3">
                <Text className="text-xl">{item.name}</Text>
                <Text className="text-gray-700">{item.description}</Text>
            </View>
            <View className="flex-row items-center justify-between pl-3">
                <Text className="text-lg font-bold text-gray-700">${Number(item.price)}</Text>
                <View className="flex-row items-center">
                    <TouchableOpacity 
                        className="p-1 rounded-full" 
                        style={{ backgroundColor: themeColors.bgColor(1)}}
                        onPress={() => handleDecrease(item)}
                        disabled={totalItems.length === 0}
                    >
                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                    </TouchableOpacity>
                    <Text className="mx-2 text-lg font-bold text-gray-700">{totalItems.length}</Text>
                    <TouchableOpacity 
                        className="p-1 rounded-full" 
                        style={{ backgroundColor: themeColors.bgColor(1)}}
                        onPress={() => handleIncrease(item)}
                    >
                        <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}
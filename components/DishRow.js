import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../themes'
import * as Icon from 'react-native-feather'

export default function DishRow({ item }) {
  return (
    <View className="flex-row items-center p-3 mx-2 mb-3 bg-white shadow-2xl rounded-3xl" >
        <Image className="rounded-3xl" style={{ height: 100, width: 100}} source={item.image} />
        <View className="flex flex-1 space-y-3">
            <View className="pl-3">
                <Text className="text-xl">{item.name}</Text>
                <Text className="text-gray-700">{item.description}</Text>
            </View>
            <View className="flex-row items-center justify-between pl-3">
                <Text className="text-lg font-bold text-gray-700">${item.price}</Text>
                <View className="flex-row items-center">
                    <TouchableOpacity className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1)}}>
                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                    </TouchableOpacity>
                    <Text className="mx-2 text-lg font-bold text-gray-700">1</Text>
                    <TouchableOpacity className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1)}}>
                        <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="w-full">
            <View className="flex-row items-center justify-between px-4 pt-8 w-full">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={32} color={"#555"} />
                </TouchableOpacity>
                <Text className="text-xl items-center justify-center font-semibold text-[#555]">Payment Method</Text>
                <View className="w-8"></View>
            </View>
            <View className="flex-row">
                <Text className="text-xl left-6 top-4 font-semibold text-[#555]">Shipping to</Text>
            </View>
        </SafeAreaView>
    )
}

export default CheckoutScreen
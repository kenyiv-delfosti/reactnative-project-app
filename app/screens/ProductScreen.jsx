import { View, Text, ActivityIndicator, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

const ProductScreen = ({ route }) => {
    const { _id } = route.params;

    const feeds = useSelector((state) => state.feeds);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const screenHeight = Math.round(Dimensions.get("window").height);

    useEffect(() => {
        setIsLoading(true)
        if (feeds) {
            setData(feeds?.feeds.filter(item => item._id == _id)[0]);
            setInterval(() => {
                setIsLoading(false);
            }, 2000)
        }
    }, [])

    return (
        <View className="flex-1 items-start justify-start bg-[#EBEAEF] space-y-4">
            {isLoading ? (
                <View className="w-full flex-1 h-full items-center justify-center">
                    <ActivityIndicator size={"large"} color={"teal"} />
                </View>
            ) : (
                <>
                    <SafeAreaView className="w-full">
                        <View className="flex-row items-center justify-between px-4 pt-8 w-full">
                            <TouchableOpacity>
                                <Entypo name='chevron-left' size={32} color={"#555"} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialIcons name='shopping-cart' size={32} color={"#555"} />
                            </TouchableOpacity>
                        </View>
                        <View className="w-full items-center justify-center relative" style={{ height: screenHeight / 2 }}>
                            <Image source={{ uri: data?.bgImage?.asset?.url }} resizeMode="cover" className="w-full h-full opacity-30" />
                            <View className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
                                <Image source={{ uri: data?.mainImage?.asset?.url }} resizeMode="contain" className="w-80 h-80" />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-evenly mb-4">
                            {data?.categories &&
                                data?.categories?.length > 0 &&
                                data?.categories.map((value) => (
                                    <View key={value._id} className="p-2 w-24 rounded-xl bg-white items-center justify-center space-y-2">
                                        <Image source={{ uri: value?.mainImage?.asset?.url }} resizeMode='contain' className="w-10 h-10 opacity-70" />
                                        <Text className="font-semibold text-[#555]">{value.title}</Text>
                                    </View>
                                ))}
                        </View>
                    </SafeAreaView>
                    <View className="w-full flex-1 h-full bg-white rounded-t-[36px] py-6 px-12 space-y-4">
                        <View className="w-full items-center justify-between flex-row">
                            <View className="flex items-start justify-center">
                                <Text className="text-xl font-semibold text-[#555]">
                                    {data?.title}
                                </Text>
                                <Text className="text-sm font-semibold text-[#777]">
                                    {data?.shortDescription}
                                </Text>
                            </View>
                            <TouchableOpacity className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
                                <AntDesign name="heart" size={16} color="#fbfbfb" />
                            </TouchableOpacity>
                        </View>

                        {/* bottom section */}

                    </View>
                </>
            )}
        </View>
    )
}

export default ProductScreen
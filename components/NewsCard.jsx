import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {icons} from "../constants";
import {router, usePathname} from "expo-router";

const NewsCard = ({ item, isFirst,containerStyles,imageStyles }) => {
const handlePress = () => {
    router.push('/news-detail')
}
return (
    <View className={`${containerStyles} flex-row items-center mx-4 bg-cardBg rounded-2xl mb-2.5`}>
        {isFirst ? (
            <>
                <View className="w-24 h-full justify-center items-center bg-cardBg-100 rounded-2xl mr-4">
                    <Text className="text-2xl text-button">{item.date}</Text>
                </View>
                <View className="flex-1 pr-2">
                    <TouchableOpacity onPress={handlePress}>
                        <Text
                            className="text-base font-bold"
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Image source={item.image} className={`${imageStyles} h-full rounded-2xl`}/>
            </>
        ) : (
            <>
                <View className="flex-1 justify-center pl-4">
                    <Text className="text-base text-text-200">{item.date}</Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text className="text-base font-bold" numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
                    </TouchableOpacity>
                    <View className="flex-row items-center mt-2">
                        {item.section && (
                            <Text className="text-base text-text-200">栏目：{item.section}</Text>
                        )}
                        {item.likesNumber && (
                            <View className="flex-row items-center ml-12">
                                <Image
                                    source={icons.likes}
                                    className="w-4 h-4 mr-0.5"
                                    resizeMode='contain'
                                />
                                <Text className="text-base text-text-200">{item.likesNumber}</Text>
                            </View>
                        )}
                    </View>
                </View>
                <Image source={item.image} className={`${imageStyles} h-full rounded-2xl`}/>
            </>
        )}
    </View>
)
};

export default NewsCard;

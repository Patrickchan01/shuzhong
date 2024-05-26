import React from 'react';
import { View, Text, Image } from 'react-native';

const NewsCard = ({ item, isFirst }) => (
    <View className="h-20 flex-row items-center mx-4 bg-cardBg rounded-2xl mb-2.5">
        <View className={`w-20 h-full justify-center items-center ${isFirst ? 'bg-cardBg-100' : 'bg-amber-50'} rounded-2xl mr-4`}>
            <Text className={`text-${isFirst ? '2xl' : 'lg'} text-button`}>{item.date}</Text>
        </View>
        <View className="flex-1 pr-2">
            <Text
                className="text-base"
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {item.title}
            </Text>
        </View>
        <Image source={item.image} className="w-20 h-full rounded-2xl" />
    </View>
);

export default NewsCard;

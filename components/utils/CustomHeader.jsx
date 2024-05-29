import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {router} from "expo-router";

const CustomHeader = ({containerStyles,title}) => (
    <View className={`flex-row items-center px-3 mb-2 w-full ${containerStyles}`}>
        <TouchableOpacity onPress={() => router.back()}>
                <Text className="text-lg text-button">◀返回</Text>
        </TouchableOpacity>
        <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-button pr-12">{title}</Text>
        </View>
    </View>
    )
;

export default CustomHeader;

import React from 'react';
import { View, Text, Image } from 'react-native';
import {images} from "../../constants";

const ContactContent = () => (
    <View className="p-4 bg-cardBg rounded-2xl mx-5 mt-4">
        <Text className="text-lg font-semibold">联系我们</Text>
        <View className="mt-2">
            <Text className="text-base text-gray-700">
                01. 内府
            </Text>
            <Text className="text-sm text-gray-600">
                负责法务内务...
            </Text>
            <View className='items-center justify-center'>
                <Image
                    source={images.authBg}
                    className='w-24 h-24 mt-2'
                    resizeMode='cover'
                />
            </View>

        </View>
    </View>
);

export default ContactContent;

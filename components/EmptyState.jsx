import {View, Text, Image} from 'react-native'
import React from 'react'
import {images} from "../constants";

const EmptyState = ({title, otherStyles}) => {
    return (
        <View className={`justify-center items-center h-48 border-b-2 border-gray-200 ${otherStyles}`}>
            <Image
                source={images.empty}
                className='w-24 h-24'
                resizeMode='contain'
            />
            <Text className='text-2xl font-bold text-text-100'>{title}</Text>
        </View>
    )
}

export default EmptyState

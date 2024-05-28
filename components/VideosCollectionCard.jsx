import React from 'react';
import { View, Text, Image } from 'react-native';
import {icons, images} from "../constants";

const Videos = ({ item }) => (
    <View className="h-36 bg-cardBg border-b-2 border-gray-200">
            <View className='flex-row items-center ml-auto mr-5 mt-2'>
                <Image
                    source={icons.eye}
                    className='w-5 h-5 mr-0.5'
                    resizeMode='contain'
                />
                <Text className='text-gray-200'>{item.watchNumber}</Text>
            </View>
        <View className='h-24 mx-4 flex-row relative'>
            <Image
                source={item.photo}
                className='w-40 h-full rounded-2xl'
                resizeMode='cover'
            />
            <View className='absolute bg-cardBg-200 h-8 rounded-tl-xl rounded-b-md rounded-tr-md items-center justify-center'>
                <Text className="text-white font-bold px-1.5">{item.author}</Text>
            </View>
            <View className='flex-col ml-5'>
                <View className='max-w-[75%]'>
                    <Text className='text-text-100 font-bold text-lg mb-3' ellipsizeMode="tail" numberOfLines={1}>{item.title}</Text>
                </View>
                <Text>
                    全{item.totalNumber}讲 主讲：{item.author}{"\n"}
                    栏目：{item.section}{"\n"}
                    最近更新：{item.updateTime}
                </Text>

            </View>

        </View>
    </View>
);

export default Videos;

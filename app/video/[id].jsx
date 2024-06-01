import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {homeIcons, images} from '../../constants';
import {SafeAreaView} from "react-native-safe-area-context";
import CustomHeader from "../../components/utils/CustomHeader";

const VideoPlay = () => {
    const dynamicData = [
        {
            id: '1',
            updateTime: '2024-05-29 03:45',
            title: '《入香光室》浅析',
            photo: images.authBg,
            author: '昌臻法师',
            totalNumber: 100,
            watchNumber: 100,
            section: '讲经',
        },
        {
            id: '2',
            updateTime: '2024-05-29 04:30',
            title: '《禅宗入门》导读',
            photo: images.authBg,
            author: '智岩法师',
            totalNumber: 80,
            watchNumber: 80,
            section: '开示',
        },
        {
            id: '3',
            updateTime: '2024-05-29 05:15',
            title: '《佛学通识》系列讲座',
            photo: images.authBg,
            author: '净瑛法师',
            totalNumber: 120,
            watchNumber: 120,
            section: '讲经',
        },
    ];
    // const router = useRouter();
    const { id } = useLocalSearchParams();

    const newsItem = dynamicData.find(item => item.id === id);

    if (!newsItem) {
        return <Text>News not found</Text>;
    }

    return (
        <ImageBackground source={homeIcons.bg} className='h-full'>
            <SafeAreaView edges={['top']}>
                <CustomHeader title='详情' containerStyles='pt-2'/>
                <ScrollView>
                    <View className='w-full h-24 bg-cardBg px-4 border-t-2 border-cardBg-300'>
                        <Text>{newsItem.title}</Text>
                    </View>
                    <View className='bg-cardBg mt-3 mb-32 px-4 pb-10'>
                        <Text>test dfd</Text>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </ImageBackground>
    );
};

export default VideoPlay;

import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {homeIcons, images} from '../../constants';
import {SafeAreaView} from "react-native-safe-area-context";
import CustomHeader from "../../components/utils/CustomHeader";

const NewsDetail = () => {
    const dynamicData = [
        {
            id: '1',
            date: '07/27',
            title: '六月初十 | 菩萨之心, 狱如太虚, 无不包括',
            image: images.bg,
        },
        {
            id: '2',
            date: '07/26',
            title: '五月十八 | 一切利, 哀, 赏, 称, 讯, 苦, 乐, 各有前因',
            image: images.bg,
        },
        {
            id: '3',
            date: '07/26',
            title: '五月十八 | 一切利, 哀, 赏, 称, 讯, 苦, 乐, 各有前因',
            image: images.bg,
        },
        {
            id: '4',
            date: '07/26',
            title: '五月十八 | 一切利, 哀, 赏, 称, 讯, 苦, 乐, 各有前因',
            image: images.bg,
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

export default NewsDetail;

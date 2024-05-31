import React from 'react';
import {View, Text, FlatList, ImageBackground, ScrollView} from "react-native";
import {homeIcons} from "../../constants";
import {SafeAreaView} from "react-native-safe-area-context";
import NewsCard from "../../components/NewsCard";
import CustomHeader from "../../components/utils/CustomHeader";

const NewsDetail = () => {
    return (
        <ImageBackground source={homeIcons.bg} className='h-full'>
            <SafeAreaView edges={['top']}>
                <CustomHeader title='详情' containerStyles='pt-2'/>
                <ScrollView>
                <View className='w-full h-24 bg-cardBg px-4 border-t-2 border-cardBg-300'>
                    <Text>标题、栏目、时间、阅读量</Text>
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

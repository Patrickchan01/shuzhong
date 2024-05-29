import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, FlatList, Alert, Image} from 'react-native';
import { icons, images } from '../../constants';
import IconButton from "../../components/IconButton";
import { router } from "expo-router";
import NewsCard from "../../components/NewsCard";
import homeIcons from "../../constants/homeIcons";
import {SafeAreaView} from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import VideosCollectionCard from "../../components/VideosCollectionCard";
import EmptyState from "../../components/EmptyState";

const BaoGuoCourse = () => {
    const [section,setSection] = useState('讲经');
    const [showSearchResults, setShowSearchResults] = useState(false)

    const data = [
        {
            id: '1',
            updateTime: '2024-05-29 03:45:59',
            title: '《入香光室》浅析',
            photo: images.authBg,
            author: '昌臻法师',
            totalNumber: 100,
            watchNumber: 100,
            section: '讲经',
        },
        {
            id: '2',
            updateTime: '2024-05-29 04:30:15',
            title: '《禅宗入门》导读',
            photo: images.authBg,
            author: '智岩法师',
            totalNumber: 80,
            watchNumber: 80,
            section: '开示',
        },
        {
            id: '3',
            updateTime: '2024-05-29 05:15:42',
            title: '《佛学通识》系列讲座',
            photo: images.authBg,
            author: '净瑛法师',
            totalNumber: 120,
            watchNumber: 120,
            section: '讲经',
        },
    ];

    const searchResultData = [
        // {
        //     id: '1',
        //     updateTime: '2024-05-29 03:45:59',
        //     title: '《入香光室》浅析',
        //     photo: images.authBg,
        //     author: '昌臻法师',
        //     totalNumber: 100,
        //     watchNumber: 100,
        //     section: '讲经',
        // },
        // {
        //     id: '2',
        //     updateTime: '2024-05-29 04:30:15',
        //     title: '《禅宗入门》导读',
        //     photo: images.authBg,
        //     author: '智岩法师',
        //     totalNumber: 80,
        //     watchNumber: 80,
        //     section: '开示',
        // },
        // {
        //     id: '3',
        //     updateTime: '2024-05-29 05:15:42',
        //     title: '《佛学通识》系列讲座',
        //     photo: images.authBg,
        //     author: '净瑛法师',
        //     totalNumber: 120,
        //     watchNumber: 120,
        //     section: '讲经',
        // },
    ];

    const renderHeader = () => (
        (showSearchResults === false ? (
            <>
                <SearchInput
                    onFocus={()=> setShowSearchResults(true)}
                />
                <View className='w-full h-11 flex-row justify-center mt-5'>
                    <TouchableOpacity onPress={() => setSection('讲经')} className='flex-1 justify-center items-center'>
                        <Text className={`text-lg font-semibold ${section === '讲经' ? 'text-button' : 'text-gray-500'}`}>讲经</Text>
                        <View className={`h-2 w-full mt-1 ${section === '讲经' ? 'bg-button' : 'bg-gray-200'}`} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSection('开示')} className='flex-1 justify-center items-center'>
                        <Text className={`text-lg font-semibold ${section === '开示' ? 'text-button0' : 'text-gray-500'}`}>开示</Text>
                        <View className={`h-2 w-full mt-1 ${section === '开示' ? 'bg-button' : 'bg-gray-200'}`} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSection('纪录片')} className='flex-1 justify-center items-center'>
                        <Text className={`text-lg font-semibold ${section === '纪录片' ? 'text-button' : 'text-gray-500'}`}>纪录片</Text>
                        <View className={`h-2 w-full mt-1 ${section === '纪录片' ? 'bg-button' : 'bg-gray-200'}`} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSection('微视频')} className='flex-1 justify-center items-center'>
                        <Text className={`text-lg font-semibold ${section === '微视频' ? 'text-button' : 'text-gray-500'}`}>微视频</Text>
                        <View className={`h-2 w-full mt-1 ${section === '微视频' ? 'bg-button' : 'bg-gray-200'}`} />
                    </TouchableOpacity>
                </View>
                <View className='mt-4 h-10 px-6 bg-cardBg justify-between items-center flex-row border-b-2 border-gray-200'>
                    <Text className='text-gray-200'>视频专辑（共{data.length}张）</Text>
                    <View className='flex-row items-center'>
                        <Image
                            source={icons.eye}
                            className='w-5 h-5 mr-0.5'
                            resizeMode='contain'
                        />
                        <Text className='text-gray-200'>观看最多</Text>
                    </View>
                </View>
            </>
        ) :(
            <>
                <View className='flex-row justify-center items-center'>
                    <TouchableOpacity onPress={() => setShowSearchResults(false)}>
                        <Text className='text-button ml-5 font-bold'>◀返回</Text>
                    </TouchableOpacity>
                    <SearchInput
                       otherStyles='flex-1'
                    />
                </View>
                <View className='mt-4 h-10 px-6 bg-cardBg justify-between items-center flex-row border-b-2 border-gray-200'>
                    <Text className='text-gray-200'>搜索结果（{searchResultData.length}）</Text>
                </View>
            </>
        ))


    );

    return (
        <ImageBackground source={homeIcons.bg} className='h-full'>
            <SafeAreaView edges={['top']}>
                <FlatList
                    data={showSearchResults ? searchResultData : data}
                    // data={[]}
                    ListHeaderComponent={renderHeader}
                    renderItem={({ item, index }) => (
                        <VideosCollectionCard item={item} />
                    )}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => (
                        <EmptyState
                            title='No videos found for this search query'
                            subtitle='Be the first one to upload the video'
                        />)}
                />
            </SafeAreaView>
        </ImageBackground>
    );
}

export default BaoGuoCourse;

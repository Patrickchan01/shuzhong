import {View, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity, Text} from "react-native";
import homeIcons from "../../constants/homeIcons";
import TabButton from "../../components/utils/TabButton";
import {images} from "../../constants";
import React, {useState} from "react";
import OverviewContent from "../../components/home/OverViewContent";
import ContactContent from "../../components/home/ContactUs";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomHeader from "../../components/utils/CustomHeader";
import RouteToTemple from "../../components/home/RouteToTemple";
import SearchInput from "../../components/SearchInput";
import NewsCard from "../../components/NewsCard";
import EmptyState from "../../components/EmptyState";


const TempleNews = () => {
    const [section, setSection] = useState('全部')
    const  renderHeader = () => (
        <>
            <CustomHeader
                title='寺院动态'
            />
            <SearchInput
                otherStyles='mb-4'
            />
            <View className='w-full h-11 flex-row justify-center'>
                <TouchableOpacity onPress={() => setSection('全部')} className='flex-1 justify-center items-center'>
                    <Text className={`text-xs font-semibold ${section === '全部' ? 'text-button' : 'text-gray-500'}`}>全部</Text>
                    <View className={`h-2 w-full mt-1 ${section === '全部' ? 'bg-button' : 'bg-gray-200'}`} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSection('报国历')} className='flex-1 justify-center items-center'>
                    <Text className={`text-xs font-semibold ${section === '报国历' ? 'text-button0' : 'text-gray-500'}`}>报国历</Text>
                    <View className={`h-2 w-full mt-1 ${section === '报国历' ? 'bg-button' : 'bg-gray-200'}`} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSection('心地与命运')} className='flex-1 justify-center items-center'>
                    <Text className={`text-xs font-semibold ${section === '心地与命运' ? 'text-button' : 'text-gray-500'}`}>心地与命运</Text>
                    <View className={`h-2 w-full mt-1 ${section === '心地与命运' ? 'bg-button' : 'bg-gray-200'}`} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSection('贤愚经白话解')} className='flex-1 justify-center items-center'>
                    <Text className={`text-xs font-semibold ${section === '贤愚经白话解' ? 'text-button' : 'text-gray-500'}`}>贤愚经白话解</Text>
                    <View className={`h-2 w-full mt-1 ${section === '贤愚经白话解' ? 'bg-button' : 'bg-gray-200'}`} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSection('寺院生活')} className='flex-1 justify-center items-center'>
                    <Text className={`text-xs font-semibold ${section === '寺院生活' ? 'text-button' : 'text-gray-500'}`}>寺院生活</Text>
                    <View className={`h-2 w-full mt-1 ${section === '寺院生活' ? 'bg-button' : 'bg-gray-200'}`} />
                </TouchableOpacity>
            </View>
        </>
    )

    const data= [ {
        id: '1',
        date: '07/27',
        title: '六月初十 | 菩萨之心, 狱如太虚, 无不包括',
        image: images.authBg,
        section: '讲经',
        likesNumber: 120,
    },]

    return(
    <ImageBackground source={homeIcons.bg} className='h-full'>
        <SafeAreaView edges={['top']}>
            <FlatList
                data={data}
                ListHeaderComponent={renderHeader}
                renderItem={({ item }) => (
                    <NewsCard item={item} containerStyles='h-28' imageStyles='w-28'/>
                )}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => (
                    data.length== 0 &&<EmptyState
                        title='很遗憾，没有查询到相关内容！'
                    />)}
            />
        </SafeAreaView>
    </ImageBackground>
    )
}

export  default TempleNews;

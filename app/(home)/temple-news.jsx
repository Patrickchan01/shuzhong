import {View, Image, ImageBackground, ScrollView, FlatList} from "react-native";
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
    const  renderHeader = () => (
        <>
            <CustomHeader
                title='寺院动态'
            />
            <SearchInput
                otherStyles='mb-4'
            />
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

import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, FlatList, Alert,Image} from 'react-native';
import {homeIcons, icons, images} from '../../constants';
import IconButton from "../../components/IconButton";
import { router } from "expo-router";
import NewsCard from "../../components/NewsCard";
import {SafeAreaView} from "react-native-safe-area-context";
import Swiper from 'react-native-swiper';

const Home = () => {
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

  const renderHeader = () => (
      <>
        <View className='h-44 justify-center items-center m-1'>
            <View className="absolute top-0 left-0 z-10 flex-row justify-between items-center w-full p-2">
                    <Image source={homeIcons.logo} resizeMode='contain' className='w-40 h-12'/>
                <TouchableOpacity onPress={() => router.push('/notification')}>
                    <Image source={homeIcons.notification} resizeMode='contain' className='h-5 w-5'/>
                </TouchableOpacity>
            </View>
            <Swiper
                autoplay={true}
                autoplayTimeout={3}
                dot={<View className='bg-cardBg w-2 h-2 rounded-full m-1' />}
                activeDot={<View className='bg-button w-2 h-2 rounded-full m-1'/>}
            >
                {dynamicData.map(item => (
                    <ImageBackground
                        className="w-full h-60 flex justify-center items-center"
                        source={item.image}
                        resizeMode="cover"
                    >
                    </ImageBackground>
                ))}
            </Swiper>
        </View>
        <View className="flex-wrap flex-row justify-around my-2 mx-2">
          <IconButton icon={homeIcons.overview}
                      label="寺院概况"
                      onPress={() => router.push('/temple-overview')}
          />
          <IconButton icon={homeIcons.treasuredTricks}
                      label="恭请法宝"
                      onPress={() => router.push('/ask-treasure')}
          />
          <IconButton icon={homeIcons.volunteer}
                      label="义工申请"
                      onPress={() => router.push('/apply-volunteer')}
          />
          <IconButton icon={homeIcons.library} label="报国书库" onPress={() => Alert.alert('开发中')} />
          <IconButton icon={homeIcons.plan} label="法务安排" onPress={() => Alert.alert('开发中')} />
          <IconButton icon={homeIcons.qAndA} label="师傅答疑" onPress={() => Alert.alert('开发中')} />
          <IconButton icon={homeIcons.paiWeiRegister} label="牌位登记" onPress={() => Alert.alert('开发中')} />
          <IconButton icon={homeIcons.dailyLesson} label="净土日课" onPress={() => Alert.alert('开发中')} />
        </View>
        <View className="flex-row justify-between items-center px-4 py-2 mx-2">
          <Text className="text-lg font-bold text-button">寺院动态</Text>
          <TouchableOpacity onPress={() => { router.push('/temple-news') }}>
            <Text className="text-sm text-button">更多▶</Text>
          </TouchableOpacity>
        </View>
      </>
  );

  return (
      <ImageBackground source={homeIcons.bg} className='h-full'>
        <SafeAreaView edges={['top']}>
          <FlatList
              data={dynamicData}
              ListHeaderComponent={renderHeader}
              renderItem={({ item, index }) => (
                  <NewsCard item={item} isFirst={index === 0} containerStyles='h-24' imageStyles='w-24'/>
              )}
              keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </ImageBackground>
  );
}

export default Home;

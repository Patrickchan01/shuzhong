import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, FlatList, Alert} from 'react-native';
import { icons, images } from '../../constants';
import IconButton from "../../components/IconButton";
import { router } from "expo-router";
import NewsCard from "../../components/NewsCard";
import homeIcons from "../../constants/homeIcons";
import {SafeAreaView} from "react-native-safe-area-context";

const Home = () => {
  const dynamicData = [
    {
      id: '1',
      date: '07/27',
      title: '六月初十 | 菩萨之心, 狱如太虚, 无不包括',
      image: images.authBg,
    },
    {
      id: '2',
      date: '07/26',
      title: '五月十八 | 一切利, 哀, 赏, 称, 讯, 苦, 乐, 各有前因',
      image: images.authBg,
    },
    {
      id: '3',
      date: '07/26',
      title: '五月十八 | 一切利, 哀, 赏, 称, 讯, 苦, 乐, 各有前因',
      image: images.authBg,
    },
    {
      id: '4',
      date: '07/26',
      title: '五月十八 | 一切利, 哀, 赏, 称, 讯, 苦, 乐, 各有前因',
      image: images.authBg,
    },
  ];

  const renderHeader = () => (
      <>
        <View className='h-44 bg-button justify-center items-center m-1'>
          <Text>wait for banner</Text>
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

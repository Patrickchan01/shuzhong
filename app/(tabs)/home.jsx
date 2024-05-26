import {View, Text, FlatList, Image, RefreshControl, ScrollView, TouchableOpacity, ImageBackground} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'
import useAppWrite from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'
import { useGlobalContext } from '../../context/GlobalProvider'
import homeIcons from "../../constants/homeIcons";
import IconButton from "../../components/IconButton";
import {router} from "expo-router";
import NewsCard from "../../components/NewsCard";


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
  // const { user } = useGlobalContext();
  // const { data: posts, refetch } = useAppWrite(getAllPosts);
  // const { data: latestPosts } = useAppWrite(getLatestPosts);
  // const [refreshing, setRefreshing] = useState(false)
  // const onRresh = async () => {
  //   setRefreshing(true);
  //   await refetch();
  //   setRefreshing(false);
  // }
  return (
      <ImageBackground source={homeIcons.bg} className='h-full'>
        <SafeAreaView className='flex-1' edges={['top']}>
          <ScrollView>
            <View className='h-44 bg-button justify-center items-center m-1'>
              <Text>wait for banner</Text>
            </View>
            <View className="flex-wrap flex-row justify-around my-2 mx-2 pt-2">
              <IconButton icon={homeIcons.overview} label="寺院概况" onPress={() => {}} />
              <IconButton icon={homeIcons.treasuredTricks} label="恭请法宝" onPress={() => {}} />
              <IconButton icon={homeIcons.volunteer} label="义工申请" onPress={() => {}} />
              <IconButton icon={homeIcons.library} label="报国书库" onPress={() => {}} />
              <IconButton icon={homeIcons.plan} label="法务安排" onPress={() => {}} />
              <IconButton icon={homeIcons.qAndA} label="师傅答疑" onPress={() => {}} />
              <IconButton icon={homeIcons.paiWeiRegister} label="牌位登记" onPress={() => {}} />
              <IconButton icon={homeIcons.dailyLesson} label="净土日课" onPress={() => {}} />
            </View>
            <View className="flex-row justify-between items-center px-4 py-3.5 mx-2">
              <Text className="text-lg font-bold text-button">寺院动态</Text>

              <TouchableOpacity onPress={() => {router.push('/templeNews')}}>
                <Text className="text-sm text-button">更多▶</Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                  data={dynamicData}
                  renderItem={({ item, index }) => (
                      <NewsCard item={item} isFirst={index === 0} />
                  )}
                  keyExtractor={(item) => item.id}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>

  )
}

export default Home

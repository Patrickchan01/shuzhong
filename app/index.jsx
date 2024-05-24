import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native'
import { Redirect, router } from 'expo-router';
import { images } from '../constants';
import { useGlobalContext } from '../context/GlobalProvider';

export default function Index() {
  const { isLoading, isLogged } = useGlobalContext();
  if (!isLoading && isLogged) {
    return <Redirect href='/home'/>
  }
  return (
      <View>
        <StatusBar style="light" />
        <ImageBackground
            source={{uri:'https://lanhu.oss-cn-beijing.aliyuncs.com/17e76cdee9e1b7d43ba3132ef948ea80'}}
            className="h-full w-full justify-end items-center"
        resizeMode='cover'>
          <View className="justify-center items-center mt-40">
            <TouchableOpacity onPress={() => router.push('/protocol')}
            className='mt-40'>
              <Image
                  source={images.entry}
                  className='w-200 h-50 mt-10 mb-2'
                  resizeMode='contain'
              />
            </TouchableOpacity>

            <Image source={images.hand}
                   className='w-200 h-50 mb-6'
                   resizeMode='contain'
            />
          </View>
        </ImageBackground>
      </View>
  );
}


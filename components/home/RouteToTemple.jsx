import React from 'react';
import {Image, Text, View} from "react-native";
import {images} from "../../constants";

const RouteToTemple = () => {
    return (
        <View className="mx-5 p-4 bg-cardBg rounded-2xl mt-4">
            <Text className='text-button font-bold mb-2 text-lg'>▏地址</Text>
            <Text className='text-base mb-4'>四川省资阳市乐至县遂乐路龙门镇人民政府东16公里</Text>
            <Text className='text-button font-bold mb-2 text-lg'>▏公共交通</Text>
            <Text className='text-base mb-4'>#1 直达（每天仅上午一班）{"\n"}
                发车地点：成都茶店子车站{"\n"}
                发车时间：7:50{"\n"}
                随车电话：13056671228{"\n"}{"\n"}
                #2 转车（班次较多）
            </Text>
            <View className='justify-center items-center'>
                <Image className='w-40 h-40 m-2' source={images.authBg}/>
            </View>
            <Text className='text-base mb-4'>
                扫描上方二维码,进入团子出行小程序、可查询、购买成都、重庆到乐至的汽车,再转乘乐至到报国寺的汽车。
            </Text>
            <Text className='text-button font-bold mb-2 text-lg'>▏自驾</Text>
        </View>
    );
};

export default RouteToTemple;

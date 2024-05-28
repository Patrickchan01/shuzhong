import React from 'react';
import {Text, View,Image} from "react-native";

const ContactCard = ({title,operations,phone,QRCode,mail}) => (
    <View className='rounded-2xl bg-cardBg p-3 m-4'>
        <Text className='text-button font-bold mb-4'>{title}</Text>
        {operations && <Text>职能：{operations}</Text>}
        {phone && <Text>电话：{phone}</Text>}
        {QRCode &&
            <View>
                <Text>微信：</Text>
                <View className='justify-center items-center'>
                    <Image className='w-40 h-40 m-4' source={QRCode}/>
                </View>
            </View>
        }
        {mail &&
        <Text>投稿邮箱：{mail}</Text>
        }

    </View>

)

export default ContactCard;

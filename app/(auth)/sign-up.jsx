import { View, Text, ScrollView, Image, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import {router} from 'expo-router';

const SignUp = () => {
    const [loginMethod, setLoginMethod] = useState('sms'); // 初始为短信快捷登录
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const handleSignIn = async () => {
        try {
            // 登录逻辑
            // await signIn(phone, password);
            // const user = await getCurrentUser();
            // 处理登录成功
            router.push('/home');
        } catch (error) {
            Alert.alert('登录失败', error.message);
        }
    };

    return (
        <ImageBackground
            source={images.authBg}
            className='w-full h-full justify-center items-center'
        >
            <SafeAreaView className='w-full flex-1 justify-center items-center p-6'>
                <ScrollView className='w-full'>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text className='text-yellow-800'> ◀返回</Text>
                    </TouchableOpacity>

                    <View className='justify-center items-center mb-20'>
                        <Image
                            source={images.logo}
                            className='w-50 h-40'
                            resizeMode='contain'
                        />
                    </View>
                    <Text className='text-yellow-800'> ▶注册</Text>
                    <FormField
                    placeholder='请输入手机号'
                    />
                    <View className='w-full flex-row items-center justify-center'>
                        <FormField
                            placeholder='请输入验证码'
                            value={verificationCode}
                            onChangeText={setVerificationCode}
                            keyboardType='number-pad'
                            otherStyles='flex-1'
                        />
                        <CustomButton
                            title="获取验证码"
                            handlePress={() => Alert.alert('验证码', '验证码已发送')}
                            containerStyles="w-35 bg-button h-11 rounded-xl px-2 ml-1"
                            textStyles="text-white"
                        />
                    </View>
                    <FormField
                    placeholder='请输入6-20位密码'
                    />

                    <CustomButton
                        title="注册并登录"
                        handlePress={handleSignIn}
                        containerStyles="mt-2 bg-button-100"
                        textStyles="text-white"
                    />
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignUp;

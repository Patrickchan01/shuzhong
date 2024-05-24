import { View, Text, ScrollView, Image, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import {Link, router} from 'expo-router';
import { signIn, getCurrentUser } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import {StatusBar} from "expo-status-bar";

const SignIn = () => {
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

                        <View className='justify-center items-center'>
                            <Image
                                source={images.logo}
                                className='w-50 h-40'
                                resizeMode='contain'
                            />
                        </View>
                        <View className='w-full h-11 flex-row justify-center mt-20 border border-amber-50 bg-white rounded-xl'>
                            <TouchableOpacity onPress={() => setLoginMethod('sms')} className={`flex-1 justify-center items-center rounded-xl ${loginMethod === 'sms' ? 'bg-amber-700' : 'bg-white'}`}>
                                <Text className={`text-lg font-semibold ${loginMethod === 'sms' ? 'text-white' : 'text-gray-500'}`}>短信快捷登录</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setLoginMethod('password')} className={`flex-1 justify-center items-center rounded-xl ${loginMethod === 'password' ? 'bg-amber-700' : 'bg-white'}`}>
                                <Text className={`text-lg font-semibold ${loginMethod === 'password' ? 'text-white' : 'text-gray-500'}`}>密码登录</Text>
                            </TouchableOpacity>
                        </View>
                        {loginMethod === 'sms' ? (
                            <View className='w-full mt-2'>
                                <FormField
                                    placeholder='+86 请输入手机号'
                                    value={phone}
                                    onChangeText={setPhone}
                                    keyboardType='phone-pad'
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
                                        containerStyles="bg-yellow-500 h-11 rounded-xl px-2"
                                        textStyles="text-white"
                                    />
                                </View>
                            </View>
                        ) : (
                            <View className='w-full mt-2'>
                                <FormField
                                    placeholder='请输入手机号'
                                    value={phone}
                                    onChangeText={setPhone}
                                    keyboardType='phone-pad'
                                />
                                <FormField
                                    placeholder='请输入密码'
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry
                                />

                            </View>
                        )}
                        <CustomButton
                            title="登录"
                            handlePress={handleSignIn}
                            containerStyles="mt-2 bg-yellow-500"
                            textStyles="text-white"
                        />
                        <View className='w-full flex-row items-start mt-2'>
                            <Link href='/sign-up' className='text-base text-yellow-800 underline'>
                                点击注册账号
                            </Link>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
    );
};

export default SignIn;

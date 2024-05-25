import {View, Text, ScrollView, Image, Alert, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {icons, images} from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import {Link, router} from 'expo-router';
import BottomPopUp from "../../components/BottomPopUp";

const SignUp = () => {
    const [loginMethod, setLoginMethod] = useState('sms'); // 初始为短信快捷登录
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleSignIn = async () => {
        if (!isChecked) {
            Alert.alert('提示', '请阅读并同意用户协议和隐私协议');
            return;
        }
        setIsModalVisible(true);
        try {
            // 登录逻辑
            // await signIn(phone, password);
            // const user = await getCurrentUser();
            // 处理登录成功
            // router.push('/home');
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
                    <View className='flex-row justify-center items-center mt-4'>
                        <TouchableOpacity onPress={() => setIsChecked(!isChecked)} className="relative">
                            <Image
                                source={icons.checkBox}
                                className='w-5 h-5 mr-2'
                                resizeMode='contain'
                            />
                            {isChecked && (
                                <Image
                                    source={icons.check}
                                    className='w-7 h-7 mr-2 absolute top-[-7px] right-[-5px]'
                                    resizeMode='contain'
                                />
                            )}
                        </TouchableOpacity>
                        <Text className='text-button'>
                            阅读并同意
                            <Link href={'/home'} className='underline'>
                                《用户协议》
                            </Link>
                            和
                            <Link href={'/home'} className='underline'>
                                《隐私协议》
                            </Link>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <BottomPopUp
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                leftButtonTitle='不同意'
                rightButtonTitle='同意并继续'
                onLeftButtonPress={()=> setIsModalVisible(false)}
                onRightButtonPress={() => {
                    router.push('/home')
                    setIsModalVisible(false)
                }}
                children={
                <View className='justify-center items-center w-full'>
                    <Text className='text-button text-xl mb-2 font-bold'>服务协议和隐私政策等指引</Text>
                    <Text className='text-button mb-5'>
                        进入下一步前请先阅读并同意{"\n"} APP
                        <Link href={'/home'} className='underline'>
                            《用户协议》
                        </Link>
                        和
                        <Link href={'/home'} className='underline'>
                            《隐私协议》
                        </Link>
                    </Text>
                </View>
                }
            />
        </ImageBackground>
    );
};

export default SignUp;

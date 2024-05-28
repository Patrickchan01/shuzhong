import {Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import React, {useState} from "react";
import {router} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import CustomHeader from "../../components/utils/CustomHeader";


const FindPassword = () => {
    const [verificationCode, setVerificationCode] = useState('');

  return (
      <SafeAreaView className="bg-primary h-full">
          <ScrollView>
              <View className='p-4 w-full mt-6'>
                  <CustomHeader
                      title='找回密码'
                  />
                  <FormField
                      placeholder='注册或绑定的手机号'
                      otherStyles='mt-8'
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
                  <CustomButton
                      title="下一步"
                      handlePress={()=>router.push('/home')}
                      containerStyles="mt-2 bg-button-100"
                      textStyles="text-white"
                  />
              </View>
          </ScrollView>
      </SafeAreaView>
  )
}

export default FindPassword;

import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignUp = () => {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const { setUser, setIsLogged } = useGlobalContext;
    const submit = async () => {
        if (!form.userName || !form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields')
        }
        setIsSubmitting(true);
        try {
            const result = await createUser(form.email, form.password, form.userName);
            setUser(result);
            setIsLogged(true)
            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className='w-full justify-center min-h-[83vh] px-4 my-6'>
                    <Image source={images.logo}
                        resizeMode='contain'
                        className='w-[115px] h-[45px]'
                    />
                    <Text className='text-white text-2xl mt-10 font-psemibold'>
                        Sign Up to Aora
                    </Text>
                    <FormField
                        title='UserName'
                        value={form.userName}
                        handleChangeText={(e) => setForm({ ...form, userName: e })}
                        otherStyles='mt-10'
                    />
                    <FormField
                        title='Email'
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles='mt-7'
                        keyBoardType='email-address'
                    />
                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles='mt-7'
                    />

                    <CustomButton
                        title='注册并登陆'
                        handlePress={submit}
                        containerStyles='mt-7'
                        isLoading={isSubmitting}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignUp

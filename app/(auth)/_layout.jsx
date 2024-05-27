import React from 'react'
import { Stack,router } from 'expo-router'
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name='protocol'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='sign-in'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='sign-up'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='find-password'
                    options={{
                        title:'找回密码',
                        headerShown: true,
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => router.back()}>
                                <Ionicons name="arrow-back" size={24} />
                            </TouchableOpacity>
                        ),
                        headerStyle: {
                            backgroundColor: '#CBC4B5',
                        },
                        headerTitleStyle: {
                            fontSize: 20,
                            color:'#562931'
                        }
                    }}
                />
            </Stack>
        </>
    )
}

export default AuthLayout

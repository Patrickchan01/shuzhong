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
                        headerShown: false
                    }}
                />
            </Stack>
        </>
    )
}

export default AuthLayout

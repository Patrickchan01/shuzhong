import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-10 h-10"
            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xl`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#795c67",
                    tabBarInactiveTintColor: "#898989",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#c2b69e",
                        borderTopWidth: 1,
                        borderTopColor: "#c2b69e",
                        height: 100,
                    },
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="首页"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='course'
                    options={{
                        title: 'BaoGuoCourse',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.course}
                                color={color}
                                name="报国讲堂"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='listen'
                    options={{
                        title: 'Listen',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.listen}
                                color={color}
                                name="听经台"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="我的"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout

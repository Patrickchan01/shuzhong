import {router, Stack} from "expo-router";
import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";



const HomeLayout = () => {
  return(
      <>
          <Stack>
              <Stack.Screen
                  name='temple-news'
                  options={{
                      headerShown: false
                  }}
              />
              <Stack.Screen
                  name='temple-overview'
                  options={{
                      title:'寺院概况',
                      headerShown: true,
                      headerLeft: () => (
                          <TouchableOpacity onPress={() => router.back()}>
                                  <Text className='text-button font-bold text-xl'>◀返回</Text>
                          </TouchableOpacity>
                      ),
                      headerStyle: {
                          backgroundColor: '#CBC4B5',
                      },
                      headerTitleStyle: {
                          fontSize:20,
                          color:'#562931'
                      }
                  }}
              />
              <Stack.Screen
                  name='ask-treasure'
                  options={{
                      headerShown: false
                  }}
              />
              <Stack.Screen
                  name='apply-volunteer'
                  options={{
                      headerShown: false
                  }}
              />
          </Stack>
      </>
  )
}

export default HomeLayout;

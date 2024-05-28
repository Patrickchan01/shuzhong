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
                      headerShown:false
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

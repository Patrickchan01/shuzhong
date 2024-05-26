import {Stack} from "expo-router";
import React from 'react'



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
                      headerShown: false
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

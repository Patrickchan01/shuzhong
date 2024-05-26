import {View, Text, ImageBackground, SafeAreaView} from "react-native";
import homeIcons from "../../constants/homeIcons";


const TempleOverview = () => {
  return(
      <ImageBackground
          source={homeIcons.bg}
          className='h-full w-full justify-center items-center'
      >
          <SafeAreaView edges={['top']}>
              <View><Text>1111</Text></View>
          </SafeAreaView>
      </ImageBackground>
  )
}

export  default TempleOverview;

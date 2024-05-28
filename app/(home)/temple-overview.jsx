import {View, Image, ImageBackground, ScrollView} from "react-native";
import homeIcons from "../../constants/homeIcons";
import TabButton from "../../components/utils/TabButton";
import {images} from "../../constants";
import {useState} from "react";
import OverviewContent from "../../components/home/OverViewContent";
import ContactContent from "../../components/home/ContactUs";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomHeader from "../../components/utils/CustomHeader";
import RouteToTemple from "../../components/home/RouteToTemple";


const TempleOverview = () => {
    const [activeTab, setActiveTab] = useState('overview');
  return(
      <ImageBackground
          source={homeIcons.bg}
          className='h-full w-full items-center'
      >
          <SafeAreaView edges={['top']}>
              <ScrollView>
                  <View className="mx-2 py-2">
                      <CustomHeader
                          title='寺院概况'
                      />
                      <Image
                          source={images.authBg}
                          className='w-full h-40 rounded-2xl'
                          resizeMode='cover'
                      />
                      <View className='flex-row justify-around flex-wrap mt-2'>
                          <TabButton label="寺院介绍" onPress={() => setActiveTab('overview')} isActive={activeTab === 'overview'} />
                          <TabButton label="祖师传承" onPress={() => setActiveTab('heritage')} isActive={activeTab === 'heritage'} />
                          <TabButton label="寺院巡礼" onPress={() => setActiveTab('celebrate')} isActive={activeTab === 'celebrate'} />
                          <TabButton label="走进报国" onPress={() => setActiveTab('baoGuo')} isActive={activeTab === 'baoGuo'} />
                          <TabButton label="到寺路线" onPress={() => setActiveTab('route')} isActive={activeTab === 'route'} />
                          <TabButton label="联系我们" onPress={() => setActiveTab('contact')} isActive={activeTab === 'contact'} />
                      </View>
                      {activeTab === 'overview' && <OverviewContent />}
                      {activeTab === 'contact' && <ContactContent />}
                      {activeTab === 'route' && <RouteToTemple />}
                  </View>
              </ScrollView>
          </SafeAreaView>
      </ImageBackground>
  )
}

export  default TempleOverview;

import { SafeAreaView, Text, View } from 'react-native';
import CustomButton from "../../components/CustomButton";
import {Link, router} from "expo-router";

const Protocol = () => {
    const handleAgree = () => {
        router.push('sign-in')
    };

    const handleDisagree = () => {
        router.back();
    };

    return (
        <SafeAreaView className='bg-primary h-full flex-1 justify-center items-center p-4'>
            <View className='bg-white rounded-xl p-6 mx-6 mt-1'>
                <Text className='text-center text-2xl font-semibold mb-4'>温馨提示</Text>
                <Text className='text-base leading-6 mb-4 text-gray-500'>
                    感恩使用蜀中净土app{"\n"}
                    在您开始使用之前，请您仔细阅读并同意《用户协议》和《隐私政策》，以便您了解我们提供的服务内容和我们在收集和使用您相关个人信息时的处理规则。
                    1. 为了识别设备，进行信息推送和安全风控，我们可能会申请系统设备权限收集国际移动设备识别码，以及其他设备信息如网络设备硬件地址、日志信息，并申请存储权限，用于下载及缓存相关文件。
                    2. 为了帮助你在发布的信息中展示位置或丰富信息推荐维度，我们可能会申请位置权限。城市/区县位置无需使用位置权限，仅通过IP地址确定“城请您审慎阅读并确认签署同意
                    <Link href='/sign-up' className='text-base text-yellow-500 underline'>
                        《用户协议》
                    </Link>、
                    <Link href='/sign-up' className='text-base text-yellow-500 underline'>
                    《隐私政策》
                </Link>
                </Text>
                <View className='flex-row justify-between'>
                    <CustomButton
                        title="不同意"
                        handlePress={handleDisagree}
                        containerStyles="bg-gray-400 flex-1 mr-2"
                        textStyles="text-white"
                    />
                    <CustomButton
                        title="同意并继续"
                        handlePress={handleAgree}
                        containerStyles="bg-yellow-300 flex-1 ml-2"
                        textStyles="text-white"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Protocol;

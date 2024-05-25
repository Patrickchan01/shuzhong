import React from 'react';
import { View, Modal, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { styled } from 'nativewind';
import CustomButton from "./CustomButton";

const BottomPopup = ({ visible, onClose, children, leftButtonTitle, rightButtonTitle, onLeftButtonPress, onRightButtonPress }) => {

    const handleLeftButtonPress = () => {
        onLeftButtonPress();
    };

    const handleRightButtonPress = () => {
        onRightButtonPress();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View className="flex-1 justify-end">
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <View className="bg-white rounded-t-xl p-5 shadow-lg bg-primary">
                            {children}
                            <View className="flex-row justify-center mb-3">
                                <CustomButton
                                    title={leftButtonTitle}
                                    handlePress={handleLeftButtonPress}
                                    containerStyles="bg-gray-400 px-6 mr-5 h-8"
                                    textStyles="text-white"
                                />
                                <CustomButton
                                    title={rightButtonTitle}
                                    handlePress={handleRightButtonPress}
                                    containerStyles="bg-button-100 px-2 h-8 ml-5"
                                    textStyles='text-white'
                                />

                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default BottomPopup;

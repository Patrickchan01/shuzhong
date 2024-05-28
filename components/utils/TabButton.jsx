import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const TabButton = ({ label, onPress, isActive }) => (
        <TouchableOpacity
            onPress={onPress}
            className={`px-4 py-2 my-3 mx-3 items-center rounded-xl ${isActive ? 'bg-button' : 'bg-cardBg-100'}`}
        >
            <Text className={`font-bold text-base ${isActive ? 'text-white' : 'text-text'}`}>{label}</Text>
        </TouchableOpacity>
);

export default TabButton;

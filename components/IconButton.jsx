import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';

const IconButton = ({ icon, label, onPress }) => (
    <TouchableOpacity onPress={onPress} className="items-center w-1/4 py-1.5">
        <Image source={icon} className="w-16 h-16 mb-1" resizeMode='contain'/>
        <Text className="text-l text-center text-button font-bold">{label}</Text>
    </TouchableOpacity>
);

export default IconButton;

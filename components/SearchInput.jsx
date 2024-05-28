import { View, TextInput, TouchableOpacity, Image, Alert, Text } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';
import { router, usePathname } from 'expo-router';

const SearchInput = ({ initialQuery }) => {
    const pathName = usePathname();
    const [query, setQuery] = useState(initialQuery || '');

    const handleSearch = () => {
        if (!query) {
            return Alert.alert('Missing Query', 'Please input something to search results across database');
        }
        if (pathName.startsWith('/search')) {
            router.setParams({ query });
        } else {
            router.push(`/search/${query}`);
        }
    };

    return (
        <View className='h-10 px-4 bg-cardBg border-2 rounded-full mx-4 my-1 border-button justify-center items-center flex-row'>
            <TouchableOpacity
                onPress={handleSearch}
                className='absolute left-4'
            >
                <Image
                    source={icons.search}
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <TextInput
                className='flex-1 text-white text-base font-pregular ml-8'
                value={query}
                placeholder='请输入搜索内容'
                placeholderTextColor='#CDCDE0'
                onChangeText={(e) => setQuery(e)}
            />
            <TouchableOpacity
                onPress={handleSearch}
                className='absolute right-1 bg-button px-3 rounded-full py-1.5'
            >
                <Text className='text-white text-xs'>搜索</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;

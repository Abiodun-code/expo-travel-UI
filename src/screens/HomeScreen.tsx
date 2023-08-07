import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { HomeParam } from '../types/stackParam';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { MaterialIcons } from '@expo/vector-icons';
import Categories from '../components/Categories';
import SortCategories from '../components/SortCategories';
import Destination from '../components/Destination';

const HomeScreen = ({navigation}: HomeParam) => {

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <View className='flex-1 bg-white'>
      <ScrollView showsVerticalScrollIndicator={false} className='space-y-6'>
        {/* header avatar and text */}
        <SafeAreaView style={styles.safeAndroid} className='mx-5 flex-row justify-between items-center mb-10'>
          <Text className='font-bold text-neutral-700' style={{fontSize: wp(7)}}>Let's Discover</Text>
          <TouchableOpacity activeOpacity={0.7} className=''>
            <Image source={require("../../assets/images/avatar.png")} style={{width: wp(10), height: hp(5)}}/>
          </TouchableOpacity>
        </SafeAreaView>
        {/* search bar */}
        <View className='mx-5 mb-4'>
          <View className='flex-row items-center p-4 rounded-full bg-neutral-100 space-x-2 pl-6'>
            <MaterialIcons name='search' size={25} color={"gray"}/>
            <TextInput
              placeholder='Search destination'
              placeholderTextColor={"gray"}
              className='flex-1 text-base tracking-wider pl-1'
            />
          </View>  
        </View>
        {/* categories */}
        <View className="mb-4">
          <Categories/>
        </View>
        {/* sort categories */}
        <View className='mb-4'>
          <SortCategories/>
        </View>
        {/* destination */}
        <View>
          <Destination/>
        </View>
      </ScrollView>
      <StatusBar style='dark'/>
    </View>
  );
}

 
export default HomeScreen;
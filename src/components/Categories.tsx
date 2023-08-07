import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { theme } from '../theme';
import { categoriesData } from '../constants';

const Categories = () => {
  return (
    <View className='space-y-5'>
      <View className='mx-5 flex-row items-center justify-between'>
        <Text className='text-neutral-700 font-semibold' style={{fontSize: wp(4)}}>Categories</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={{fontSize: wp(4), color: theme.text}}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        className='space-x-4'
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((item, index)=>{
          return(
            <TouchableOpacity activeOpacity={0.7} key={index} className='flex items-center space-y-3'>
              <Image source={item.image} className='rounded-3xl' style={{width: wp(20), height: hp(10)}}/>
              <Text className='text-neutral-700 font-medium' style={{ fontSize: wp(3) }}>{item.title}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
}

 
export default Categories;
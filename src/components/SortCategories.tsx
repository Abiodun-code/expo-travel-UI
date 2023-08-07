import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { sortCategoryData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { theme } from '../theme';

const SortCategories = () => {

  const [activeSort, setActiveSort] = useState("Popular")

  return (
    <View className='flex-row items-center mx-4 justify-around rounded-full bg-neutral-100'>
      {sortCategoryData.map((item, index)=>{
        return(
          <TouchableOpacity activeOpacity={0.7} key={index} 
            onPress={()=>setActiveSort(item)}
            className={`flex rounded-full p-3 px-4 ${item === activeSort ? "bg-white shadow py-2 px-4" : ""}`}
          >
            <Text className='font-semibold' style={{ fontSize: wp(4), color: item === activeSort ? theme.text : "rgba(0,0,0,0.6)"}}>{item}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}


export default SortCategories;
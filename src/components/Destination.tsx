import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { destinationData } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DestinationParam, stackParams } from '../types/stackParam';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type DestinationProp = {
  item: string | any;
  index: number;
}

const Destination = () => {
  return (
    <View className='flex-row mx-4 items-center justify-between flex-wrap'>
      {destinationData.map((item, index)=>{
        return(
          <DestinationCard item={item} index={index}/>
        )
      })}
    </View>
  );
}

export default Destination;


const DestinationCard = ({ item, index }:DestinationProp) =>{

  const [isFavourite, setIsFavourite] = useState(false)
  
  const navigation = useNavigation<NativeStackNavigationProp<stackParams, "Destination", undefined>>()
  return(
    <TouchableOpacity
      activeOpacity={0.7} key={index} onPress={() => navigation.navigate("Destination", { destinationProp: {...item} })}
      style={{width: wp(44), height: wp(65)}}
      className='flex relative justify-end p-4 py-6 space-y-2 mb-5'
    >
      <Image source={item.image} style={{ width: wp(44), height: wp(65), borderRadius:35 }} className='absolute'/>
      <View className='absolute bottom-0'>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{ width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>setIsFavourite(!isFavourite)}
        style={{backgroundColor: "rgba(255,255,255,0.4)"}}
        className={`absolute top-1 right-3 p-3 rounded-full`}
      >
        <MaterialCommunityIcons name='heart' size={wp(5)} color={isFavourite ? "red" : "white"}/>
      </TouchableOpacity>
      <Text style={{fontSize: wp(4)}} className='font-semibold text-white'>{item.title}</Text>
      <Text style={{ fontSize: wp(2.7) }} className=' text-white'>{item.shortDescription}</Text>
    </TouchableOpacity>
  )
}
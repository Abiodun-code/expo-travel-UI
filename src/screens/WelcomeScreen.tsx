import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { WelcomeParam } from '../types/stackParam';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

const WelcomeScreen = ({navigation}: WelcomeParam) => {

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])
  
  return (
    <View className="flex-1 justify-end flex">
      {/* Background image */}
      <Image source={require("../../assets/images/welcome.png")} className="w-full h-full absolute"/>
      {/* Content and Linear gradient */}
      <View className="p-5 pb-10 space-y-8">
        <View className="space-y-3">
          <Text className="text-white text-5xl font-bold" style={{fontSize: wp(10)}}>Traveling made easy!</Text>
          <Text className='text-neutral-200 font-medium' style={{ fontSize: wp(4) }}>
            Experience the world's best adventures around the world with us
          </Text>
        </View>
        <TouchableOpacity className="bg-orange-500 mx-auto p-3 px-14 rounded-full">
          <Text className='text-white font-bold' style={{ fontSize: wp(5.5) }}>Let's Go</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style={"dark"}/>
    </View>
  );
}

 
export default WelcomeScreen;
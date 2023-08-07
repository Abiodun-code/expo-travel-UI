import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { DestinationParam, stackParams } from '../types/stackParam';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { styles, theme } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const DestinationScreen = ({ navigation, route }: DestinationParam) => {

  const [isFavourite, setIsFavourite] = useState(false)

  const data = route.params.destinationProp

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <View className="bg-white flex-1">
      {/* destination image */}
      <Image source={data.image} style={{width: wp(100), height: hp(55)}}/>
      {/* back button */}
      <SafeAreaView style={styles.safeAndroid} className="flex-row justify-between items-center w-full absolute">
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.goBack()}
          className="p-2 rounded-full ml-4"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <MaterialCommunityIcons name='arrow-left' size={wp(6)} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setIsFavourite(!isFavourite)}
          className="p-2 rounded-full mr-4"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <MaterialCommunityIcons name='heart' size={wp(6)} color={isFavourite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>
      {/* title, description and booking button */}
      <View 
        className="pt-8 px-5 flex flex-1 justify-between bg-white -mt-14"
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row justify-between items-start">
            <Text style={{fontSize: wp(7)}} className="font-bold text-neutral-700 flex-1">{data.title}</Text>
            <Text style={{fontSize: wp(7), color: theme.text}} className="font-semibold">${data.price}</Text>
          </View>
          <Text style={{ fontSize: wp(3.7) }} className="text-neutral-700 tracking-wider mb-2">{data.longDescription}</Text>
          <View className="flex-row justify-between mx-1">
            <View className="flex-row space-x-2 items-start">
              <MaterialCommunityIcons name='clock' size={wp(7)} color="skyblue" />
              <View className="flex space-y-2">
                <Text className="text-neutral-700 font-bold" style={{fontSize: wp(4.7)}}>{data.duration}</Text>
                <Text className="text-neutral-600 tracking-wide">Duration</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <Ionicons name='location' size={wp(7)} color="#f87171" />
              <View className="flex space-y-2">
                <Text className="text-neutral-700 font-bold" style={{ fontSize: wp(4.7) }}>{data.distance}</Text>
                <Text className="text-neutral-600 tracking-wide">Distance</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <Ionicons name='partly-sunny' size={wp(7)} color="orange" />
              <View className="flex space-y-2">
                <Text className="text-neutral-700 font-bold" style={{ fontSize: wp(4.7) }}>{data.weather}</Text>
                <Text className="text-neutral-600 tracking-wide">Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: theme.bg(0.7), width: wp(50), height: wp(15)}}
          className="mb-6 mx-auto flex justify-center items-center rounded-full"
        >
          <Text className="text-white font-bold" style={{fontSize: wp(5.5)}}>Book now</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light"/>
    </View>
  );
}

 
export default DestinationScreen;
import React from "react";
import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View className="flex justify-center">
      <Text className="text-left font-bold  text-white mx-8 my-2">
        <FontAwesome name="user-plus" size={32} color="white" />
        <Text>POKEDEX</Text>
      </Text>
    </View>
  );
};

export default Footer;

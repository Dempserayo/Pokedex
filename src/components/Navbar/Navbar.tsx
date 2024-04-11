import React from "react";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <SafeAreaView className="bg-red-600  pt-6 w-full">
      <View className="flex flex-row w-full bg-red-400 mt-2">
        <View className="rounded-full w-12 h-12 mx-2 border-4 border-gray-400 bg-blue-500">
          <MaterialIcons name="catching-pokemon" size={40} color="white" />
        </View>

        <View className="rounded-full w-4 h-4 mx-1 mt-4 border-4 border-red-500 bg-red-500">
          <MaterialIcons name="catching-pokemon" size={8} color="white" />
        </View>

        <View className="rounded-full w-4 h-4 mx-1 mt-4 border-4 border-yellow-600 bg-yellow-500">
          <MaterialIcons name="catching-pokemon" size={8} color="white" />
        </View>

        <View className="rounded-full w-4 h-4 mx-1 mt-4 border-4 border-green-600 bg-green-500">
          <MaterialIcons name="catching-pokemon" size={8} color="white" />
        </View>

        <View className="rounded-full w-full h-4 mx-2 mt-4 border-4 border-gray-300 bg-gray-50"></View>
      </View>

      <View className="flex flex-row justify-start items-center mt-4 mx-4">
        <TextInput
          className="bg-white rounded-full font-extrabold px-4 py-2 w-64 mb-4 mr-2"
          placeholder="POKEDEX"
        />

        <Text className="bg-white rounded-full px-4 py-2 mb-4 mr-2">
          {" "}
          <MaterialCommunityIcons
            name="pokemon-go"
            size={24}
            color="black"
          />{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

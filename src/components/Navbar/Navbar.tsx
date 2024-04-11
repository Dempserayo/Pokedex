import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { PokemonClient } from "pokenode-ts";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <SafeAreaView className="bg-red-500 h-28 w-full">
      <Text className="text-white font-bold text-2xl w-full text-center">
        {" "}
        <MaterialCommunityIcons
          name="pokeball"
          size={32}
          color="white"
          className="mx-20"
        />{" "}
        Pokedex{" "}
      </Text>

      <View className="flex flex-row justify-start items-center mt-4 mx-4">
        <TextInput
          className="bg-white rounded-full px-4 py-2 w-64 mb-4 mr-2"
          placeholder="Pokedex"
        />

        <Text className="bg-white rounded-full px-4 py-2 w-auto mb-4 mr-2">
          #
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

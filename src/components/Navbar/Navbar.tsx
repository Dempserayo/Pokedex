import React from "react";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <SafeAreaView className="bg-red-600 w-full">
      <Text className="font-bold text-2xl text-white w-full flex flex-row mx-4 ">
        {" "}
        <MaterialCommunityIcons
          name="pokeball"
          size={24}
          color="white"
          className="shadow-2xl"
        />{" "}
        Pokédex{" "}
      </Text>
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

import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export const Hero = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 10 }}
      >
        <View className="bg-white rounded-xl -mx-2 flex flex-row flex-wrap justify-center gap-2">
          {pokemonList.map((pokemon, index) => (
            <View key={index} className="flex justify-center items-center">
              <PokemonCard pokemon={pokemon} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const PokemonCard = ({ pokemon }: { pokemon: any }) => {
  const [pokemonDetails, setPokemonDetails] = useState<any | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(pokemon.url);
        console.log(response);
        const data = await response.json();
        console.log(data);

        setPokemonDetails(data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon.url]);

  return (
    <>
      {pokemonDetails && (
        <View className="bg-gray-50 border-4 border-gray-200 w-36 flex justify-center items-center h-40 rounded-3xl">
          <Text className="text-center text-gray-900 text-lg ">
            {pokemonDetails.name}
          </Text>

          <Text className="text-center text-xl  text-gray-900">
            <MaterialCommunityIcons name="radar" size={24} color="gray" />
            <MaterialCommunityIcons name="pokemon-go" size={24} color="gray" />
            {pokemonDetails.id}
          </Text>

          <Image
            source={{ uri: pokemonDetails.sprites.front_default }}
            style={{ width: 90, height: 90, alignSelf: "center" }}
          />
        </View>
      )}
    </>
  );
};

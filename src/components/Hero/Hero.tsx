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
      <ScrollView contentContainerStyle={{ flexGrow: 2 }}>
        <View className="bg-green-800 opacity-75 h-96 w-full mx-auto rounded-3xl flex justify-center border-8 border-gray-300">
          <ScrollView>
            {pokemonList.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))}
          </ScrollView>
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
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon.url]);

  return (
    <View className="rounded-3xl h-80 w-80 mx-auto mt-10 my-20 backdrop-blur-3xl">
      {pokemonDetails && (
        <>
          <Text className="text-center  text-green-100 text-4xl font-black">
            {pokemonDetails.name}
          </Text>
          <Text className="text-center text-2xl  text-white font-bold">
            <MaterialCommunityIcons name="radar" size={24} color="white" />
            <MaterialCommunityIcons name="pokemon-go" size={24} color="white" />
            {pokemonDetails.id}
          </Text>
          <Image
            source={{ uri: pokemonDetails.sprites.front_default }}
            style={{ width: 300, height: 300, alignSelf: "center" }}
            className="opacity-75 "
          />
        </>
      )}
    </View>
  );
};

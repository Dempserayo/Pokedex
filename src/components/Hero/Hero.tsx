import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ScrollView, Image } from "react-native";

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
        <View className="bg-white w-full mx-auto rounded-3xl flex justify-center">
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
    <View className="bg-gray-200 rounded-3xl h-80 w-80 mx-auto mt-10 my-10 border-2 border-gray-300">
      {pokemonDetails && (
        <>
          <Text className="text-center text-white text-5xl font-bold">
            {pokemonDetails.name}
          </Text>
          <Text className="text-center text-2xl text-white font-bold">
            #{pokemonDetails.id}
          </Text>
          <Image
            source={{ uri: pokemonDetails.sprites.front_default }}
            style={{ width: 250, height: 200, alignSelf: "center" }}
          />
        </>
      )}
    </View>
  );
};

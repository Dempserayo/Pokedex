import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ScrollView, Image } from "react-native"; // Importa Image desde react-native
import { PokemonClient } from "pokenode-ts";

export const Hero = () => {
  const [pokemonData, setPokemonData] = useState<any | null>(null); // Define el tipo del estado para almacenar los datos del Pokémon

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const api = new PokemonClient();
        const pokemon = await api.getPokemonById(2);
        setPokemonData(pokemon);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <SafeAreaView style={{ flex: 8 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="bg-white h-[750px] w-96 mx-auto rounded-3xl flex justify-center">
          <ScrollView>
            {pokemonData && (
              <View className="bg-gray-200 rounded-3xl  h-80 w-80 mx-auto mt-8">
                <Text className="text-center text-2xl font-bold">
                  {pokemonData.id}
                </Text>
                <Text className="text-center text-2xl  font-bold">
                  {pokemonData.name}
                </Text>
                {pokemonData.sprites && (
                  <Image
                    className="z-50"
                    source={{ uri: pokemonData.sprites.front_default }}
                    style={{ width: 350, height: 200 }}
                  />
                )}

                <View className="bg-gray-100 rounded-3xl h-36  w-80 -mt-20 "></View>
              </View>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

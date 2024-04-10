import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";

export const Hero = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<any | null>(null);

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

  const handlePokemonPress = (pokemon: any) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 2 }}>
        <View
          style={{ backgroundColor: "white", width: 300, alignSelf: "center" }}
        >
          <ScrollView>
            {pokemonList.map((pokemon, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePokemonPress(pokemon)}
              >
                <PokemonCard pokemon={pokemon} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <Modal
        visible={selectedPokemon !== null}
        transparent={true}
        animationType="fade"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}
            >
              {selectedPokemon?.name}
            </Text>
            <Image
              source={{ uri: selectedPokemon?.sprites.front_default }}
              style={{ width: 200, height: 200, marginBottom: 20 }}
            />
            <TouchableOpacity onPress={closeModal}>
              <Text style={{ color: "blue", fontSize: 18 }}>Cerrar Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const PokemonCard = ({ pokemon }: { pokemon: any }) => {
  return (
    <View
      style={{
        backgroundColor: "gray",
        borderRadius: 8,
        margin: 10,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
        {pokemon.name}
      </Text>
    </View>
  );
};

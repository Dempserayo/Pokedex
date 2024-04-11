import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { PokemonClient } from "pokenode-ts";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Hero } from "./Hero/Hero";

const PokemonList = () => {
  useEffect(() => {
    const fetchPokemon = async () => {
      const api = new PokemonClient();
      await api
        .getPokemonById(4)
        .then((pokemon) => {
          console.log(pokemon);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchPokemon();
  }, []);

  return (
    <SafeAreaView className="bg-red-600 h-full">
      <Navbar />
      <Hero />
      <Footer />
    </SafeAreaView>
  );
};

export default PokemonList;

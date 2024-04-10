import React from "react";
import PokemonList from "./src/components/PokemonList";
import {
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <PokemonList />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Card from "./components/Card"; 
import useSimpson from "./hooks/useSimpson";
const App = () => {
  const { quote, loading, fetchSimpsonsQuote } = useSimpson(); // Usamos el hook

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : quote ? (
        <Card
          character={quote.character}
          quote={quote.quote}
          img={quote.image}
          fet={fetchSimpsonsQuote}
        />
      ) : (
        <Text style={styles.errorText}>No se pudo cargar la cita.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default App;

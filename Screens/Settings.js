import React from "react";
import { SafeAreaView, View, Text, Button, TextInput, StyleSheet } from "react-native";
import firebase from "../assets/db-connect";
import Input from "../assets/Input";

function SettingsPage() {
  return (
    <SafeAreaView style={styles.container}>

      <Text>Margenes de Temperatura</Text>
      <View style={styles.row}>
        <Text>Minima</Text>
        <Text> Maxima</Text>
      </View>

      <View style={styles.row}>
        <Input />
        <Input />
      </View>

      <Text>Márgenes de Humedad</Text>
      <View style={styles.row}>
        <Text>Mínima</Text>
        <Text>Máxima</Text>
      </View>

      <View style={styles.row}>
        <Input/>
        <Input/>
      </View>
    </SafeAreaView>
  );
}

export { SettingsPage };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "15%",
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#eaeaea",
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    justifyContent: "space-evenly",
  },
});

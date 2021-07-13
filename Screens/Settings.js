import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import firebase from "../assets/db-connect";
import Input from "../assets/Input";

function SettingsPage() {
  return (
    <View style={styles.back}>
    <ScrollView style={styles.container}>
      <View style={styles.objContainer} elevation={5}>
        <Text style={styles.text}>Márgenes de Temperatura</Text>
        <View style={styles.row}>
          <Text>Minima</Text>
          <Text> Maxima</Text>
        </View>

        <View style={styles.row}>
          <Input />
          <Input />
        </View>
      </View>

      <View style={styles.objContainer} elevation={5}>
        <Text style={styles.text}>Márgenes de Humedad</Text>
        <View style={styles.row}>
          <Text>Mínima</Text>
          <Text>Máxima</Text>
        </View>

        <View style={styles.row}>
          <Input />
          <Input />
        </View>
      </View>

      <View style={styles.objContainer} elevation={5}>
        <Text style={styles.text}>Márgenes de Luminosidad</Text>
        <View style={styles.row}>
          <Text>Mínima</Text>
          <Text>Máxima</Text>
        </View>

        <View style={styles.row}>
          <Input />
          <Input />
        </View>
      </View>

      <View style={styles.objContainer} elevation={5}>
        <Text style={styles.text}>Márgenes de Gas</Text>
        <View style={styles.row}>
          <Text>Mínima</Text>
          <Text>Máxima</Text>
        </View>

        <View style={styles.row}>
          <Input />
          <Input />
        </View>
      </View>
    </ScrollView>
    </View>
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
    backgroundColor: "dodgerblue",
  },

  text: {
    marginTop: 5,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 7,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 2,
    justifyContent: "space-evenly",
    textAlignVertical: "center",
  },

  objContainer: {
    borderColor: "black",
    borderWidth: 0,
    borderRadius: 13,
    backgroundColor: "white",
    marginBottom: 20,
    padding: 15,
  },
  back: {
    flex: 1,
    backgroundColor: "#1e90ff",
  },
});

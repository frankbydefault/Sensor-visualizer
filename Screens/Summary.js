import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { Display } from "./Components/Display";

function Summary() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Display />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "space-around",
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    borderColor: "#000000",
  },
});

export { Summary };

import React from "react";
import { SafeAreaView, View, Text,StyleSheet } from "react-native";
import { Display } from "./Components/Display";

function Summary() {
  return (
    <SafeAreaView style={styles.container}>
      <Display/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems:"center",
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    borderColor: "#000000",
  },
});

export { Summary };

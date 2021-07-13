import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { Display } from "./Components/Display";

function Summary() {
  return (
    <View style={styles.back}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Display />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    alignContent: "space-around",
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    borderColor: "#000000",
  },
  back: {
    flex: 1,
    backgroundColor: "#1e90ff",
  },
});

export { Summary };

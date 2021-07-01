import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Display } from "./Components/Display";
function Summary() {
  return (
    <SafeAreaView>
      <Text>Summary page</Text>
      <Display />
      <Display />
    </SafeAreaView>
  );
}

export { Summary };
